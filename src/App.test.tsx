import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '@/app/store';
import {mockWindowLocation} from '@/../tests/mockWindowLocation';

import App from '@/App';

vi.mock('@/pages/demo', () => ({
  default: () => <div data-testid="DemoMock" />
}));
vi.mock('@/pages/not-found', () => ({
  default: () => <div data-testid="NotFoundMock" />
}));

describe('App', () => {
  const originalLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: new URL(window.location.href),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: originalLocation,
    });
  });

  test('Should render Home route', () => {
    mockWindowLocation('http://localhost:5173/');
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
  test('Should render Demo route', () => {
    mockWindowLocation('http://localhost:5173/demo');
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('DemoMock')).toBeInTheDocument();
  });
  test('Should render NotFound route', () => {
    mockWindowLocation('http://localhost:5173/fubar');
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('NotFoundMock')).toBeInTheDocument();
  });
});
