import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Greetings from '../../components/greetings';
import Task from '../../components/task';

export default class TaskList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Greetings priority={1} />
        <View style={styles.taskList}>
          <Task
            desc="Comprar livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />
          <Task desc="Ler livro" estimateAt={new Date()} doneAt={null} />
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
