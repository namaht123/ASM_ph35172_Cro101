import { View, Text, Image,  } from 'react-native'
import React , {useState, useEffect}from 'react'
import { FlatList, GestureHandlerRootView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/FontAwesome';
import Stars from './Starts';

const Home = (pop) => {
    const [products, setProducts] = useState([
        
        {
            url: 'https://tse4.mm.bing.net/th?id=OIP.i_ZJGC7NHtOOsLbT0Mk5fgHaE7&pid=Api&P=0&h=220',
            price: 75,
            productsName:'Bàn ăn 6 ghế gỗ sồi',
            speci: [
                ' bàn',
                '6 ghế',
                'Chất liệu: gỗ sồi'
            ],
            review: 12149,
            stars: 5
        },
        {
            url: 'https://toplist.vn/images/800px/1-226152.jpg',
            price: 75,
            productsName:'Bộ bàn ghế phòng khách',
            speci: [
                '1 bàn',
                '1 ghế dài và 4 ghế con',
                'Chất liệu gỗ xoan'
            ],
            review: 19,
            stars: 5
        },
        {
            url: 'https://noithat268.vn/upload/images/ban-ghe-noi-that-phong-khach-3.jpg',
            price: 88,
            productsName:'Bàn nội thất',
            speci: [
                '1 bàn lớn',
                'Chất liệu: gỗ lim',
                
            ],
            review: 159,
            stars: 3
        },
        {
            url: 'https://ghevanphong247.com/wp-content/uploads/2021/05/Noi-That-Khang-Gia-Mau-ban-ghe-an-hien-dai-don-gian-danh-cho-khong-gian-nho.jpg',
            price: 88,
            productsName:'Bộ bàn ghế ăn',
            speci: [
                '1 bàn',
                '4 ghế',
                'Chất liệu: gỗ'
            ],
            review: 159,
            stars: 5
        },
        {
            url: 'http://xuonggoth.vn/wp-content/uploads/2018/03/4-Ban-concorde.jpg',
            price: 88,
            productsName:'Bộ bàn ăn',
            speci: [
                '1 bàn',
                '6 ghế',
                'Chất liệu: gỗ'
            ],
            review: 159,
            stars: 5
        },
        {
            url: 'https://dailammocfurni.com/upload/images/mau-ban-ghe-nha-hang(1).jpg',
            price: 88,
            productsName:'Bàn ăn 6 ghế gỗ sồi',
            speci: [
                ' bàn',
                '6 ghế',
                'Chất liệu: gỗ sồi'
            ],
            review: 159,
            stars: 5
        }

    ])
  return (
    
    <View style = {{
        height: 750 ,
        backgroundColor: 'white'
    }}>
        

     <Image source={{uri: 'https://banoca.com/wp-content/uploads/2021/03/thiet-ke-logo-cong-ty-noi-that-1.jpg'}} style={{width: 200, height: 120, marginLeft: 100}} />

      <View style={{
        padding:10,
      }}>
        <Text style={{
            color: 'black',
            fontSize:30,
            fontWeight: 'bold',
            width:240,
        
        }}>Bàn ghế Nội Thất cao cấp  </Text>
      </View>
      <View style ={{
            height: 60,
            marginHorizontal: 10,
            
        }}>
            <GestureHandlerRootView style ={{
                flexDirection: 'row'
            }}>
                <Icon name='search' size={30} color={'black'} style={{
                    // position: 'absolute',
                    top: 3,
                    left: 10
                }}></Icon>

                <TextInput 
                placeholder='Search...'
                 style ={{
                    backgroundColor: '#ddd',
                    height:40,
                    width:310,
                    marginRight: 10,
                    marginLeft: 10,
                    borderRadius:5,
                    
                    
                }}
                
                />
                <Icon name='bars' size={30} color={'black'} style={{marginRight:10}}></Icon>
            </GestureHandlerRootView>

        </View>
      
      <GestureHandlerRootView>
        <FlatList
        style = {{marginTop: 5}}
         data = {products}
         numColumns={2}
         keyExtractor={item => item.productsName}
         renderItem={({item, index}) => <View style = {{
           
            flex: 0.5,
            // height: 200,
            marginLeft: index % 2==0? 10 : 0,
            marginTop: 5,
            marginRight: 10,
            marginBottom: 5,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: 'gray'

         }}>
            <View style ={{
                flexDirection: 'row',
                // marginTop: 1,
                // marginHorizontal: 5
            }}>
                <Image style ={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 20.5,
                    marginRight: 15,
                }}
                source={{uri: item.url
                }}
                />
                <Text style = {{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    flex: 1,
                    textAlign: 'right',
                    margin: 10,
                }}>
                    ${item.price}
                </Text>

            </View>
            <Text style = {{
                    color: 'red',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginHorizontal: 10,
                    marginTop: 5,

                }}>
                    {item.productsName}
                </Text>
                {
                    item.speci.map(sp =>
                        <Text
                        key={sp} 
                        style ={{
                            color: 'black',
                            fontSize: 14,
                            paddingHorizontal: 10,
                            paddingBottom: 10,
                            fontWeight: 'bold',
                        }}>-{sp}</Text>)
                }
                <View style = {{
                    flexDirection: 'row',
                    padding: 10,
                }}>
                    <TouchableOpacity 
                    // onPress={() =>{
                    //     let clonedProducts = products.map(eachProduct =>{
                    //         if(item.productsName == eachProduct.productsName){
                    //             return {...eachProduct, isSaved: true}
                    //         }
                    //     })
                    //     setProducts(clonedProducts)


                    // }}
                    style = {{
                        flexDirection: 'row',
                    }}>
                    <Icon style = {{
                        marginEnd:5, marginTop: 3}} 
                        name='heart' size={18} 
                        color={item.isSaved == undefined || item.isSaved == false ? Colors.inactive: 'red'} />
                    <Text style = {{
                        color: item.isSaved == undefined || item.isSaved == false ? Colors.inactive: 'red',
                        fontSize: 13,
                        fontWeight: 'bold',
                        width: 60,

                    }}>Saved for later</Text>
                    </TouchableOpacity>
                    <View style = {{
                        flex: 1,

                    }}>
                    <Stars numberOfStars = {item.stars}/>
                    <Text style ={{
                        color: 'green',
                        fontWeight: 'bold',
                        fontSize: 12,
                        textAlign: 'right',
                        paddingTop: 5,
                    }}>{item.review} reviews</Text>
                    </View>

                </View>
         </View>}
      />
      </GestureHandlerRootView>
      
    </View>
  )
}

export default Home