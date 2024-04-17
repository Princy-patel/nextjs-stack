import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React from "react";

function ClientProjectsPage() {
  const router = useRouter();

  const loadProjectHandler = function () {
    // router.replace(`${router.query.id}/projects`);
    router.push({
      pathname: "/client/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projectb" },
    });
  };
  return (
    <div>
      <h1>
        The Projects given by client named{" "}
        <code style={{ color: "#007FFF", textTransform: "uppercase" }}>
          {router.query.id}
        </code>
      </h1>

      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
