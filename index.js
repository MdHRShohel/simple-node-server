const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Simple Node Server is running");
});

const users = [
  { id: 1, name: "John Doe" , email:'johndoe@gmail.com' },
  { id: 2, name: "Jane Doe", email:'janedoe@gmail.com' },
  { id: 3, name: "John Smith", email:'johnsmith1@gmail.com' },
  { id: 4, name: "Jane Smith" , email:'janesmith@gmail.com'},
];

app.get('/users', (req, res) => {
  res.send(users);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
