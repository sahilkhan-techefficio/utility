import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import SyncLoad from './src/rd';

const App = () => {
  [sList,setSList] = useState(null)
  useEffect(() => {
    SyncLoad(setSList);
  }, []);

  return (
    <View>
    <Text>{sList}</Text>
    </View>
  );
};

export default App;
