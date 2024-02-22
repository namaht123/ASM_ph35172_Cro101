import { View, Text, TouchableOpacity, Button, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Login = props => {
    return (
        <View
            style={{
                backgroundColor: '#3498db',
                height: 750,
            }}>
            <View
                style={{
                    backgroundColor: '#fff',
                    margin: 10,
                    flex: 1,
                    borderRadius: 10,

                }}>
                <View style={{
                    flex: 1,
                    marginVertical: 20,
                }}>
                    {/* header */}
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>LOGIN</Text>
                    </View>

                    {/* body */}
                    <View style={{
                        flex: 6,
                        
                    }}>
                        <View style = {{
                            
                            margin: 30,
                        }}>
                            {/* username */}
                            <View style ={{
                                marginBottom: 20,
                            }}>
                                <Text style = {{
                                    color: 'black',
                                }}>Username</Text>
                                <View style = {{
                                    flexDirection: 'row',
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                }}>
                                    <View style ={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding:10,
                                    }}>
                                        <Icon name='user'size={15}/>
                                    </View>
                                    <View style ={{
                                        flex: 1,
                                    }}>
                                        <TextInput style = {{}} placeholder='Type your username'></TextInput>
                                    </View>
                                </View>
                            </View>

                             {/* password */}
                             <View>
                                <Text style = {{
                                    color: 'black',
                                }}>password</Text>
                                <View style = {{
                                    flexDirection: 'row',
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                }}>
                                    <View style ={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding:10,
                                    }}>
                                        <Icon name='lock'size={15}/>
                                    </View>
                                    <View style ={{
                                        flex: 1,
                                    }}>
                                        <TextInput style = {{}} placeholder='Type your password' secureTextEntry={true}></TextInput>
                                    </View>
                                </View>
                            </View>

                            <View style = {{
                                marginTop: 10,
                                alignItems: 'flex-end',
                            }}>
                                <Text style = {{
                                    color: 'black',
                                }}>
                                    Forgot password ?
                                </Text>
                            </View>

                            {/* login button */}
                            <View style = {{
                                marginVertical: 20,
                                justifyContent: 'center',
                                alignContent: 'center',
                            }}>  
                            <TouchableOpacity activeOpacity={0.5} onPress={() => props.navigation.navigate('ListProduct')} >
                                <LinearGradient
                                style = {{
                                    padding: 10,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                colors={['#CC99FF','#aed6f1', '#3498db', '#FF66FF']}
                                useAngle={true}
                                angle={45}
                                >
                              
                                    <Text style = {{
                                        color: 'white',
                                        fontWeight: 'bold'
                                    }}>Login</Text>
                               
                                </LinearGradient> 
                                </TouchableOpacity>
                            </View>


                        </View>

                        <View style = {{
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Text>Or Sing up Using</Text>
                            <View style = {{
                                marginTop: 15,
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity style = {{
                                    width: 50,
                                    height: 50,
                                    padding: 10,
                                    backgroundColor: '#3b5998',
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5,
                                }}>
                                  <Icon name='facebook-f' size={20} color={'white'}/>  
                                </TouchableOpacity>

                                <TouchableOpacity style = {{
                                    width: 50,
                                    height: 50,
                                    padding: 10,
                                    backgroundColor: '#ea4335',
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: 5,
                                }}>
                                  <Icon name='google'  size={20} color={'white'}/>  
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>

                    {/* footer */}
                    <View style = {{
                        flex: 2,           
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text>Or Sign Up Using</Text>

                        {/* button sign up */}
                        <TouchableOpacity style = {{
                            padding: 20,
                        }}>
                            <Text style = {{
                                color: 'black',
                                fontWeight: '500'
                            }}>SIGN UP</Text>
                        </TouchableOpacity>

                    </View>



                </View>

            </View>

        </View>
    )
}

export default Login

















// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
// } from 'react-native';

// class App extends Component {
//   state = {
//     username: '',
//     password: '',
//   };

//   handleLogin = () => {
//     // Thực hiện xác thực người dùng
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Đăng nhập</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Tên người dùng"
//           value={this.state.username}
//           onChangeText={(text) => this.setState({ username: text })}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Nhap mật khẩu"
//           value={this.state.password}
//           onChangeText={(text) => this.setState({ password: text })}
//           secureTextEntry={true}
//         />
//         <View style={styles.button}>
//           <Button
//             onPress={this.handleLogin}
//             title="Đăng nhập"
//           /></View>
//         <View style={styles.button}>
//           <Button
//             onPress={this.handleLogin}
//             title="Bạn có tài khoản chưa?"
//           /></View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//     color: '#fff'
//   },
//   input: {
//     width: 350,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 10,
//     backgroundColor: '#fff',
//     margin: 5,

//   },
//   button: {
//     width: 350,
//     height: 40,
//     backgroundColor: '#000',
//     color: '#fff',
//     borderRadius: 200,

//   },
// });

// export default App;
