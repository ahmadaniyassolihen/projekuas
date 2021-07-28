import {faBookMedical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Alert, ScrollView} from 'react-native';
import {Header, CardContact} from '../../components';

import FIREBASE from '../../config/firebase';

class Home extends Component {
  constructor(props) {
    super();

    this.state = {
      notes: {},
      noteKey: [],
    };
  }
  // method react untuk meloading data awal
  componentDidMount() {
    this.ambilData();
  }
  // ambil data
  ambilData = () => {
    FIREBASE.database()
      .ref('Note')
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contentItem = {...data};

        this.setState({
          notes: contentItem,
          noteKey: Object.keys(contentItem),
        });
      });
  };
  // metode untuk hapus data
  hapusData = id => {
    Alert.alert('Warning', 'Apakah anda yakin akan menghapus Catatan ini?', [
      {
        text: 'Cancel', // Jika tekan cancel maka batal melakukan penghapusan
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK', // Jika tekan oke maka akan melakukan penghapusan data ke database
        onPress: () => {
          FIREBASE.database()
            .ref('Note/' + id)
            .remove();
          // abil data setelah hapus data supaya update
          this.ambilData();

          Alert.alert('Sukses', 'Hapus catatan berhasil');
        },
      },
    ]);
  };

  render() {
    const {notes, noteKey} = this.state;
    return (
      <View style={styles.wrapper}>
        <Header />
        <ScrollView>
        
        <View style={styles.listContact}>
          {noteKey.length > 0 ? (
            noteKey.map(key => (
              <CardContact
                key={key}
                contentItem={notes[key]}
                id={key}
                {...this.props}
                removeData={this.hapusData}
              />
            ))
          ) : (
            <Text>Tidak ada catatan!</Text>
          )}
        </View>
        </ScrollView>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => this.props.navigation.navigate('AddContact')}>
            <FontAwesomeIcon icon={faBookMedical} size={30} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#98D4E1',
  },

  wrapperButton: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 30,

  },
  btnAdd: {
    padding: 20,
    backgroundColor: '#29839F',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 6,
  },
  listContact: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
