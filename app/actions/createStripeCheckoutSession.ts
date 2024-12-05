import { Id } from "@/convex/_generated/dataModel";

export function createStripeCheckoutSession({
  eventId,
}: {
  eventId: Id<"events">;
}) {
  return {
    sessionUrl: "",
  };
}
