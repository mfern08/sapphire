const express = require("express");
const app = express();
const port = 4000;


app.get("/api/users", (req, res) => {
    const characters = [
        {id: 1, characterName: 'Mikey Mouse', show:'Disney'},
        {id: 2, characterName: 'Jake', show:'Adventure Time'},
        {id: 3, characterName: 'SpongeBob', show: 'SpongeBob Squarepants'},

    ];
  res.json(characters);  
  //res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Server starting on port http://localhost:${port}`);
});