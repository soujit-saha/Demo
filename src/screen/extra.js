<View style={{flex: 1, backgroundColor: '#5EA25F'}}>
  <View style={{flex: 1}}>
    <Image
      source={require('../assets/image/1st.png')}
      style={{height: 355, width: 394}}
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
      Quality
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
      Sell your farm fresh products directly to consumers, cutting out the
      middleman and reducing emissions of the global supply chain.
    </Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#5EA25F',
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
        Join the movement!
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{marginVertical: 16}}>
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
</View>;
