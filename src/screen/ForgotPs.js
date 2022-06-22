import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const ForgotPs = props => {
  return (
    <View style={{flex: 1, padding: 30, backgroundColor: '#ffffff'}}>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            marginVertical: 6,
            color: '#000000',
            lineHeight: 24,
          }}>
          FarmersEats
        </Text>
        <Text
          style={{
            color: '#261C12',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 47,
            marginTop: 80,
          }}>
          Forgot Passowrd?
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 24}}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.3)',
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
            }}>
            Remember your pasword?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                color: '#D5715B',
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 21,
                paddingLeft: 5,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#E9E9E9',
            borderRadius: 8,
            paddingHorizontal: 15,
            marginTop: 48,
            height: 48,
            width: '100%',
          }}>
          <Image
            source={require('../assets/icon/phone.png')}
            style={{height: 20, width: 20}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="Phone Number"
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
          />
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Verify')}
          style={{
            backgroundColor: '#D5715B',
            height: 52,
            borderRadius: 117,
            justifyContent: 'center',
            marginTop: 32,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 26,
              textAlign: 'center',
            }}>
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPs;

const styles = StyleSheet.create({});
