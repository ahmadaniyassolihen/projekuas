import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {BtnGrup, InputGrup} from '../../components';
import FIREBASE from '../../config/firebase';


export class AddContact extends Component {
  constructor(props) {
    super();

    this.state = {
      Judul: '',
      Tanggal: '',
      Content: '',
    };
  }

  onChangeInput = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    // cek apakah data sudah ada di state
    if (this.state.Judul && this.state.Tanggal && this.state.Content) {
      // buat tabel
      const notereferensi = FIREBASE.database().ref('Note');
      // buat daftar kolom dan isi dengan nama kolom di state
      const note = {
        judul: this.state.Judul,
        tanggal: this.state.Tanggal,
        content: this.state.Content,
      };
      // buat method untuk tambah kontak
      notereferensi
        .push(note)
        .then(data => {
          Alert.alert('Sukses', 'Catatan berhasil disimpan');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('Error : ', error);
        });
    } else {
      Alert.alert('Error', 'Judul, Tanggal dan Content wajib di isi');
    }
  };
  render() {
    return (
         <View style={styles.wrapper}>
          
        <InputGrup
          label={'Judul'}
          onChangeText={this.onChangeInput}
          value={this.state.Judul}
          namaState="Judul"
        />
        <InputGrup
          label={'Tanggal'}
          onChangeText={this.onChangeInput}
          value={this.state.Tanggal}
          namaState="Tanggal"
        />
        <InputGrup
          label={'Content'}
          isTextArea={true}
          onChangeText={this.onChangeInput}
          value={this.state.Content}
          namaState="Content"
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
  judul:{
    backgroundColor:'black',
    height:60,
  }
});
