import React, {Component} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {BtnGrup, InputGrup} from '../../components';
import FIREBASE from '../../config/firebase';

export class EditContact extends Component {
  constructor(props) {
    super();

    this.state = {
      Judul: '',
      Tanggal: '',
      Content: '',
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Note/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contentItem = {...data};

        this.setState({
          Judul: contentItem.judul,
          Tanggal: contentItem.tanggal,
          Content: contentItem.content,
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
    if (this.state.Judul && this.state.Tanggal && this.state.Content) {
      // update pada tabel di kolom tertentu
      const notereferensi = FIREBASE.database().ref(
        'Note/' + this.props.route.params.id,
      );
      // buat daftar kolom yang akan di update
      const note = {
        judul: this.state.Judul,
        tanggal: this.state.Tanggal,
        content: this.state.Content,
      };
      // buat method untuk update catatan
      notereferensi
        .update(note)
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
          value={this.state.Judul}
          namaState="Judul"
        />
        <InputGrup
          label={'Tanggal'}
          placeholder={'Tulis Tanggal'}
          onChangeText={this.onChangeInput}
          value={this.state.Tanggal}
          namaState="Tanggal"
        />
        <InputGrup
          label={'Content'}
          placeholder={'Tulis Content'}
          isTextArea={true}
          onChangeText={this.onChangeInput}
          value={this.state.Content}
          namaState="Content"
        />
        <BtnGrup label="UPDATE" onPress={() => this.onSubmit()} />
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
