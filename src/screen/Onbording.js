import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';

const Onbording = props => {
  const [scroll, setscroll] = useState(true);
  const onList = [
    {
      id: 1,
      title: ' Quality',
      des: 'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
      image: require('../assets/image/1st.png'),
      color: '#5ea25f',
    },
    {
      id: 2,
      title: ' Convenient',
      des: 'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
      image: require('../assets/image/2nd.png'),
      color: '#D5715B',
    },
    {
      id: 3,
      title: 'Local',
      des: 'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time. ',
      image: require('../assets/image/3rd.png'),
      color: '#F8C569',
    },
  ];

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle="light-content"
      />

      <Swiper
        paginationStyle={{position: 'absolute', bottom: 140}}
        activeDotColor="#261C12"
        onIndexChanged={index => {
          if (index == onList.length - 1) {
            setscroll(false);
          }
        }}
        scrollEventThrottle={30}
        autoplay={false}
        scrollEnabled={scroll}
        activeDotStyle={{width: 20, height: 8}}>
        {onList.map((item, index) => {
          return (
            <View style={{flex: 1, backgroundColor: item.color}} key={index}>
              <View style={{flex: 1}}>
                <Image
                  source={item.image}
                  style={{
                    height: Dimensions.get('screen').height / 2.2,
                    width: Dimensions.get('screen').width,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#ffffff',
                  paddingHorizontal: 40,
                  borderTopLeftRadius: 49,
                  borderTopRightRadius: 49,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '700',
                    color: '#261C12',
                    lineHeight: 35,
                    marginVertical: 32,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    marginVertical: 8,
                    color: '#261C12',
                    lineHeight: 21,
                    textAlign: 'center',
                  }}>
                  {item.des}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: item.color,
                    height: 52,
                    borderRadius: 117,
                    justifyContent: 'center',
                    marginTop: 84,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 18,
                      fontWeight: '500',
                      lineHeight: 26,
                      textAlign: 'center',
                    }}>
                    Join the movement!
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginVertical: 16}}
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text
                    style={{
                      textAlign: 'center',
                      textDecorationLine: 'underline',
                      color: '#261C12',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 20,
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </Swiper>
    </>
  );
};

export default Onbording;

const styles = StyleSheet.create({});
