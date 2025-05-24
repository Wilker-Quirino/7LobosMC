import { images } from "./images";
import { db } from "./conect.js";

const newImages = images.map((currentImagesObj) => {
  const newImagesObj = { ...currentImagesObj };
  delete newImagesObj.id;

  return newImagesObj;
});

const responseImages = await db.collection("gallery").insertMany(newImages);
