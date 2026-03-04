require("dotenv").config()
const app = require("./src/app.js")
const redis = require("./src/configs/redis.js")
const cors = require("cors")
const PORT = process.env.PORT || 3000;
app.use(cors())
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
});


app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
