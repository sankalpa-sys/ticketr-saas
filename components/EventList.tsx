'use client'
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import Spinner from "@/components/Spinner";
import {CalendarDays} from "lucide-react";

function EventList() {
    const events = useQuery(api.events.get);
    console.log("events", events)
    if (!events) {
        return <div>
            <Spinner/>
        </div>;
    }

    if (events instanceof Error) {
        return <div>Error loading events: {events.message}</div>;
    }

    if (events.length === 0) {
        return <div>No events found.</div>;
    }

    const upcomingEvents = events.filter((event)=>event.eventDate > Date.now()).sort((a,b)=>a.eventDate - b.eventDate)
    const pastEvents = events.filter((event)=>event.eventDate <= Date.now()).sort((a,b)=>b.eventDate - a.eventDate)

    return  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Upcoming Events</h1>
                <p className="mt-2 text-gray-600">
                    Discover & book tickets for amazing events
                </p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                    <CalendarDays className="w-5 h-5" />
                    <span className="font-medium">
              {upcomingEvents.length} Upcoming Events
            </span>
                </div>
            </div>
        </div>

    </div>
}

export default EventList;