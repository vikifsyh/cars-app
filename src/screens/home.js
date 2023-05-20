import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatGrid} from 'react-native-super-grid';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kategori: [
        {
          image: require('../img/Volkswagen.png'),
        },
        {
          image: require('../img/Toyota.png'),
        },
        {
          image: require('../img/honda.png'),
        },
        {
          image: require('../img/BMW.png'),
        },
        {
          image: require('../img/KIA.png'),
        },
        {
          image: require('../img/Mercedes.png'),
        },
      ],
      namaMobil: [
        {
          nama: 'Volkswagen',
          image: require('../img/vg.png'),
          location: 'Purwokerto',
          price: '1jt/hari',
          rate: '4,8',
        },
        {
          nama: 'Honda Civic',
          image: require('../img/civic.png'),
          location: 'Purwokerto',
          price: '1jt/hari',
          rate: '4,7',
          route: 'detail',
        },
        {
          nama: 'Toyota Camry',
          image: require('../img/Toyota-Camry.png'),
          location: 'Purwokerto',
          price: '1jt/hari',
          rate: '4,9',
        },
        {
          nama: 'BMW-X5',
          image: require('../img/BMW-X5.png'),
          location: 'Purwokerto',
          price: '1jt/hari',
          rate: '4,8',
        },
        {
          nama: 'Mercedes-Benz',
          image: require('../img/Benz.png'),
          location: 'Purwokerto',
          price: '1jt/hari',
          rate: '4,6',
        },
      ],
    };
  }
  backAction = () => {
    Alert.alert('Perhatian', 'Apakah anda yakin keluar aplikasi', [
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'Tidak',
      },
      {
        text: 'Yakin',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#f4f4fe'}}>
        <StatusBar backgroundColor={'#f4f4fe'} barStyle={'dark-content'} />
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 20,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../img/man.png')}
            style={{width: 40, height: 40}}
          />
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontWeight: 'bold', color: '#000', fontSize: 18}}>
              Hi User,
            </Text>
            <Text style={{color: '#000'}}>Find the car you want</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              borderRadius: 20,
              backgroundColor: '#fff',
              marginHorizontal: 10,
              elevation: 3,
              paddingHorizontal: 20,
              borderColor: 'grey',
              paddingVertical: 7,
              flex: 1,
            }}
            placeholder="Search Here..."
            placeholderTextColor="grey"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              paddingVertical: 10,
              marginHorizontal: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <Ionicons name="search-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={{marginVertical: 20}}>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
              Best Brands
            </Text>
          </View>
          <View>
            <FlatGrid
              itemDimension={120}
              data={this.state.kategori}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    elevation: 3,
                    paddingVertical: 20,
                    borderRadius: 15,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 60, height: 60}}
                    resizeMode="stretch"
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
              Best Cars
            </Text>
          </View>
          <View>
            <FlatList
              data={this.state.namaMobil}
              vertical
              style={{marginHorizontal: 10}}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: '#fff',
                    elevation: 3,
                    marginHorizontal: 10,
                    borderRadius: 15,
                    marginVertical: 10,
                  }}
                  onPress={() => this.props.navigation.navigate(item.route)}>
                  {/* Mobil */}
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={item.image}
                      style={{width: 160, height: 100}}
                    />

                    {/* namaMobil */}
                    <View style={{marginHorizontal: 30, marginVertical: 10}}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        {item.nama}
                      </Text>

                      {/* location */}
                      <View style={{flexDirection: 'row', marginVertical: 10}}>
                        <Ionicons
                          name="ios-location-outline"
                          size={24}
                          color="#000"
                        />
                        <Text
                          style={{
                            color: '#000',
                            marginHorizontal: 10,
                          }}>
                          {item.location}
                        </Text>
                      </View>
                      {/* location */}

                      {/* rate */}
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons name="ios-star" size={24} color="#ffd60a" />
                        <Text
                          style={{
                            color: '#000',
                            marginHorizontal: 10,
                            textAlign: 'center',
                          }}>
                          {item.rate}
                        </Text>
                      </View>
                      {/* rate */}

                      {/* price */}
                      <View
                        style={{
                          backgroundColor: '#1d224c',
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                          borderRadius: 30,
                          marginVertical: 20,
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: 'bold',
                          }}>
                          {item.price}
                        </Text>
                      </View>
                      {/* price */}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default home;
