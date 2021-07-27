import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {BtnGrup, InputGrup} from '../../components';
import FIREBASE from '../../config/firebase';

export class AddContact extends Component {
  constructor(props) {
    super();

    this.state = {
      nama: '',
      alamat: '',
    };
  }

  onChangeInput = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    // cek apakah data sudah ada di state
    if (this.state.nama && this.state.alamat) {
      // buat tabel
      const tabelKontak = FIREBASE.database().ref('Kontak');
      // buat daftar kolom dan isi dengan nama kolom di state
      const kontak = {
        nama: this.state.nama,
        alamat: this.state.alamat,
      };
      // buat method untuk tambah kontak
      tabelKontak
        .push(kontak)
        .then(data => {
          Alert.alert('Sukses', 'Catatan berhasil disimpan');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('Error : ', error);
        });
    } else {
      Alert.alert('Error', 'Judul dan Content wajib di isi');
    }
  };
  render() {
    return (
         <View style={styles.wrapper}>
        <InputGrup
          label={'Judul'}
          placeholder={'Tulis Judul'}
          onChangeText={this.onChangeInput}
          value={this.state.nama}
          namaState="nama"
        />
        <InputGrup
          label={'Content'}
          placeholder={'Tulis Content'}
          isTextArea={true}
          onChangeText={this.onChangeInput}
          value={this.state.alamat}
          namaState="alamat"
        />
        <BtnGrup label="SIMPAN" onPress={() => this.onSubmit()} />
       </View>
      
      
    );
  }
}

export default AddContact;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#98D4E1',
  },
});
