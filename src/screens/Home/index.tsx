import { useState } from 'react';
import { View } from 'react-native';

import NewTask from '../../components/NewTask';
import Tasks from '../../components/Tasks';

import Logo from '../../assets/logo.svg';

import { styles } from './styles';

export default function Home() {
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([{
    description: 'Descrição da tarefa',
    isDone: false,
  }, {
    description: 'Descrição da tarefa',
    isDone: true,
  }]);

  function handleCreateTask() {
    console.log(`handleCreate ${description}`);
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Logo width={110} height={32} style={{ marginTop: 70, marginBottom: 40 }} />
      </View>

      <NewTask
        description={description}
        onChange={(text) => setDescription(text)}
        onAdd={handleCreateTask}
      />

      <Tasks tasks={tasks} />

    </View>
  );
}