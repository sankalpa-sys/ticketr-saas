import {mutation, query} from "./_generated/server";
import { v } from "convex/values";
export const updateUser = mutation({
    args: {
        userId: v.string(),
        name: v.string(),
        email: v.string(),
    },
    handler: async (ctx, {userId, name, email}) => {
        const existingUser = await ctx.db.query("users")
            .withIndex("by_user_id", (q)=>q.eq("userId", userId)).first()
        if(existingUser){
            await ctx.db.patch(existingUser._id, {
                name, email
            })
            return existingUser._id
        }

        const newUserId = await ctx.db.insert("users", {
            name, email, userId, stripeConnectId: undefined
        })
        return newUserId
    },
});

export const getUserById = query({
args: {userId: v.string()},
handler: async (ctx, {userId}) => {
    const user = await ctx.db.query("users")
        .withIndex("by_user_id", (q)=>q.eq("userId", userId)).first()
    return user
},
})