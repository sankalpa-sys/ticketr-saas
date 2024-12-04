import { query } from "./_generated/server";
import { v } from "convex/values";

// Return the last 100 tasks in a given task list.
export const get = query({
    args: {},
    handler: async (ctx) => {
        const events
            = await ctx.db.query("events")
            .filter((q)=>q.eq(q.field("is_cancelled"), undefined))
            .collect()

        return events
    },

});