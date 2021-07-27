import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BtnIcon} from '..';

const CardContact = ({id, kontakItem, navigation, removeData}) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate('DetailContact', {id: id})}>
      <View>
        <Text style={styles.nama}>{kontakItem.nama}</Text>
        <Text style={styles.noHp}> {kontakItem.alamat}</Text>
      </View>
      <View style={styles.icon}>
        <BtnIcon
          icon={faEdit}
          color={'#02bbdb'}
          size={25}
          onPress={() => navigation.navigate('EditContact', {id: id})}
        />
        <BtnIcon
          icon={faTimes}
          color={'#23c484'}
          size={25}
          onPress={() => removeData(id)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardContact;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#ededed',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  nama: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  noHp: {
    fontSize: 12,
    color: '#626363',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
