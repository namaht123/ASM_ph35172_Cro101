import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Asm/Login';
import ListProduct from './Asm/ListProduct';
import AddProduct from './Asm/AddProduct';
import UpdateProduct from './Asm/UpdateProduct';
import Lienhe from './Asm/Lienhe';


const App = () =>{

  const Tab = createBottomTabNavigator();
  const StackDemo = createNativeStackNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={ListProduct} options={{
          tabBarIcon: () => <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/378/951/original/home-vector-icon.jpg'}} style={{ width: 25, height: 25 }} resizeMode="stretch" />
        }} />
        <Tab.Screen name="Search" component={Lienhe} options={{
          tabBarIcon: () => <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/378/951/original/home-vector-icon.jpg'}} style={{ width: 25, height: 25 }} resizeMode="stretch" />
        }} />
        
      </Tab.Navigator>
    );
  }
 return (
  <NavigationContainer>
     
     <StackDemo.Navigator>
        {
          <StackDemo.Screen name="Login" component={Login} options={({ headerShown: false })} />
        }
        <StackDemo.Screen name="Main" component={MyTabs} options={({ headerShown: false })} />
       <StackDemo.Screen name='ListProduct' component={ListProduct} options={ {title:"San Pham"} } />
       <StackDemo.Screen name='AddProduct' component={AddProduct} options={ {title:"Them"} } />
       <StackDemo.Screen name='UpdateProduct' component={UpdateProduct} options={ {title:"sua"} } />
       
     </StackDemo.Navigator>
   </NavigationContainer>
 )
}
export default App;