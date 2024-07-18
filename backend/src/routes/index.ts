import { Hono } from "hono";
const app=new Hono();
import blog from "./blog";
import user from "./user";
app.route("/blog",blog);
app.route("/user",user);
export default app;