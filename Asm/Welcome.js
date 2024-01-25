import { View, Text , Image} from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style ={{
        height: 750
    }}>
      
      <View>
      <Image source={{uri: 'https://banoca.com/wp-content/uploads/2021/03/thiet-ke-logo-cong-ty-noi-that-1.jpg'}} style={{width: 350, height: 260, marginLeft: 30}} />
      <Text style ={{
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 150,
        color: 'green'
      }}>Welcome</Text>
    </View></View>
  )
}

export default Welcome