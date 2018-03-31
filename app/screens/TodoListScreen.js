import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { actionCreators } from '../redux/todoRedux'
import Title from '../components/Title'
import Input from '../components/Input'
import List from '../components/List'
import Footer from '../components/Footer'
import * as screen from '../constants/ScreenNames'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  divider: {
    height: 1,
    backgroundColor: 'whitesmoke',
  }
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class TodoListScreen extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  addItem = (item) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addItem(item))
  }

  removeItem = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeItem(index))
  }

  _onTodoClick = (item) => {
    this.props.navigator.showModal({
      screen: screen.TODO_DETAIL_SCREEN,
      title: 'Todo Detail',
			passProps: {
				item
			},
			backButtonHidden: false
		});
  }

  _onFABClick = () => {
    this.props.navigator.showModal({
      screen: screen.TODO_ADD_SCREEN,
      title: 'Add Todo',
			backButtonHidden: false
		});
  }

  toggleItemCompleted = (index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggleItemCompleted(index))
  }

  removeCompleted = () => {
    const {dispatch} = this.props
    dispatch(actionCreators.removeCompleted())
  }

    render() {

      const {items} = this.props

      return (
        <View style={styles.container}>
        <Input
          placeholder={'Enter an item!'}
          onSubmit={this.addItem}
        />
        <View style={styles.divider}/>
        <List
          items={items}
          onTodoClick = {this._onTodoClick}
          onRemoveItem={this.removeItem}
          onToggleItemCompleted={this.toggleItemCompleted}
        />
        <View style={styles.divider} />
        <Footer onRemoveCompleted={this.removeCompleted} />
      </View>
      );
    }
  }

export default connect(mapStateToProps)(TodoListScreen)
