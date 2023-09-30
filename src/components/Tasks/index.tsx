import { FlatList, View } from 'react-native';

import Info from '../Info';
import Empty from '../Empty';
import Task, { TaskProps } from '../Task';

import { styles } from './styles';
import { useMemo } from 'react';

type Props = {
  tasks: TaskProps[];
  onRemove: (selected: number) => void;
  onCheck: (selected: number) => void;
}

export default function Tasks({ tasks, onRemove, onCheck }: Props) {
  const created = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const done = useMemo(() => {
    return tasks.filter(task => task.checked).length;
  }, [tasks]);

  return (
    <View style={styles.container}>

      <Info created={created} ended={done} />

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            task={item}
            onCheck={() => onCheck(item.id)}
            onRemove={() => onRemove(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Empty />}
      />
      
    </View>
  )
}