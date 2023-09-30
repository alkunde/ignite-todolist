import { useState } from 'react';
import { View, FlatList, Alert } from 'react-native';

import NewTask from '../../components/NewTask';
import Tasks from '../../components/Tasks';

import Logo from '../../assets/logo.svg';

import { styles } from './styles';
import { TaskProps } from '../../components/Task';

export default function Home() {
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function handleCreateTask() {
   if (description.trim() === '') return;

   const newTask: TaskProps = {
    id: Date.now(),
    checked: false,
    description,
   }

   setTasks(prevState => [...prevState, newTask]);
   setDescription('');
  }

  function handleRemoveTask(selected: number) {
    Alert.alert("Aviso", "Tem certeza que deseja remover o item?", [
      {
        text: "Sim",
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.id !== selected));
        },
      },
      {
        text: "Não",
        style: 'cancel',
      }
    ]);
  }

  function handleCheckTask(selected: number) {
    const taskList = tasks.map(task => ({ ...task }));

    const taskUpdated = taskList.find(task => task.id === selected);

    if (taskUpdated) {
      taskUpdated.checked = !taskUpdated.checked;
      setTasks(taskList);
    }
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

      <Tasks
        tasks={tasks}
        onCheck={handleCheckTask}
        onRemove={handleRemoveTask}
      />

    </View>
  );
}