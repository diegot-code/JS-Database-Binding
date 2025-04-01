// import number from "./db.js";
import { database } from "./db.js";

const bio = document.querySelector(".bio .content");
const wordcount = document.querySelector(".bio .word-count");
const user = document.querySelector(".user");
const url = document.querySelector(".url");
const tel = document.querySelector(".tel");
const img = document.querySelector(".img");

bio.textContent = database.bio;

user.textContent = `${database.user.firstName} ${database.user.lastName}`;

wordcount.textContent = database.bio.trim().split(/\s+/).length;

url.textContent = database.url.split("/")[2].replace("www.", "");

tel.textContent = database.tel;

img.setAttribute("src", database.img);

img.src = database.img;
