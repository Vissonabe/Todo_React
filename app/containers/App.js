import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import TodoListScreen from '../screens/TodoListScreen';
import TodoDetail from '../screens/TodoDetail';
import AddTodo from '../screens/AddTodo';

import configureStore from '../store/configureStore'
import * as screen from '../constants/ScreenNames'

const store = configureStore().store
const persistor = configureStore().persistor

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: false,
	tabBarHidden: true,
	drawUnderTabBar: true
};

export default () => {
  Navigation.registerComponent(screen.TODO_LIST_SCREEN, () => TodoListScreen, store, Provider);
  Navigation.registerComponent(screen.TODO_DETAIL_SCREEN, () => TodoDetail, store, Provider);
  Navigation.registerComponent(screen.TODO_ADD_SCREEN, () => AddTodo, store, Provider);

  Navigation.startSingleScreenApp({
    screen: {
      screen: screen.TODO_LIST_SCREEN,
      title: 'Todos',
      navigatorStyle
    }
  });
};