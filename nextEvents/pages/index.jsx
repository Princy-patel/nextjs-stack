import React from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/event-search";
import Head from "next/head";

function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const featuredEvent = function (selectedYear, selectedMonth) {
    const fullPath = `events/${selectedYear}/${selectedMonth}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>Next Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allows you to evolve..."
        />
      </Head>
      <EventsSearch onSearch={featuredEvent} />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
