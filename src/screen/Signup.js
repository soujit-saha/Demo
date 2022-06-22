import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Signup = props => {
  return (
    <ScrollView style={{flex: 1, padding: 30, backgroundColor: '#ffffff'}}>
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
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 21,
            marginTop: 32,
          }}>
          Signup 1 of 4
        </Text>
        <Text
          style={{
            color: '#261C12',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 47,
            marginTop: 4,
          }}>
          Welcome!
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
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
        <Text
          style={{
            color: 'rgba(38, 28, 18, 0.3)',
            fontSize: 10,
            fontWeight: '500',
            lineHeight: 15,
            textAlign: 'center',
            marginVertical: 32,
          }}>
          or signup with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#E9E9E9',
            borderRadius: 8,
            paddingHorizontal: 15,
            height: 48,
            width: '100%',
          }}>
          <Image
            source={require('../assets/icon/full.png')}
            style={{height: 20, width: 20}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="Full Name"
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
          }}>
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
            }}
            placeholder="Password"
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
            height: 48,
            width: '100%',
          }}>
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
            }}
            placeholder="Re-enter Password"
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 50,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                textAlign: 'center',
                textDecorationLine: 'underline',
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 20,
                // textDecorationStyle: 'solid',
                // textDecorationColor: 'black',
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Info')}
            style={{
              backgroundColor: '#D5715B',
              height: 52,
              borderRadius: 117,
              justifyContent: 'center',
              alignItems: 'center',
              width: '50%',
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 18,
                fontWeight: '500',
                lineHeight: 26,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({});
