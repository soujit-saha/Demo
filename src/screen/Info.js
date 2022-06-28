import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
// import Modal from 'react-native-modal';

const Info = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {
      value: 'AN',
      label: 'Andaman and Nicobar Islands',
    },
    {
      value: 'AP',
      label: 'Andhra Pradesh',
    },
    {
      value: 'AR',
      label: 'Arunachal Pradesh',
    },
    {
      value: 'AS',
      label: 'Assam',
    },
    {
      value: 'BR',
      label: 'Bihar',
    },
    {
      value: 'CG',
      label: 'Chandigarh',
    },
    {
      value: 'CH',
      label: 'Chhattisgarh',
    },
    {
      value: 'DH',
      label: 'Dadra and Nagar Haveli',
    },
    {
      value: 'DD',
      label: 'Daman and Diu',
    },
    {
      value: 'DL',
      label: 'Delhi',
    },
    {
      value: 'GA',
      label: 'Goa',
    },
    {
      value: 'GJ',
      label: 'Gujarat',
    },
    {
      value: 'HR',
      label: 'Haryana',
    },
    {
      value: 'HP',
      label: 'Himachal Pradesh',
    },
    {
      value: 'JK',
      label: 'Jammu and Kashmir',
    },
    {
      value: 'JH',
      label: 'Jharkhand',
    },
    {
      value: 'KA',
      label: 'Karnataka',
    },
    {
      value: 'KL',
      label: 'Kerala',
    },
    {
      value: 'LD',
      label: 'Lakshadweep',
    },
    {
      value: 'MP',
      label: 'Madhya Pradesh',
    },
    {
      value: 'MH',
      label: 'Maharashtra',
    },
    {
      value: 'MN',
      label: 'Manipur',
    },
    {
      value: 'ML',
      label: 'Meghalaya',
    },
    {
      value: 'MZ',
      label: 'Mizoram',
    },
    {
      value: 'NL',
      label: 'Nagaland',
    },
    {
      value: 'OR',
      label: 'Odisha',
    },
    {
      value: 'PY',
      label: 'Puducherry',
    },
    {
      value: 'PB',
      label: 'Punjab',
    },
    {
      value: 'RJ',
      label: 'Rajasthan',
    },
    {
      value: 'SK',
      label: 'Sikkim',
    },
    {
      value: 'TN',
      label: 'Tamil Nadu',
    },
    {
      value: 'TS',
      label: 'Telangana',
    },
    {
      value: 'TR',
      label: 'Tripura',
    },
    {
      value: 'UP',
      label: 'Uttar Pradesh',
    },
    {
      value: 'UK',
      label: 'Uttarakhand',
    },
    {
      value: 'WB',
      label: 'West Bengal',
    },
  ]);
  const prevdata = props.route.params;
  const [bname, onChangebname] = useState('');
  const [iname, onChangeiname] = useState('');
  const [street, onChangestreet] = useState('');
  const [city, onChangecity] = useState('');
  const [modal, setmodal] = useState(false);
  const vaildation = () => {
    if (bname.length > 2) {
      if (iname.length > 2) {
        if (street.length > 2) {
          if (city.length > 2) {
            props.navigation.navigate('Verification', {
              ...prevdata,
              bname,
              iname,
              street,
              city,
            });
          } else {
            alert('Enter City Name');
          }
        } else {
          alert('Enter Street Address');
        }
      } else {
        alert('Enter Informal name');
      }
    } else {
      alert('Enter Business name');
    }
  };

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
            value={bname}
            onChangeText={onChangebname}
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
            value={iname}
            onChangeText={onChangeiname}
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
            value={street}
            onChangeText={onChangestreet}
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
            value={city}
            onChangeText={onChangecity}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={'State'}
            placeholderStyle={{
              color: 'rgba(0, 0, 0, 0.3)',
            }}
            style={{
              backgroundColor: '#E9E9E9',
              borderWidth: 0,
              paddingLeft: 20,
              // width: '48%',
            }}
            // ArrowUpIconComponent={() => {
            //   return <Text>Up</Text>;
            // }}
            // ArrowDownIconComponent={() => {
            //   return <Text>Down</Text>;
            // }}
            containerStyle={{
              width: '48%',
              // backgroundColor: '#E9E9E9',
            }}
            customItemContainerStyle={{}}
            dropDownContainerStyle={{
              backgroundColor: '#E9E9E9',
              borderWidth: 0,
            }}
            theme="LIGHT"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // position: 'absolute',
            marginTop: 40,
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
            onPress={vaildation}
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

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
});
