import express from "express";
import audioRouter from "./routes/audioRouter";
import computersRouter from "./routes/computersRouter";
import mobileRouter from "./routes/mobilesRouter";
import televisonRouter from "./routes/televisonsRouter";

const app = express();
const port = process.env.PORT || 8008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/computers", computersRouter);
app.use("/mobiles", mobileRouter);
app.use("/televisions", televisonRouter);
app.use("/audio", audioRouter);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to my electronic api");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
