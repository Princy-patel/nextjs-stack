// allows us to work with file system
import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import { error } from "node:console";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  //   throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  // generate slug. lower: true -> all character will be in lowercase
  meal.slug = slugify(meal.title, { lower: true });

  // remove harmful content from those instructions
  meal.instructions = xss(meal.instructions);

  // image split with "." that is file extension after . and pop last element which will be file extension
  const extension = meal.image.name.split(".").pop();

  // generate unique file name
  const fileName = `${meal.slug}.${extension}`;

  // create a stream which will allow us to write data to a certain file.
  const stream = fs.createWriteStream(`public/images/${fileName}`);

  const bufferedImage = await meal.image.arrayBuffer();

  // BufferedImage is a TypedArray, but the 'write' method requires a regular array.
  // here second argument which is function will be execute once its done writing
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
  (title, summary, instructions, creator, creator_email, image, slug) VALUES ( 
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @image,
    @slug
  )`
  ).run(meal);
}
