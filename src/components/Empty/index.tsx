import { View, Text } from 'react-native';

import Clipboard from '../../assets/clipboard.svg';

import { styles } from './styles';

export default function Empty() {
  return (
    <View style={styles.container}>

      <Clipboard width={56} height={56} />

      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text style={styles.textRegular}>
        Crie tarefas e organize seus itens a fazer
      </Text>

    </View>
  );
}