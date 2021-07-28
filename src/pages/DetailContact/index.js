import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FIREBASE from '../../config/firebase';

export class DetailContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: {},
    };
  }

  componentDidMount() {
    FIREBASE.database()
      .ref('Note/' + this.props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contentItem = {...data};

        this.setState({
          notes: contentItem,
        });
      });
  }

  render() {
    const {notes} = this.state;
    return (
       <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Judul :</Text>
        <Text style={styles.text}>{notes.judul}</Text>
        <Text>Tanggal :</Text>
        <Text style={styles.text}>{notes.tanggal}</Text>
        <Text>Content :</Text>
        <Text style={styles.text}>{notes.content}</Text>
      </View>
      </View>
    );
  }
}

export default DetailContact;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#98D4E1',
  },
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
