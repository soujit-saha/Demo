import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Info = props => {
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
          Signup 2 of 4
        </Text>
        <Text
          style={{
            color: '#261C12',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 47,
            marginTop: 2,
          }}>
          Farm Info
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
            marginTop: 32,
          }}>
          <Image
            source={require('../assets/icon/Business.png')}
            style={{height: 20, width: 20}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="Business Name"
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
            marginVertical: 24,
          }}>
          <Image
            source={require('../assets/icon/Informal.png')}
            style={{height: 20, width: 20}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="Informal Name"
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
            source={require('../assets/icon/Street.png')}
            style={{height: 20, width: 20}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="Street Address"
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
            marginVertical: 24,
          }}>
          <Image
            source={require('../assets/icon/City.png')}
            style={{height: 22, width: 18}}
          />
          <TextInput
            style={{
              color: 'black',
              paddingHorizontal: 10,
              lineHeight: 21,
              fontSize: 14,
            }}
            placeholder="City"
            placeholderTextColor="rgba(0, 0, 0, 0.3)"
          />
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
            onPress={() => props.navigation.navigate('Verification')}
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

export default Info;

const styles = StyleSheet.create({});
