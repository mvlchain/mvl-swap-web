import { PropsWithChildren } from 'react';

import { Provider } from 'react-redux';

import { store } from './index';

function ReduxProvider({ children }: PropsWithChildren<{}>) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
