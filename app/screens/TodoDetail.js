import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SubComponent from '../components/SubComponent';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'whitesmoke',
    },
    divider: {
      height: 1,
      backgroundColor: 'whitesmoke',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 14,
    },
  })

export class TodoDetail extends SubComponent {

    constructor(props) {
		super(props);
	}

  render() {
    const {item} = this.props
    const subText = item.completed ? "completed" : "not completed yet"
    return (
        <View style={styles.container}>
        <Text style={styles.title}> {item.label} </Text>
        <Text style={styles.subTitle}> {subText}  </Text>
      </View>
      );
  }
}

TodoDetail.propTypes = {
	item: PropTypes.object.isRequired
};

export default TodoDetail;
