import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import CreatedPostLayout from './layout';

export const actions = {
  onGoBack: action('onGoBack'),
  onTweet: action('onTweet'),
};
storiesOf('screens/CreatePost', module)
  .add('default', () => <CreatedPostLayout {...actions} />)
  .add('loading', () => (
    <CreatedPostLayout {...actions} initialText={'Post 1'} loading />
  ));
