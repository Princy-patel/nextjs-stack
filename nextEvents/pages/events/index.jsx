import React from "react";
import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import Head from "next/head";

function AllEventsPage() {
  const event = getAllEvents();
  return (
    <div>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allows you to evolve..."
        />
      </Head>
      <EventList items={event} />
    </div>
  );
}

export default AllEventsPage;
