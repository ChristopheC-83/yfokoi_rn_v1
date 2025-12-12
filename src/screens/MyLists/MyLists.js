import { View , Text} from 'react-native';
import {s} from './MyLists.style';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

export default function MyLists() {
    return (
      <ScreenContainer style={s}>
        <Text>MyLists</Text>
      </ScreenContainer>
    );
};