import { View, Text, TouchableOpacity } from 'react-native';

import Trash from '../../assets/trash.svg';
import Check from '../../assets/check.svg';
import Uncheck from '../../assets/uncheck.svg';

import { styles } from './styles';

type Props = {
  checked: boolean;
  description: string;
  onCheck: () => void;
  onRemove: () => void;
}

export default function Task({
  checked,
  description,
  onCheck,
  onRemove,
}: Props) {
  return (
    <View style={styles.container}>

      {
        checked ? (
          <Check />
        ) : (
          <Uncheck />
        )
      }
      <Text style={styles.textDescription}>
        Teste
      </Text>

      <TouchableOpacity>
        <Trash width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
}