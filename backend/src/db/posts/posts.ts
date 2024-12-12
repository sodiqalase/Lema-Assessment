import { connection } from "../connection";
import { deletePostTemplate, insertPostTemplate, selectPostsTemplate } from "./query-tamplates";
import { Post } from "./types";

export const getPosts = (userId: string): Promise<Post[]> =>
  new Promise((resolve, reject) => {
    connection.all(selectPostsTemplate, [userId], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results as Post[]);
    });
  });

  export const deletePost = (postId: string): Promise<Post[]> =>
		new Promise((resolve, reject) => {
			connection.all(deletePostTemplate, [postId], (error, results) => {
				if (error) {
					reject(error);
				} else {
					resolve(results as Post[]);
				}
			});
		});

  export const addPost = (postData: Post): Promise<void> =>
		new Promise((resolve, reject) => {
			const { id, title, body, user_id, created_at } = postData;
			connection.run(insertPostTemplate, [id, title, body, user_id, created_at], function (error) {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		});