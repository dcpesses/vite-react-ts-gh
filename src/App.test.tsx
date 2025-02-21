import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '@/app/store';

import App from '@/App';

describe('App', () => {
  test('Should render as expected', () => {
    const {container} = render(
      <Provider store={store}>
        <BrowserRouter future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
