import { View , Text} from 'react-native';
import {s} from './OneList.style';

export default function OneList({id, name}) {
    return (
      <View style={s.oneList}>
        <Text style={s.name}>➡️ {name}</Text>
            <View style={s.actions}>
                
                <Text>👋👋👋</Text>
            
            </View>
      </View>
    );
};