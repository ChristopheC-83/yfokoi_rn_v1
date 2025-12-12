import { View , Text} from 'react-native';
import {s} from './SharedList.style';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

export default function SharedList() {
    return (
      <ScreenContainer style={s}>
        <Text>SharedList</Text>
      </ScreenContainer>
    );
};