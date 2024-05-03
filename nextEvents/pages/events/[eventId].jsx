import { useRouter } from "next/router";
import React from "react";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Head from "next/head";
import Comments from "../../components/input/comments";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>Page not Found!</p>
        </ErrorAlert>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        data={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
}

export default EventDetailPage;
