import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  counter: number;
}

export default function Counter({ counter }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{counter}</Text>
    </View>
  );
}