const express = require("express");;
const fs = require("fs");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
    res.send("jspsych backend is live");
  });

app.post("/saveTrial", (req, res) => {
    const data = req.body.data;
    fs.appendFile("responses.txt", JSON.stringify(data) + '\n', (err) => {
        if (err) throw err;
    })
})

app.listen(4000, () => {
  console.log("App is listening on port", 4000);
});