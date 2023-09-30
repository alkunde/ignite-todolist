import { TextInput, TouchableOpacity, View } from 'react-native';

import Add from '../../assets/add.svg';

import { styles } from './styles';

type Props = {
  description: string;
  onChange: (text: string) => void;
  onAdd: () => void;
}

export default function NewTask({ description, onChange, onAdd }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={description}
        onChangeText={onChange}
      />

      <TouchableOpacity style={styles.button} onPress={onAdd}>
        <Add width={16} height={16} />
      </TouchableOpacity>
    </View>
  )
}