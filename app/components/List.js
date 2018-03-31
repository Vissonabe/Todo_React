import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox'

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'whitesmoke',
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    remove: {
      marginLeft: 10,
      marginBottom: 2,
      color: '#CD5C5C',
      fontSize: 26,
    },
    completed: {
      backgroundColor: 'whitesmoke'
    },
    itemCompleted: {
        textDecorationLine: 'line-through'
    }
  })

export default class List extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        onRemoveItem: PropTypes.func.isRequired,
        onToggleItemCompleted: PropTypes.func.isRequired,
        onTodoClick: PropTypes.func.isRequired
      }

      renderItem = (item, i) => {
        const {onToggleItemCompleted, onRemoveItem, onTodoClick} = this.props
        const itemStyle = item.completed ? [styles.item, styles.completed] : styles.item
        const strikeStyle = item.completed ?  styles.itemCompleted : []
    
        return (
          <TouchableOpacity key={i} onPress={() => onTodoClick(item)}>
          <View style={itemStyle}>
            <Text style={strikeStyle}> {item.label} </Text>
            <View style={styles.rightSection}>
              <Checkbox
                isChecked={item.completed}
                onToggle={() => onToggleItemCompleted(i)}
              />
              <TouchableOpacity onPress={() => onRemoveItem(i)}>
                <Text style={styles.remove}> &times; </Text>
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>
        )
      }

  render() {
    const {items} = this.props
    
        return (
          <ScrollView style={styles.container}>
            {items.map(this.renderItem)}
          </ScrollView>
        )
  }
}
