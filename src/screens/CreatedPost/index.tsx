import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCreatedPostMutation } from 'src/data/hooks/posts';
import { FeedStackParamList } from 'src/navigation/types';
import CreatedPostLayout from './layout';

type CreatedPostNavProp = NativeStackNavigationProp<
  FeedStackParamList,
  'CreatedPost'
>;

export default function CreatedPost() {
  const navigation = useNavigation<CreatedPostNavProp>();

  const { mutate: createdPost, isLoading } = useCreatedPostMutation({
    onSuccess: () => {
      navigation.goBack();
    },
  });

  return (
    <CreatedPostLayout
      loading={isLoading}
      onGoBack={() => navigation.goBack()}
      onTweet={(text) => createdPost({ content: text })}
    />
  );
}
