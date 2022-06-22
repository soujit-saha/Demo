import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const Login = props => {
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
          Welcome back!
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 24}}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.3)',
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 21,
            }}>
            New here?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
            <Text
              style={{
                color: '#D5715B',
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 21,
                paddingLeft: 5,
              }}>
              Create account
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
            source={require('../assets/icon/email.png')}
            style={{height: 20, width: 20}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="Email Address"
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#E9E9E9',
            borderRadius: 8,
            paddingHorizontal: 15,
            marginVertical: 24,
            height: 48,
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../assets/icon/password.png')}
              style={{height: 20, width: 16}}
            />
            <TextInput
              style={{
                color: 'black',
                paddingHorizontal: 10,
                lineHeight: 21,
                fontSize: 14,
                width: '70%',
              }}
              placeholder="Password"
              placeholderTextColor="rgba(0, 0, 0, 0.3)"
              maxLength={15}
            />
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Forgot')}>
            <Text
              style={{
                color: '#D5715B',
                fontSize: 14,
                fontWeight: '500',
                lineHeight: 21,
                paddingLeft: 5,
              }}>
              Forgot?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#D5715B',
            height: 52,
            borderRadius: 117,
            justifyContent: 'center',
            marginTop: 8,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 26,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: 'rgba(38, 28, 18, 0.3)',
            textAlign: 'center',
            marginVertical: 32,
          }}>
          or login with
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              borderWidth: 1,
              width: 96,
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              borderColor: 'rgba(0, 0, 0, 0.08)',
            }}>
            <Image
              source={require('../assets/icon/google.png')}
              style={{height: 30, width: 30}}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 96,
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              borderColor: 'rgba(0, 0, 0, 0.08)',
            }}>
            <Image
              source={require('../assets/icon/apple.png')}
              style={{height: 30, width: 30}}
            />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 96,
              height: 52,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              borderColor: 'rgba(0, 0, 0, 0.08)',
            }}>
            <Image
              source={require('../assets/icon/fb.png')}
              style={{height: 30, width: 30}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
