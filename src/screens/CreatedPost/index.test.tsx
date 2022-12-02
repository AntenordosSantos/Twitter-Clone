import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation /*, useRoute*/ } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import { POST_1 } from 'src/data/mocks';
import CreatedPostScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

const server = setupServer(
  rest.post(`${API_URL}/posts`, (_, res, ctx) => {
    return res(ctx.json(POST_1));
  }),
);

describe('CreatedPostScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should ...', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <CreatedPostScreen />
      </AppProviders>,
    );

    const buttonGoBack = getByTestId('button-go-back');
    fireEvent.press(buttonGoBack);
    expect(mockGoBack).toBeCalled();
  });

  test('should go back on create post success', async () => {
    const { getByTestId } = render(
      <AppProviders>
        <CreatedPostScreen />
      </AppProviders>,
    );

    const textInput = getByTestId('text-input');
    fireEvent.changeText(textInput, 'Some post content');

    const buttonCreatePost = getByTestId('button-create-post');
    fireEvent.press(buttonCreatePost);

    await waitFor(() => {
      expect(mockGoBack).toBeCalled();
    });
  });
});
