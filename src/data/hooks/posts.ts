import { AxiosError } from 'axios';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query';
import {
  createdPost,
  CreatedPostData,
  CreatedPostVar,
  getPosts,
  PostsData,
} from '../operations/posts';

//usePostsQuery
type PostsQueryOptions = {
  options?: Omit<
    UseQueryOptions<PostsData, AxiosError>,
    'queryKey' | 'queryFn'
  >;
};

export function usePostsQuery({ options = {} }: PostsQueryOptions) {
  return useQuery(['posts'], getPosts, options);
}

//useCreatedPostMutation
export function useCreatedPostMutation(
  options?: Omit<
    UseMutationOptions<CreatedPostData, AxiosError, CreatedPostVar>,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation('createdPost', createdPost, options);
}
