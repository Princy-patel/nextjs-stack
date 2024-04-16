import { useRouter } from "next/router";
import React from "react";

function PortfolioProjectPage() {
  const router = useRouter();

  // send request to backend server
  // to fetch the piece of data with an id of router.query.projectId
  
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
