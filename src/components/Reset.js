import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from '../axios/axios';
import EmailInput from '../controls/Input';
import EmailButton from '../controls/Button';
import EmailSpinner from '../controls/Spinner';
import { PLEASE_ENTER_EMAIL_ADDRESS, FORGOT_YOUR_PASSWORD } from '../constants/constants';



class Reset extends Component {

    constructor() {
        super();
        this.state = {
            loading: false,
            msg: "",
            buttonClick: false
        }
    }


    getUserDetails = (e, msg) => {
        this.setState({ loading: true, msg: '', buttonClick: true });
        e.preventDefault();
        const userInfo = {
            loginId: msg
        }
        axios.post('forgot-password', userInfo)
            .then(response => {
                this.setState({ loading: false, msg: response.data.message })
            })
            .catch(error => {
                const errorMessage = error.response.data.error;
                if (error.message === "Request failed with status code 404") {
                    this.setState({ loading: false, msg: 'Check The Url' })
                } else if (error.message === "Request failed with status code 500") {
                    this.setState({ loading: false, msg: 'Check The Network' })
                } else {
                    this.setState({ loading: false, msg: errorMessage.message })
                }

            });
    }

    emailOnchange = (ev) => {
        const { text } = ev.nativeEvent;
        this.setState({ msg: text, buttonClick: false })

    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.forgot}>
                        {FORGOT_YOUR_PASSWORD}
                    </Text>
                    <Text style={styles.message}>
                        {PLEASE_ENTER_EMAIL_ADDRESS}
                    </Text>
                </View>
                <View style={styles.input}>
                    <EmailInput
                        emailOnchange={(ev) => this.emailOnchange(ev)}
                        label="Email address"
                    />
                </View>

                <EmailButton
                    style={styles.buttonStyle}
                    onPress={(e) => this.getUserDetails(e, this.state.msg)}
                    resetPasswordStyle={styles.reset}
                />

                <View>
                    {this.state.loading ? <EmailSpinner
                        visible={true}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    /> : <Text style={styles.errorMessage}>
                            {this.state.buttonClick === true ? this.state.msg : ""}
                        </Text>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        margin: 10
    },
    forgot: {
        textAlign: "center",
        fontSize: 25,
        marginBottom: 10,
        fontWeight: "bold"
    },
    message: {
        textAlign: "center",
        marginBottom: 10,
        color: "black",
        fontSize: 17
    }, input: {
        display: "flex",
        marginTop: 40
    },
    buttonStyle: {
        backgroundColor: "#F25278",
        marginTop: 10
    },
    reset: {
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
        color: "#fff",
        fontSize: 17
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    errorMessage: {
        textAlign: 'center',
        margin: 20,
        color: 'red'
    }

})

export default Reset