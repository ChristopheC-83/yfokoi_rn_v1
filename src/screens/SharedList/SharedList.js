import { View , Text} from 'react-native';
import {s} from './SharedList.style';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from 'react';
import Header from '../../components/Header/Header';

import { useUserStore } from "../../store/userStore";

export default function SharedList() {
  const {user} = useUserStore();


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
        <Header text1={`${user?.icon} ${user?.name}, Yfokoi pour la maison ?`} text2="La liste partagée ♻️" />
        <Text>SharedList</Text>
      </ScreenContainer>
    );
};