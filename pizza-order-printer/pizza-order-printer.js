/* -------------------------
🍕 Pizza Order Printer 
----------------------------
Make a Node.js app that prints pizza orders to the console.

Check the README.md file for instructions.
------------------------- */

import fs from "fs/promises";

let command = process.argv[2];
let index = Number(process.argv[3]);

const data = await fs.readFile("data.json", "utf-8");
const orders = JSON.parse(data);

if (command === "getAllOrders") {
  for (let i = 0; i < orders.length; i++) {
    console.log(orders[i]);
  }
} else if (command === "getOneOrder") {
  if (orders[index]) {
    console.log(orders[index]);
  } else {
    console.log("Order not found. Please enter a valid order number.");
  }
}