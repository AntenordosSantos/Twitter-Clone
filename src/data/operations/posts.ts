import { axiosInstance } from '../api';
import { Post } from '../models';

//getPosts

export type PostsData = Post[];

export async function getPosts(): Promise<PostsData> {
  const { data } = await axiosInstance.get<PostsData>(`/posts`);
  return data;
}

//createPost
export type CreatedPostVar = {
  content: string;
};

export type CreatedPostData = Post;

export async function createdPost({
  content,
}: CreatedPostVar): Promise<CreatedPostData> {
  const { data } = await axiosInstance.post<CreatedPostData>('/posts', {
    content,
  });
  return data;
}
