import Codepushscreen from '@screens/CodePush/Code-push-screen';
import {Box} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import HeaderHome from './components/HeaderHome';
import MainPanel from './components/MainPanel';

const Home = () => {
  return (
    <>
      <Codepushscreen />
      <HeaderHome />
      <MainPanel />
    </>
  );
};
export default Home;
