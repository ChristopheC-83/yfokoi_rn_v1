import { View , Text} from 'react-native';
import {s} from './MyLists.style';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';
import { useUserStore } from '../../store/userStore';
import Header from '../../components/Header/Header';

export default function MyLists() {
  const {user} = useUserStore();
    return (
      <ScreenContainer style={s}>
        <Header
          text1={`${user?.icon} ${user?.name}, Yfokoi pour toi ?`}
          text2="Mes listes personnelles 🔒"
        />
        <Text>MyLists</Text>
      </ScreenContainer>
    );
};