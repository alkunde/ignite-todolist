import { FlatList, View } from 'react-native';

import Info from '../Info';
import Empty from '../Empty';
import Task from '../Task';

import { styles } from './styles';

type TaskProps = {
  description: string;
  isDone: boolean;
}

type Props = {
  tasks: TaskProps[];
}

export default function Tasks({ tasks }: Props) {
  return (
    <View style={styles.container}>

      <Info created={0} ended={0} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            checked={item.isDone}
            description={item.description}
            onCheck={() => {}}
            onRemove={() => {}}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Empty />}
      />
      
    </View>
  )
}