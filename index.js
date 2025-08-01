const express = require("express");

const PORT = 3000;
const app = express();
app.use(express.json());

//For giving the static things
app.use("/public", express.static("public")); //http://localhost:3000/public/examples.txt
app.use("/images", express.static("images")); //http://localhost:3000/images/image.png

app.set("view engine", "ejs"); //Setting the view engine to ejs
app.set("views", "hell"); //Setting the views directory

// for purpose of Dynamic things
app.get("/", (req, res) => {
  res.render("index", {
    name: "DestinyDriver",
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Server is running on http://localhost:${PORT}`);
});
