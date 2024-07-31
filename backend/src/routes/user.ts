import { Hono } from "hono";
import { sign } from "hono/jwt";
import { getPrisma } from "../prismaClient";
import { signinInput, signupInput } from "@rahul405/med-common";


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

/*
POST /api/v1/user/signup
POST /api/v1/user/signin
*/
async function hashing(password: string) {
  const myText = new TextEncoder().encode(password);

  const myDigest = await crypto.subtle.digest(
    {
      name: "SHA-256",
    },
    myText // The data you want to hash as an ArrayBuffer
  );
  const uint8ViewOfHash = new Uint8Array(myDigest);
  const hashAsString = Array.from(uint8ViewOfHash)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashAsString;
}

app.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);

  try {
    if (!success) {
      c.status(411);
      return c.json({ msg: "Inputs are wrong" });
    }
    const prisma = getPrisma(c.env.DATABASE_URL);
    const exsistingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (exsistingUser) {
      c.status(403);
      return c.json({ msg: "user already exsist/login" });
    }

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token: token });
  } catch (error) {
    c.status(403);
    return c.json({ error: "you are not logged in" });
  }
});

app.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  try {
    if (!success) {
      c.status(411);
      return c.json({ msg: "Inputs are wrong" });
    }
    const prisma = getPrisma(c.env.DATABASE_URL);
    const exsistingUser = await prisma.user.findUnique({
      where: { email: body.email },
    });
    if (!exsistingUser) {
      c.status(403);
      return c.json({ error: "No user found" });
    }
    const matchPassword = exsistingUser.password === body.password;
    if (!matchPassword) {
      return c.json({ msg: "password is wrong" });
    }

    const token = await sign({ id: exsistingUser.id }, c.env.JWT_SECRET);
    return c.json({ token: token });
  } catch (error) {
    c.status(403);
    return c.json({ error: "you are not logged in" });
  }
});

//update profile
//get profile

export default app;
