import {
    Dimensions,
    FlatList,
    Image,
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput
  } from 'react-native';
  import React, {useEffect, useLayoutEffect, useState} from 'react';
  import DecimalFormat from 'decimal-format';
import Icon from 'react-native-vector-icons/FontAwesome';

  
  const ListProduct = props => {
    const [listProduct, setListProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
  
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discription, setDiscription] = useState('');
    const [url, setUrl] = useState('');
  
    const df = new DecimalFormat('###,###,###');
    //Load danh sách sản phẩm
    const getListProduct = async () => {
      let url = 'https://65d60bf0f6967ba8e3bd5da3.mockapi.io/tb_product';
      try {
        const res = await fetch(url);
        const json = await res.json();
        console.log(json);
        setListProduct(json);
      } catch (error) {
        console.log(error);
      } finally {
        //Kết thúc quá trình load dữ liệu
        //Có lỗi cũng gọi đến lệnh này
        setIsLoading(false); //Trạng thái không load nữa
      }
    };
    useEffect(() => {
      getListProduct();
    }, []);
  
    React.useEffect(() => {
      const load = props.navigation.addListener('focus', () => {
        getListProduct();
      });
      return load;
    }, [props.navigation]);
  
    const PostItem = ({item, e}) => {
      const DeleteItem = () => {
        let urlApiDelete =
          'https://65d60bf0f6967ba8e3bd5da3.mockapi.io/tb_product/' + item.id;
        fetch(urlApiDelete, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            if (res.status == 200) {
              alert('Xóa thành công');
              getListProduct();
            }
          })
          .catch(erro => {
            console.log(erro);
          });
      };
      return (
        
        <View style={styles.containerItem}>
          <View style={styles.containerImage}>
            <Image style={styles.customImgProduct} source={{uri: item.url}} />
          </View>
          <View style={styles.containerContent2}>
            <TouchableOpacity
              onPress={() => {
                setIsVisibleModal(true);
                setName(item.name);
                setUrl(item.url);
                setDiscription(item.discription);
                setPrice(item.price);
              }}>
              <Text style={styles.customTextName}>{item.name}</Text>
            </TouchableOpacity>
            <Text numberOfLines={2} style={styles.customTextDiscription}>
              {item.discription}
            </Text>
          </View>
  
          <View style={styles.containerContent}>
            <View style={styles.containerBottom}>
              <Text style={styles.customTextPrice}>đ{df.format(item.price)}</Text>
              <View style={{flexDirection: 'row'}}>
               
              </View>
            </View>
          </View>
        </View>
      );
    };
  
    return (
      <View style={styles.container}>
        <Image source={{uri: 'https://thuvienlogo.com/data/04/mau-logo-shop-quan-ao-dep-04.jpg'}} style={{width: 300, height: 90, marginLeft: 50}} />

<View style={{
  padding:10,
}}>
  <Text style={{
      color: 'black',
      fontSize:30,
      fontWeight: 'bold',
      width:240,
  
  }}>Shop áo Kiểu dáng đẹp  </Text>
  <View>
  <Icon name='search' size={30} color={'black'} style={{
                    // position: 'absolute',
                    top: 30,
                    left: 10
                }}></Icon>

                <TextInput 
                placeholder='Search...'
                 style ={{
                    backgroundColor: '#ddd',
                    height:40,
                    width:300,
                    marginRight: 10,
                    marginLeft: 40,
                    borderRadius:5,
                    
                    
                }}
                
                />
                
  </View>
</View>
        <FlatList
          data={listProduct}
          renderItem={PostItem}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
        
        <Modal animationType="fade" transparent={true} visible={isVisibleModal}>
          <View style={styles.containerModal}>
            <View style={styles.customContentModal}>
              <Image
                style={{
                  width: '100%',
                  borderTopRightRadius: 8,
                  borderTopLeftRadius: 8,
                  height: undefined,
                  aspectRatio: 1,
                }}
                source={{uri: url}}
              />
              <View style={styles.customContent}>
                <Text style={{fontFamily: 'regular2', fontSize: 16}}>{name}</Text>
                <Text style={{fontFamily: 'regular2',fontSize:14,textAlign:'justify', color: 'black',marginTop:2}}>
                  {discription}
                </Text>
                <Text style={{fontFamily: 'regular2',fontSize:14, color: 'black',marginTop:2}}>
                  đ{df.format(price)}
                </Text>
              </View>
  
              <TouchableOpacity
                style={[styles.customBtnHide]}
                onPress={() => setIsVisibleModal(false)}>
                <Text style={{fontFamily: 'regular2',color:'white'}}>Hide</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  export default ListProduct;
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F7F9FE',
      flex: 1,
    },
    containerItem: {
      width: Dimensions.get('window').width / 2 - 20,
      backgroundColor: 'white',
      elevation: 5,
      borderRadius: 10,
      marginHorizontal: 10,
      marginVertical: 20,
    },
    containerContent: {
      marginHorizontal: 15,
      marginVertical: 10,
      marginTop: 'auto',
    },
    containerContent2: {
      marginHorizontal: 15,
      marginVertical: 10,
    },
    customImgProduct: {
      width: '100%',
      height: undefined,
      aspectRatio: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    customTextDiscription: {
      color: 'black',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'regular2',
    },
    customTextName: {
      fontSize: 14,
      fontFamily: 'regular',
    },
    customTextPrice: {
      color: 'black',
      fontWeight: '600',
      fontSize: 17,
      marginTop: 10,
      marginBottom: 10,
      fontFamily: 'regular2',
    },
    containerBottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerModal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      flex: 1,
    },
    customContentModal: {
      backgroundColor: 'white',
      alignItems: 'center',
      borderRadius: 8,
      width: '90%',
    },
    customBtnHide: {
      marginTop:10,
      marginBottom:20,
      backgroundColor:'#d17999',
      width:"90%",
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8
    },
    customContent: {
      marginTop: 10,
      marginBottom: 10,
      marginStart: 10,
      marginEnd: 10,
    },
  });
  