import { z } from "zod";
export const signupInput = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(3),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(3),
});

export const createPostInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updatePostInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  id:z.string()
});

export type signupInputType = z.infer<typeof signupInput>;
export type signinInputType = z.infer<typeof signinInput>;
export type createPostInputType = z.infer<typeof createPostInput>;
export type updatePostInputType = z.infer<typeof updatePostInput>;
