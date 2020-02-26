import React, { Component } from 'react';
import { Button } from 'native-base';
import { Text } from 'react-native';
import { RESET_PASSWORD } from '../constants/constants';

class EmailButton extends Component {
    render() {
        return (
            <Button style={this.props.style}
                onPress={(e) => this.props.onPress(e)} >
                <Text style={this.props.resetPasswordStyle}>
                    {RESET_PASSWORD}
                </Text>
            </Button>
        )
    }
}

export default EmailButton;