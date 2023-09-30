import { View, Text } from 'react-native';

import { styles } from './styles';
import Counter from '../Counter';

type Props = {
  created: number;
  ended: number;
}

export default function Info({ created, ended }: Props) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.created}>
          Criadas
        </Text>
        <Counter counter={created} />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.ended}>
          Concluídas
        </Text>
        <Counter counter={ended} />
      </View>
    </View>
  );
}