import { Hono } from "hono";
import mainRouter from "./routes";
import { verify } from "hono/jwt";
type Variables = {
  userId:(str: string) => string;
};
const app = new Hono<{
  Bindings: {
    JWT_SECRET: string;
  };
  Variables: Variables;
}>();
app.use("/api/v1/blog/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  if (!authHeader) {
    return c.json({ msg: "no auth Header" });
  }
  const words = authHeader.split(" ") || [];

  // if (words[0] !== "Bearer") {
  //   return c.json({ msg: "user is not authenticated" });
  // }
  const token = words[1];
  const user = await verify(token, c.env.JWT_SECRET);

  c.set("userId",user.id);

  await next();
});

app.route("/api/v1/", mainRouter);

export default app;
