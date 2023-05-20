import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Snackbar from 'react-native-snackbar';
import Modal from 'react-native-modal';
import {FlatGrid} from 'react-native-super-grid';
import Tanggal from './tanggal';

class detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spekMobil: [
        {spek: '4 Seats', icon: 'car-seat'},
        {spek: 'AC', icon: 'air-filter'},
        {spek: 'Air Bag', icon: 'airbag'},
        {spek: 'ABS', icon: 'car-brake-abs'},
      ],
      modal: false,
    };
  }
  displayCheckout = () => {
    this.setState({modal: true});
  };
  showSnackBar = () => {
    Snackbar.show({
      text: 'Disimpan',
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'Simpan ke koleksi',
        textColor: 'blue',
        onPress: () => {
          /* Do something. */
        },
      },
    });
  };

  alert = () => {
    Alert.alert('Transaksi Berhasil', 'Pesanan anda berhasil tersimpan', [
      {text: 'OK', onPress: () => this.props.navigation.navigate('Tabs')},
    ]);
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon name="chevron-left" size={24} color="#000" />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>
              Car Detail
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../img/civic.png')}
            style={{height: 250, width: 420}}
          />
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginHorizontal: 10,
            }}
            onPress={() => this.showSnackBar()}>
            <Ionicons name="ios-bookmark-outline" size={30} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
            Honda Civic
          </Text>
          <Text style={{fontSize: 16, textAlign: 'justify', color: '#000'}}>
            The current-production Civic carries on the tradition of fuel
            efficiency and joyful road manners and elevates it with handsome
            exterior and interior design.
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Image
            source={require('../img/drive1.jpg')}
            style={{
              width: 185,
              height: 150,
              marginHorizontal: 10,
              borderRadius: 10,
            }}
          />
          <Image
            source={require('../img/drive2.jpg')}
            style={{
              width: 185,
              height: 150,
              marginHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{fontSize: 16, color: '#000'}}>Superior Control</Text>
          <Text style={{fontSize: 16, textAlign: 'justify', color: '#000'}}>
            Experience efficient, quick shifts with the standard 6-speed Sport
            Automatic Transmission. Adjustable dribe models let you customize
            your roadster responsiveness.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#1d224c',
            marginHorizontal: 10,
            marginVertical: 15,
            paddingVertical: 15,
            borderRadius: 30,
          }}
          onPress={() => this.displayCheckout()}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Book Now
          </Text>
        </TouchableOpacity>
        <View>
          <Modal
            style={{justifyContent: 'flex-end', margin: 0}}
            isVisible={this.state.modal}
            animationIn={'slideInUp'}>
            <View style={{backgroundColor: '#fff'}}>
              <View style={{marginHorizontal: 10, marginVertical: 10}}>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
                  Honda Civic
                </Text>
                <View
                  style={{
                    backgroundColor: '#1d224c',
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    marginRight: 300,
                    borderRadius: 10,
                    marginVertical: 10,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    1jt/hari
                  </Text>
                </View>
              </View>

              {/* Spek Mobil */}
              <FlatGrid
                itemDimension={130}
                data={this.state.spekMobil}
                renderItem={({item}) => (
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <MaterialCommunityIcons
                        name={item.icon}
                        size={30}
                        color="grey"
                      />
                    </View>
                    <Text style={{textAlign: 'center', marginHorizontal: 10}}>
                      {item.spek}
                    </Text>
                  </View>
                )}
              />
              {/* Spek Mobil */}

              <View style={{marginHorizontal: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Location
                </Text>
                <View
                  style={{
                    marginVertical: 10,
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderColor: 'grey',
                    flexDirection: 'row',
                    borderRadius: 10,
                  }}>
                  <Ionicons
                    name="ios-location-outline"
                    size={24}
                    color="#000"
                  />
                  <View style={{marginHorizontal: 10}}>
                    <Text style={{color: '#000'}}>Dukuhwaluh, Kembaran</Text>
                  </View>
                </View>
              </View>

              {/* DatePicker */}
              <View style={{marginHorizontal: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Tanggal Rental
                </Text>
                <Tanggal />
              </View>
              {/* DatePicker */}
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#C21010',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}
                  onPress={() => this.setState({modal: false})}>
                  <Text style={{color: '#fff', fontSize: 16}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#1d224c',
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}
                  onPress={() => this.alert()}>
                  <Text style={{color: '#fff', fontSize: 16}}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

export default detail;
