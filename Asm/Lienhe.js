import { View, Text, TouchableOpacity, Button, TextInput, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
const App = () => {
    return (
        <View
        
            style={{
                backgroundColor: '#009999',
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
                        alignItems: 'center',
                        marginBottom: 60,
                        marginTop: 50,
                    }}>
                        <Image source={{uri: 'https://thumbs.dreamstime.com/b/email-concept-25643714.jpg'}} style={{width: 258, height: 150}} />

                        <Text style={{
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: 'black'
                        }}>Liên Hệ</Text>
                    </View>

                    {/* body */}
                    <View style={{
                        flex: 6,

                    }}>
                        <View style={{

                            margin: 30,
                        }}>
                            {/* username */}
                            <View style={{
                                marginBottom: 20,
                            }}>
                                <Text style={{
                                    color: 'black',
                                }}>Your name</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    backgroundColor: '#BBBBBB',
                                    borderRadius: 15,
                                }}>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 10,
                                    }}>
                                        <Icon name='user' size={15} />
                                    </View>
                                    <View style={{
                                        flex: 1,
                                    }}>
                                        <TextInput style={{}} placeholder='Type your your name'></TextInput>
                                    </View>
                                </View>
                            </View>

                            <View style ={{
                                marginBottom: 20,
                            }}>
                                <Text style = {{
                                    color: 'black',
                                }}>Email</Text>
                                <View style = {{
                                    flexDirection: 'row',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 1,
                                    backgroundColor: '#BBBBBB',
                                    borderRadius: 15,
                                }}>
                                    <View style ={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding:10,
                                        
                                        
                                    }}>
                                        <Icon name='envelope'size={15}/>
                                    </View>
                                    <View style ={{
                                        flex: 1,
                                    }}>
                                        <TextInput style = {{}} placeholder='Type your email'></TextInput>
                                    </View>
                                </View>
                            </View>

                            
                            <View style ={{
                                marginBottom: 20,
                            }}>
                                <Text style = {{
                                    color: 'black',
                                }}>Message</Text>
                                <View style = {{
                                    flexDirection: 'row',
                                    borderBottomColor: 'white',
                                    borderBottomWidth: 1,
                                    backgroundColor: '#BBBBBB',
                                    borderRadius: 15,
                                }}>
                                    <View style ={{
                                        justifyContent: 'start',
                                        alignItems: 'start',
                                        padding:10,
                                        flexDirection: 'row',
                                        
                                    }}>
                                        <Icon name='paper-plane'size={15}/>
                                        <Text style ={{marginLeft: 13}}>Type your message</Text>
                                    </View>
                                    <View style ={{
                                        flex: 1,
                                        justifyContent: 'start',
                                    }}>
                                        <TextInput style = {{height: 100, }} placeholder=''></TextInput>
                                    </View>
                                </View>
                            </View>




                            <View style={{
                                marginTop: 10,
                                alignItems: 'flex-end',
                            }}>

                            </View>

                            {/* login button */}
                            <View style={{
                                marginVertical: 20,
                                justifyContent: 'center',
                                alignContent: 'center',
                               
                                
                            }}>
                                <TouchableOpacity activeOpacity={0.5} >
                                    <LinearGradient
                                        style={{
                                            padding: 10,
                                            borderRadius: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            
                                        }}
                                        colors={['#FF6699',  '#3498db', '#FF66FF','#FFFF99',]}
                                        useAngle={true}
                                        angle={45}
                                    >

                                        <Text style={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: 20
                                        }}>SUBMID</Text>

                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>


                        </View>



                    </View>





                </View>

            </View>

        </View>
    )
}

export default App

















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
