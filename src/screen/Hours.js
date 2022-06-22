import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

const Hours = props => {
  const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
  const [selectDay, setSelectDay] = useState('');
  const timeSlots = [
    '8:00am - 10:00am',
    '1:00pm - 4:00pm',
    '10:00am - 1:00pm',
    '4:00pm - 7:00pm',
    '7:00pm - 10:00pm',
  ];
  const [selectTimeSlots, setSelectTimeSlot] = useState([]);
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
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 21,
            marginTop: 32,
          }}>
          Signup 4 of 4
        </Text>
        <Text
          style={{
            color: '#261C12',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 47,
            marginTop: 2,
          }}>
          Business Hours
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 21,
            marginTop: 32,
          }}>
          Choose the hours your farm is open for pickups. This will allow
          customers to order deliveries.
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
        }}>
        <FlatList
          data={days}
          horizontal
          renderItem={({item, index}) => {
            const isSelected = selectDay == item;
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectDay(item);
                }}
                style={{
                  height: 40,
                  width: 40,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 2,
                  borderRadius: 8,
                  backgroundColor: isSelected ? '#D5715B' : '#eee',
                }}>
                <Text
                  style={{
                    color: isSelected ? '#fff' : '#000',
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/*  */}
        <FlatList
          data={timeSlots}
          style={{
            marginTop: 20,
          }}
          numColumns={2}
          renderItem={({item}) => {
            const isSelected =
              selectTimeSlots.filter(i => i == item).length > 0;
            return (
              <TouchableOpacity
                onPress={() => {
                  if (isSelected) {
                    setSelectTimeSlot(prev => prev.filter(i => i !== item));
                  } else {
                    setSelectTimeSlot(prev => [...prev, item]);
                  }
                }}
                style={{
                  // height: 40,
                  padding: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  margin: 5,
                  borderRadius: 8,
                  // paddingHorizontal: 1,
                  backgroundColor: isSelected ? '#F8C569' : '#fff',
                }}>
                <Text style={{color: '#000'}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
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
            onPress={() => props.navigation.navigate('Confirm')}
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

export default Hours;

const styles = StyleSheet.create({});
