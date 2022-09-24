import React, { useState } from 'react';
import styled from 'styled-components/native';
import Button from 'src/components/Button';
import NavHeader from 'src/components/NavHeader';
import { StackScreen } from 'src/components/Screen';
import { t } from 'src/utils/i18n';

const Container = styled(StackScreen)``;

const ScrollView = styled.ScrollView`
  flex: 1;
  padding-horizontal: 20px;
`;

const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.color.gray.c500,
}))`
  padding: 20px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.color.gray.c900};
  border-radius: 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.gray.c900};
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.bold};
  color: ${({ theme }) => theme.color.gray.c900};
  font-size: 48px;
  margin-vertical: 76px;
  text-align: center;
`;

const ButtonWrapper = styled.View`
  padding-bottom: 12px;
`;
export interface LoginLayoutProps {
  initialEmail?: string;
  initialPassword?: string;
  loading?: boolean;
  onLogin: (email: string, password: string) => void;
  onRegister: () => void;
}

export default function LoginLayout({
  initialEmail = '',
  initialPassword = '',
  loading,
  onLogin,
  onRegister,
}: LoginLayoutProps) {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  return (
    <Container>
      <NavHeader title={t('login')} />
      <ScrollView>
        <Title>Twitter Clone</Title>
        <TextInput
          testID={'text-input-email'}
          value={email}
          placeholder={t('email')}
          onChangeText={setEmail}
        />
        <TextInput
          testID={'text-input-password'}
          value={password}
          placeholder={t('password')}
          secureTextEntry
          onChangeText={setPassword}
        />
        <ButtonWrapper>
          <Button
            testID={'button-login'}
            text={t('login')}
            disabled={email.length === 0 || password.length === 0}
            loading={loading}
            onPress={() => onLogin(email, password)}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            testID={'button-register'}
            text={t('register')}
            buttonStyle={'outline'}
            onPress={() => onRegister()}
          />
        </ButtonWrapper>
      </ScrollView>
    </Container>
  );
}
