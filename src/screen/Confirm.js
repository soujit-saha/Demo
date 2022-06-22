import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Confirm = props => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff', padding: 30}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 2,
        }}>
        <Image
          source={require('../assets/icon/right.png')}
          style={{
            height: 82,
            width: 124,
            marginVertical: 8,
          }}
        />
        <Text
          style={{
            color: '#261C12',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 47,
            marginVertical: 24,
          }}>
          You’re all done!
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 12,
            fontWeight: '400',
            lineHeight: 18,
          }}>
          Hang tight! We are currently reviewing your account and will follow up
          with you in 2-3 business days. In the meantime, you can setup your
          inventory.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
          style={{
            backgroundColor: '#D5715B',
            height: 52,
            borderRadius: 117,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'absolute',
            bottom: 50,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 18,
              fontWeight: '500',
              lineHeight: 26,
              textAlign: 'center',
            }}>
            Got it!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Confirm;

const styles = StyleSheet.create({});
