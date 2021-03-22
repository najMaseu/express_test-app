"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 8080;
var flavours = [
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
app.get("/", function (req, resp) {
    resp.status(200).send(flavours);
});
app.get("/:id", function (req, resp) {
    var id = req.params.id;
    resp.status(200).send(flavours[id]);
});
app.listen(PORT, function () { return console.log("works on port 8080"); });
//# sourceMappingURL=index.js.map