export interface IPost {
    body: string;
    created_at: string;
    id: string;
    title: string;
    user_id: string;
}

export interface ICreatePostPayload {
    title: string;
    body: string;
    user_id: string;
}
