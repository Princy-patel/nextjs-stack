"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// To separate the action file, any component can be designated as the client component. the file name could be anything.

export const shareMeal = async function (formData) {
  "use server";

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
};
