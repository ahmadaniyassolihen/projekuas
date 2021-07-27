import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {BtnGrup, InputGrup} from '../../components';
import FIREBASE from '../../config/firebase';

export class EditContact extends Component {
  constructor(props) {
    super();

    this.state = {
      nama: '',
      alamat: '',
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Kontak/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          nama: kontakItem.nama,
          alamat: kontakItem.alamat,
        });
      });
  }

  onChangeInput = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };

  onSubmit = () => {
    // cek apakah data sudah ada di state
    if (this.state.nama && this.state.alamat) {
      // update pada tabel di kolom tertentu
      const tabelKontak = FIREBASE.database().ref(
        'Kontak/' + this.props.route.params.id,
      );
      // buat daftar kolom yang akan di update
      const kontak = {
        nama: this.state.nama,
        alamat: this.state.alamat,
      };
      // buat method untuk update catatan
      tabelKontak
        .update(kontak)
        .then(data => {
          Alert.alert('Sukses', 'Catatan berhasil di update');
          this.props.navigation.replace('Home');
        })
        .catch(error => {
          console.log('Error : ', error);
        });
    } else {
      Alert.alert('Error', 'Nama, Content wajib di isi');
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
        <BtnGrup label="Update" onPress={() => this.onSubmit()} />
      </View>
    );
  }
}

export default EditContact;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#98D4E1',
  },
});
