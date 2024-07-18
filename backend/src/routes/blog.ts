import { Hono } from "hono";
import { getPrisma } from "../prismaClient";
import { createPostInput } from "@rahul405/med-common";
import { updatePostInput } from "@rahul405/med-common";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

/*
POST /api/v1/blog
PUT /api/v1/blog
GET /api/v1/blog/:id
GET /api/v1/blog/bulk
*/
//create a blog a post
app
  .post("/", async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const body = await c.req.json();
    const userId = c.get("userId");
    try {
      const { success } = createPostInput.safeParse(body);
      if (!success) {
        c.status(411);
        return c.json({ msg: "Inputs are not correct" });
      }

      await prisma.post.create({
        data: {
          title: body.title,
          content: body.content,
          authorId: userId,
          published: true,
        },
      });
      return c.json({ msg: "new post create" });
    } catch (error) {
      return c.json({ msg: "something is wrong" });
    }
  })
  .put("/", async (c) => {
    const prisma = getPrisma(c.env.DATABASE_URL);
    const postId = c.req.query("postId") || " ";
    const body: {
      title?: string;
      content?: string;
    } = (await c.req.json()) || " ";
    const { success } = updatePostInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({ msg: "Inputs are not correct" });
    }

    try {
      const res = await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          title: body.title,
          content: body.content,
        },
      });
      if (!res) {
        return c.json({ msg: "Blog does not exsist/is not updated" });
      }
      return c.json({ msg: "Blog updated successfully", res: res });
    } catch (error) {
      c.status(500);
      return c.json({ msg: "some internal error" });
    }
  });

//todo-pagination limit upto 10 post
app.get("/bulk", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  try {
    const res = await prisma.post.findMany({});
    return c.json({ posts: res });
  } catch (error) {
    return c.json({ msg: "some internal error" });
  }
});

app.get("/:id", async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL);
  const id = c.req.param("id");
  try {
    const post = await prisma.post.findUnique({
      where: { id: id },
    });
    if (!post) {
      c.status(401);
      return c.json({ msg: "post not found" });
    }
    return c.json({ post: { title: post.title, content: post.content } });
  } catch (error) {
    return c.json({ msg: "some internal error" });
  }
});

export default app;
