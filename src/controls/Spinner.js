import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

class EmailSpinner extends Component {
    render() {
        return (
            <Spinner
            visible={this.props.visible}
            textContent={this.props.textContent}
            textStyle={this.props.textStyle}
        />
        )
    }
}

export default EmailSpinner;