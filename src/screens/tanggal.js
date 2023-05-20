import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/Fontisto';

export default () => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const getDate = () => {
    let newDate = new Intl.DateTimeFormat('id-ID').format(date);
    return date === '' ? '' : newDate;
  };

  return (
    <View
      style={{
        marginVertical: 10,
        borderWidth: 1,
        borderColor: 'grey',
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 3,
      }}>
      <TouchableOpacity
        style={{marginHorizontal: 10, marginVertical: 10, flexDirection: 'row'}}
        onPress={() => setOpen(true)}>
        <Icon name="date" size={24} color="#000" />
        <View style={{marginHorizontal: 10}}>
          <Text style={{color: '#000'}}>Pilih Tanggal</Text>
        </View>
      </TouchableOpacity>
      <DatePicker
        fadeToColor="#fff"
        androidVariant="iosClone"
        mode="date"
        modal
        open={open}
        date={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          console.log(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          flex: 1,
          marginHorizontal: 10,
        }}>
        <Text style={{color: '#000'}}>{getDate()}</Text>
      </View>
    </View>
  );
};
