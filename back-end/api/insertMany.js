import { users } from "./users.js";
import { db } from "./conect.js";

const newUsers = users.map((currentUsersObj) => {
  const newUsersObj = { ...currentUsersObj };
  delete newUsersObj.id;

  return newUsersObj;
});

const responseUsers = await db.collection("users").insertMany(newUsers);
