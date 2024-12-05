import { addUser, removeUser, findUser } from "./userManager.js";

let users = [];
addUser(users, { id: 0, name: "John" });
addUser(users, { id: 1, name: "Maciek" });
addUser(users, { id: 2, name: "Kacper" });
addUser(users, { id: 3, name: "Patryk" });

removeUser(users, 0);

findUser(users, 3);
