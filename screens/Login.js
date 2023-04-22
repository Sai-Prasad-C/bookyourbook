import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Pressable,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSendOtp = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a valid phone number');
      return;
    }
    setOtpSent(true);
  };

  const handleValidateOtp = () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }
    if (otp == '1234') {
      Alert.alert(
        'Success',
        `Logged in with phone number ${phoneNumber}`,
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Homepage'),
          },
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert('Failure', `Incorrect OTP`);
    }
  };

  const handleGoBack = () => {
    setOtpSent(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#250322"
      />
      <Image
        source={require('../images/logo.png')}
        style={{ width: 220, height: 100, marginBottom: 130, marginTop: 40 }}
      />
      <Text
        style={{
          fontSize: 30,
          color: '#F2920B',
          alignSelf: 'flex-start',
          marginLeft: '22%',
        }}>
        LOGIN
      </Text>
      <Text
        style={{
          color: '#F2920B',
          marginBottom: 50,
          alignSelf: 'flex-start',
          marginLeft: '22%',
        }}>
        Enter you mobile number to login
      </Text>
      {otpSent ? (
        <>
          <Text
            style={{ fontWeight: 'bold', marginBottom: 10, color: '#F2920B' }}>
            Enter the OTP sent to {phoneNumber}
          </Text>
          <TextInput
            placeholder="Enter OTP Here"
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={4}
            keyboardType="numeric"
            value={otp}
            onChangeText={(text) => setOtp(text)}
            style={[styles.input, isFocused && styles.focusedInput]}
            secureTextEntry={true}
          />
          {otp.length == 4 ? (
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                  marginTop: '3%',
                  width: 150,
                  backgroundColor: '#F2920B',
                  padding: '2%',
                  alignItems: 'center',
                  borderRadius: 25,
                  marginBottom: 80,
                },
              ]}
              onPress={handleValidateOtp}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Verify OTP
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.login}
              disabled={true}
              onPress={handleValidateOtp}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Verify OTP
              </Text>
            </Pressable>
          )}
          <Pressable onPress={handleGoBack}>
            <Text
              style={{
                color: '#F2920B',
                textDecorationLine: 'underline',
                opacity: 0.6,
              }}>
              Not {phoneNumber}? Change you number here.
            </Text>
          </Pressable>
        </>
      ) : (
        <>
          <TextInput
            placeholder="Phone Number"
            maxLength={10}
            keyboardType="phone-pad"
            value={phoneNumber}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={(text) => setPhoneNumber(text)}
            style={[styles.input, isFocused && styles.focusedInput]}
          />
          {phoneNumber.length == 10 ? (
            <Pressable
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                  marginTop: '3%',
                  width: 150,
                  backgroundColor: '#F2920B',
                  padding: '2%',
                  alignItems: 'center',
                  borderRadius: 25,
                  marginBottom: 80,
                },
              ]}
              onPress={handleSendOtp}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Send OTP
              </Text>
            </Pressable>
          ) : (
            <Pressable
              style={styles.login}
              disabled={true}
              onPress={handleSendOtp}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Send OTP
              </Text>
            </Pressable>
          )}
        </>
      )}
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#250322',
  },
  input: {
    padding: '2%',
    // margin: '3%',
    borderWidth: 1,
    width: 230,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  focusedInput: {
    borderColor: '#F2920B',
    borderWidth: 2,
  },
  login: {
    marginTop: '3%',
    width: 150,
    backgroundColor: '#F2920B',
    padding: '2%',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 80,
    opacity: 0.7,
  },
});
