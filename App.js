

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import NavigatorScreen from './NavigatorFiles/NavigatorScreen';
import {createStore,combineReducers,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import ReduxThunk from "redux-thunk";
import AuthReducer from './Store/AuthReducer';
import DataReducer from './Store/DataReducer';

const App: () => Node = () => {
 
  const rootReducer=combineReducers({
    auth: AuthReducer,
    data: DataReducer
  })
  const Store=createStore(rootReducer, applyMiddleware(ReduxThunk))

  return (
    <Provider store={Store}>
       <NavigatorScreen/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
