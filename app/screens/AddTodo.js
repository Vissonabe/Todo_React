import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SubComponent from '../components/SubComponent';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
      justifyContent: 'space-between'
    },
  })

export default class AddTodo extends SubComponent {
  render() {
    return (
        <View style={styles.container}>
        <Text> Add Todo </Text>
      </View>
      );
  }
}
