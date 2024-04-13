import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "../../../../lib/meals";
import { notFound } from "next/navigation";
async function BlogsPage({ params }) {
  const meal = await getMeal(params.slugs);

  if (!meal) {
    // will show closest not-found page or error page available in the project
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}

export default BlogsPage;
