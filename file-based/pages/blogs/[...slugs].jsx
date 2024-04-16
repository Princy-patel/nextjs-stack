import { useRouter } from "next/router";
import React from "react";

function BlogPostsPage() {
  const router = useRouter();
  return (
    <div>
      <h1>The Blog posts</h1>
    </div>
  );
}

export default BlogPostsPage;
