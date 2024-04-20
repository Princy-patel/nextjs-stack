import React from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const event = getAllEvents();
  return (
    <div>
      <EventList items={event} />
    </div>
  );
}

export default AllEventsPage;
