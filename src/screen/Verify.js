import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';

const Verify = props => {
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
          Verify OTP
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
          <TouchableOpacity>
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
            justifyContent: 'space-between',
          }}>
          <TextInput
            maxLength={1}
            keyboardType="phone-pad"
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
              backgroundColor: '#E9E9E9',
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            maxLength={1}
            keyboardType="phone-pad"
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
              backgroundColor: '#E9E9E9',
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            maxLength={1}
            keyboardType="phone-pad"
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
              backgroundColor: '#E9E9E9',
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            maxLength={1}
            keyboardType="phone-pad"
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
              backgroundColor: '#E9E9E9',
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            maxLength={1}
            keyboardType="phone-pad"
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
              backgroundColor: '#E9E9E9',
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => props.navigation.navigate('Reset')}
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
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginVertical: 16}}>
          <Text
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              fontWeight: '500',
              fontSize: 14,
              lineHeight: 20,
            }}>
            Resend Code
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({});
