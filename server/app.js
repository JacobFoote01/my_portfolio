import express from "express";
import session from "express-session";
import ViteExpress from "vite-express";
import morgan from "morgan";
import handlers from "./handlers.js"

const app = express();
const port = "5555";
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "sshhhh", saveUninitialized: true, resave: false })
);

//all of the routes go here

ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);