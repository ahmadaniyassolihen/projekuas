import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FIREBASE from '../../config/firebase';

export class DetailContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kontaks: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Kontak/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let kontakItem = {...data};

        this.setState({
          kontaks: kontakItem,
        });
      });
  }

  render() {
    const {kontaks} = this.state;
    return (
      <View style={styles.wrapper}>
        <Text>Judul :</Text>
        <Text style={styles.text}>{kontaks.nama}</Text>
        <Text>Content :</Text>
        <Text style={styles.text}>{kontaks.alamat}</Text>
      </View>
    );
  }
}

export default DetailContact;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    margin: 30,
    backgroundColor: '#ededed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
