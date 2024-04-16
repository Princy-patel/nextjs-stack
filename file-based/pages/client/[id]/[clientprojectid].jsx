import { useRouter } from "next/router";
import React from "react";

function SelectedClientProjectPage() {
  const router = useRouter();
  return (
    <div>
      <h1>
        The Project Page for a Specific project for a selected Client,{" "}
        <i>
          Id :{" "}
          <code style={{ color: "#007FFF", textTransform: "uppercase" }}>
            {router.query.clientprojectid}
          </code>
        </i>
      </h1>
    </div>
  );
}

export default SelectedClientProjectPage;
