const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("Simple Node Server is running");
});

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "John Doe" , email:'johndoe@gmail.com' },
  { id: 2, name: "Jane Doe", email:'janedoe@gmail.com' },
  { id: 3, name: "John Smith", email:'johnsmith1@gmail.com' },
  { id: 4, name: "Jane Smith" , email:'janesmith@gmail.com'},
];

app.get('/users', (req, res) => {
  res.send(users);
})

app.post('/users',(req,res)=>{
  console.log('post request received');
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
