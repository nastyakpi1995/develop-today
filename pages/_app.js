import React, { useEffect } from 'react';
import {connect, Provider} from 'react-redux';
import store from '../redux/index';
import { createWrapper } from 'next-redux-wrapper'
import { Header } from "../components";
import * as actions from "../redux/actions";

const MyApp = ({ pageProps, Component, requestGetPost }) => {
  useEffect(() => {
      requestGetPost()
  }, []);
  return (
      <Provider store={store}>
          <Header />
          <Component {...pageProps}></Component>
      </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

const ConnectMyApp = connect(null, actions)(MyApp)

export default wrapper.withRedux(ConnectMyApp)
