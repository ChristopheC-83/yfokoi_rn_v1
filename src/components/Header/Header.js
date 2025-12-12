import { View , Text} from 'react-native';
import {s} from './Header.style';

export default function Header({text1, text2}) {
    return (
      <View style={s.container}>
            {text1 && <Text style={s.text1}>{text1}</Text>}
            {text2 && <Text style={s.text2}>{text2}</Text>}
      </View>
    );
};