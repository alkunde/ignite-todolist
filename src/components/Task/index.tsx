import { View, Text, TouchableOpacity } from 'react-native';

import Trash from '../../assets/trash.svg';
import Check from '../../assets/check.svg';
import Uncheck from '../../assets/uncheck.svg';

import { styles } from './styles';

export type TaskProps = {
  id: number;
  checked: boolean;
  description: string;
}

type Props = {
  task: TaskProps;
  onCheck: () => void;
  onRemove: () => void;
}

export default function Task({
  task,
  onCheck,
  onRemove,
}: Props) {
  return (
    <View style={styles.container} key={task.id}>

      <TouchableOpacity onPress={onCheck}>
        { task.checked ? <Check /> : <Uncheck /> }
      </TouchableOpacity>

      <Text style={task.checked
        ? {...styles.textDescription, ...styles.textChecked}
        : {...styles.textDescription, ...styles.textUnchecked}
      }>
        {task.description}
      </Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash width={32} height={32} />
      </TouchableOpacity>
    </View>
  );
}