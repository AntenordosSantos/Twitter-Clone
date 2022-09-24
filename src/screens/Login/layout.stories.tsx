import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import LoginLayout, { LoginLayoutProps } from './layout';

export const defaultProps: LoginLayoutProps = {
  loading: false,
  onLogin: action('onLogin'),
  onRegister: action('onRegister'),
};
storiesOf('screens/Login', module)
  .add('default', () => <LoginLayout {...defaultProps} />)
  .add('loading', () => (
    <LoginLayout
      {...defaultProps}
      initialEmail={'luy,prantl@gmail.com'}
      initialPassword={'12345678'}
      loading={true}
    />
  ));
