import { Book } from "src/app/bookInfo";

const book1: Book = {
  name: "An Amish Heirloom:Three Stories",
  author: "Amy Clipston",
  genre: "Literature Fiction",
  yearPublished: 1980,
  picture: "assets/images/An-Amish-Heirloom.jpeg",
};

const book2: Book = {
  name: "A Raisin in the Sun",
  author: "Lorraine Hansberry",
  genre: "Literature Fiction",
  yearPublished: 1960,
  picture: "assets/images/A-Raisin-in-the-Sun.jpeg",
};

const book3: Book = {
  name: "Pinkalicious:Flower Girl",
  author: "Victoria Kann",
  genre: "Children's Books",
  yearPublished: 2000,
  picture: "assets/images/Pinkalicious-Flower-Girl.jpeg",
};

const book4: Book = {
  name: "Renal Diet Cookbook for the Newly Diagnosed",
  author: "Susan Zogheib",
  genre: "Health & Wellness Books",
  yearPublished: 1980,
  picture: "assets/images/Renal-Diet-Cookbook.jpeg",
};

export const BOOKS: Book[] = [book1, book2, book3, book4];

//image sources for the books
//https://www.walmart.com/ip/An-Amish-Heirloom-Three-Stories-Paperback-9780310359937/991316292
//https://www.walmart.com/ip/A-Raisin-in-the-Sun-Paperback-9780679755333/379801
//https://www.walmart.com/ip/Pinkalicious-Pinkalicious-Flower-Girl-Paperback-9780062187666/21103813
//https://www.walmart.com/ip/Renal-Diet-Cookbook-for-the-Newly-Diagnosed-The-Complete-Guide-to-Managing-Kidney-Disease-and-Avoiding-Dialysis-Paperback-9781939754202/56171521
