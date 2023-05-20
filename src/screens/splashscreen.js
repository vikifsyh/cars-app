import React, {Component} from 'react';
import {View, Image, StatusBar} from 'react-native';
import {StackActions} from '@react-navigation/native';

class splashscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Tabs'));
    }, 3000);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../img/steering-wheel.png')}
            style={{
              width: 90,
              height: 90,
            }}
          />
        </View>
      </View>
    );
  }
}

export default splashscreen;
