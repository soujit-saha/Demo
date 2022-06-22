import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Verification = props => {
  return (
    <View style={{flex: 1, padding: 30, backgroundColor: '#ffffff'}}>
      <View style={{flex: 3}}>
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
          Signup 3 of 4
        </Text>
        <Text
          style={{
            color: '#261C12',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 47,
            marginTop: 2,
          }}>
          Verification
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 21,
            marginTop: 32,
          }}>
          Attached proof of Department of Agriculture registrations i.e. Florida
          Fresh, USDA Approved, USDA Organic
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 40,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text
              stylr={{
                fontWeight: 400,
                lineHeight: 21,
                fontSize: 14,
                color: '#261C12',
              }}>
              Attach proof of registration
            </Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#D5715B',
              height: 53,
              width: 53,
              borderRadius: 53,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/icon/camera.png')}
              style={{height: 21, width: 24}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: 20,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../assets/icon/arrow.png')}
              style={{height: 18, width: 26}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate('Hours')}
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
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
