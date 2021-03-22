import express = require("express");

const app = express();
const PORT = 8080;

const flavours = [
  {
    name: "cherry",
    sweetness: 6,
  },
  {
    name: "apple",
    sweetness: 4,
  },
  {
    name: "orange",
    sweetness: 8,
  },
];

app.get("/", (req, resp) => {
  resp.status(200).send(flavours);
});

app.get("/:id", (req, resp) => {
  const { id }: any = req.params;

  resp.status(200).send(flavours[id]);
});

app.listen(PORT, () => console.log("works on port 8080"));
