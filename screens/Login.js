import React, { Component, StatusBar } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();

class Login extends Component {

  constructor(args) {
    super(args);
    this.state = {phoneNumber: "", otpSent: false, otp: "", isFocused: false}
    // const navi = useNavigation();
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  handleSendOtp = () => {
    if (!this.state.phoneNumber) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    this.setState({ otpSent: true });
  };

  handleValidateOtp = () => {
    if (!this.state.otp) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }
    if (this.state.otp == "1234"){
      Alert.alert('Success', `Logged in with phone number ${this.state.phoneNumber}`,[
        {
          text: "Home",
          onPress: () => navigation.navigate("Homepage"),
        }
      ],{cancelable: false});
    } else {
      Alert.alert('Failure', `Incorrect OTP`);
    }
    
  };

  // LoginFunction() {
  //     const {username,password} = this.state;
  //     if(username == "9999999999"  && password == "abcd"){
  //       Alert.alert("Successfully Logged In");
  //     }else{
  //       Alert.alert("User not found");
  //     }

  // }  

  render() {
    const { isFocused } = this.state;

    return (
      
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor="#250322"/>
        <Image 
        source={require('../images/logo.png')} 
        style={{width: 220, height: 100, marginBottom: 30}}
        />
        {
          this.state.otpSent ? (
          <>
          <Text style={{ fontWeight: 'bold', marginBottom: 10 , color: "#F2920B"}}>Enter the OTP sent to {this.state.phoneNumber}</Text>
            <TextInput
          placeholder="Enter OTP Here"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          maxLength={4}
          keyboardType="numeric"
          value={this.state.otp}
          onChangeText={(text) => this.setState({ otp: text })}
          style={[styles.input, isFocused && styles.focusedInput]}
          secureTextEntry={true}
          />
          <Pressable style={styles.login} onPress={this.handleValidateOtp}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Verify OTP</Text>
          </Pressable>
          </>
          ) : (
            <>
              <TextInput
          placeholder="Phone Number without +91"
          maxLength={10}
          keyboardType="phone-pad"
          value={this.state.phoneNumber}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChangeText={(text) => this.setState({ phoneNumber: text })}
          style={[styles.input, isFocused && styles.focusedInput]}
          />
          <Pressable style={styles.login} onPress={this.handleSendOtp}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Send OTP</Text>
          </Pressable>
            </>
          )
        }
      
      </View>

    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#250322',
  },
  input: {
    padding: '2%',
    margin: '3%',
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  focusedInput: {
    borderColor: "#F2920B",
    borderWidth: 2,
  },
  login: {
    marginTop: '3%',
    width: 150,
    backgroundColor: '#F2920B',
    padding: '2%',
    alignItems: 'center',
    borderRadius: 25,
  },
});

// export default CreateAppContainer(AppNavigator);
export default Login;