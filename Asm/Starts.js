import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
function Stars(pops) {
    // item <=numberOfStars-1
    const { numberOfStars } = pops
    return <View style ={{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }}>{[0,1,2,3,4].map(item => <Icon 
        style={{ marginEnd: 2 }}
        name='star' size={10}
        color={item <= numberOfStars-1 ? 'orange' : 'gray'} /> )}
        </View>
    


}
export default Stars