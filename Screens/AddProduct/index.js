import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import {
  Container,
  Item,
  Input,
  Icon,
  Button,
  Thumbnail,
  Text
} from "native-base";

import Header from "../../Helper/Header";

import { Constants, ImagePicker, Permissions } from 'expo';

import firebase from "../../config/firebase";
const database = firebase.database().ref();

class AddProduct extends Component {
  constructor() {
    super();
    this.state = { picture: null };
  }
  static navigationOptions = {
    header: null
  };
  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.uploadImage(result.uri);
    }
  };

  uploadImage = async uri => {
    const blob = await new Promise((resolve, reject) => {
      
      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        resolve(xhr.response);
      };

      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };

      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send(null);
    });
  
    // const ref = firebase.storage().ref().child('Products');
    // const snapshot = await ref.put(blob);
    console.log(123)
    await firebase.storage().ref().child('Products').put(blob)
  
    blob.close();
  
    return await snapshot.ref.getDownloadURL();
  };

  render() {
    const { picture } = this.state;
    return (
      <Container>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"Add Products"}
          hasTabs={"false"}
          searchBtn={false}
          favBtn={false}
          threeDots={false}
          {...this.props}
          goBack={false}
        />

        <View style={styles.container}>
          <Item>
            <Icon active name="home" />
            <Input
              placeholder="Product Name"
              onChangeText={text => this.setState({ productName: text })}
            />
          </Item>

          <View>
            <Text style={{ margin: 10, fontSize: 22, fontStyle: "italic" }}>
              Picture:
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <TouchableHighlight onPress={this.selectImage}>
                <Thumbnail
                  large
                  source={
                    picture
                      ? { uri: picture }
                      : require("../../assets/placeholder/person_place.png")
                  }
                />
              </TouchableHighlight>
            </View>

            <View style={{ padding: 120 }}>
              <Button
                large
                onPress={this.next}
                style={{
                  alignSelf: "center",
                  borderRadius: 24,
                  width: 124,
                  justifyContent: "center"
                }}
              >
                <Text>Next</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default AddProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#ffffff"
  }
});
