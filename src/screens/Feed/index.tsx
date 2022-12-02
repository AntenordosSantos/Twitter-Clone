import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { usePostsQuery } from 'src/data/hooks/posts';
import { FeedStackParamList } from 'src/navigation/types';
import FeedLayout from './layout';

type FeedNavProp = NativeStackNavigationProp<FeedStackParamList, 'Feed'>;

export default function Feed() {
  const navigation = useNavigation<FeedNavProp>();//eslint-disable-line

  const { data, isLoading } = usePostsQuery({});

  const posts = data || [];
  return <FeedLayout posts={posts} loading={isLoading} />;
}
