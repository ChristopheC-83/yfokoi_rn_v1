import { View , Text} from 'react-native';
import {s} from './SharedList.style';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';


export default function SharedList() {


  // async function debugAsyncStorage() {
  //   const keys = await AsyncStorage.getAllKeys();
  //   console.log("📦 Async keys:", keys);

  //   const items = await AsyncStorage.multiGet(keys);
  //   console.log("📄 Async content:", items);
  // }

  // useEffect(() => {
  //   debugAsyncStorage();
  // }, []);


    return (
      <ScreenContainer style={s}>
        <Text>SharedList</Text>
      </ScreenContainer>
    );
};