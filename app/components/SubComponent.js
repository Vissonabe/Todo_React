import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SubComponent extends Component {

    constructor(props) {
		super(props);
		this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
	}

    _onNavigatorEvent(event) {
		if (event.type === 'NavBarButtonPress') {
			if (event.id === 'close') {
				this.props.navigator.dismissModal();
			}
		}
	}
}

SubComponent.navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
};
