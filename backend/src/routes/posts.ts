import { Router, Request, Response } from "express";
import { addPost, getPosts } from "../db/posts/posts";
import { deletePost } from "../db/posts/posts";
import { randomUUID } from "crypto";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
	const userId = req.query.userId?.toString();
	if (!userId) {
		res.status(400).send({ error: "userId is required" });
		return;
	}
	const posts = await getPosts(userId);
	res.send(posts);
});

router.delete("/delete", async (req: Request, res: Response) => {
	const userId = req.query.postId?.toString();
	if (!userId) {
		res.status(400).send({ error: "postId is required" });
		return;
	}
	const posts = await deletePost(userId);
	res.status(200).send(posts);
});

router.post("/create", async (req: Request, res: Response) => {
	const { title, body, user_id } = req.body;
	if (!title) {
		res.status(400).send({ message: "title is required" });
		return;
	}
	if (!user_id) {
		res.status(400).send({ message: "user_id is required" });
		return;
	}
	if (!body) {
		res.status(400).send({ message: "body is required" });
		return;
	}
	try {
		const id = randomUUID();
		const created_at = new Date().toISOString();
		await addPost({
			id,
			title,
			body,
			user_id,
			created_at,
		});
		res.status(201).send({ message: "Post created successfully" });
		return;
	} catch (error) {
		const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
		res.status(500).send({ message: "Error creating post", error: errorMessage });
		return;
	}
});
export default router;