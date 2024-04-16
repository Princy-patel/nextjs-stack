import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React from "react";

function ClientProjectsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>
        The Projects given by client named{" "}
        <code style={{ color: "#007FFF", textTransform: "uppercase" }}>
          {router.query.id}
        </code>
      </h1>
    </div>
  );
}

export default ClientProjectsPage;
