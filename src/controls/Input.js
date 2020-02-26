import React, { Component } from 'react';
import { Input } from 'react-native-elements';

class EmailInput extends Component {
    render() {
        return (
            <Input
                onChange={(ev) => this.props.emailOnchange(ev)}
                label={this.props.label}
                labelStyle={{
                    color: "#000",
                    fontWeight: "normal"
                }}
            />
        )
    }
}

export default EmailInput;