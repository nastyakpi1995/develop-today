import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux';
import * as actions from '../redux/actions';
import { Header, ParticlesSlider } from '../components';
import { Body } from '../styled/pages/pages';

const MyApp = ({ pageProps, Component, requestGetPost }) => {
  useEffect(() => {
    requestGetPost()
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <Body>
        <ParticlesSlider/>
      </Body>
        <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

const ConnectMyApp = connect(null, actions)(MyApp)

export default wrapper.withRedux(ConnectMyApp)
