import React from 'react';
import { jest } from '@jest/globals';
import { useNavigation /*, useRoute*/ } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context';
import { API_URL } from 'src/data/api';
import { POST_1, POST_2 } from 'src/data/mocks';
import FeedScreen from './';

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native');

(useNavigation as jest.Mock).mockReturnValue({
  goBack: mockGoBack,
  navigate: mockNavigate,
});

// (useRoute as jest.Mock).mockReturnValue({
//   params: {
//     id: '',
//   },
// });

const server = setupServer(
  rest.get(`${API_URL}/posts`, (_, res, ctx) => {
    return res(ctx.json([POST_1, POST_2]));
  }),
);

describe('FeedScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  test('should ...', async () => {
    const { findByText, getByTestId } = render(
      <AppProviders>
        <FeedScreen />
      </AppProviders>,
    );

    const title = await findByText('Feed');
    expect(title).toBeTruthy();

    const backButtonIcon = getByTestId('backButtonIcon');
    fireEvent.press(backButtonIcon);
    expect(mockGoBack).toBeCalled();
  });
});
