import React from "react";
import { Provider } from 'react-redux';
import Layout from "./components/Layout/Layout";
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {/* <div>Hallo</div> */}
        <Layout />
      </PersistGate>
    </Provider>
  )
}

export default App;