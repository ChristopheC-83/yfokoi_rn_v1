import { View , Text} from 'react-native';
import {s} from './Profile.style';
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer';

export default function Profile() {
    return (
      <ScreenContainer style={s}>
        <Text>Profile</Text>
      </ScreenContainer>
    );
};
