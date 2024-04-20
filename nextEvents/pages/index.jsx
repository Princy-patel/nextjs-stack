import React from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import EventsSearch from "../components/events/event-search";

function HomePage() {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();

  const featuredEvent = function (selectedYear, selectedMonth) {
    const fullPath = `events/${selectedYear}/${selectedMonth}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={featuredEvent} />
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
