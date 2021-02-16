import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Greetings from '../../components/greetings';
import Task from '../../components/task';

export default class TaskList extends Component {
  state = {
    tasks: [
      {
        id: Math.random(),
        desc: 'Comprar Livro de React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Ler Livro de React Native',
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Greetings priority={1} />
        <View style={styles.taskList}>
          <FlatList
            data={this.state.tasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => <Task {...item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskList: {
    flex: 7,
  },
});
