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
import { ImagePicker } from "expo";

import firebase from "../../config/firebase";
const database = firebase.database().ref();

class AddProduct extends Component {
  constructor() {
    super();

    this.state = {
      isTimePickerVisible: false
    };
  }

  static navigationOptions = {
    header: null
  };

  imageSelect = async pic => {
    // let result = await ImagePicker.launchCameraAsync()
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: 'Images',
        quality: 1,
        aspect: [16, 9]
    });

    if (!result.cancelled) {
        console.log(result)
      await this.setState({
        [pic]: result.uri,
        pictures: {
          [pic]: result.uri
        }
      });
    }
  };

  next = async () => {
    let productName = this.state.productName;
    let image = this.state.pic1

    if (productName) {
      let storageRef = firebase.storage().ref(image);

      storageRef.child("Products").child("cigarettes").put()
        .then(snapshot => {
          return snapshot.ref.getDownloadURL();
        })
        .then(downloadURL => {
          database.child('Products').child('cigarettes').update(
            {
                productName: productName,
                picture :  downloadURL
            },
            () => {
            }
          );
          return downloadURL;
        })
        .catch(error => {
          alert(error.message);
        });
      
    } else {
      alert("Please fill all the required information.");
    }
  };

  render() {
    const { pic1 } = this.state;
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
              <TouchableHighlight onPress={() => this.imageSelect("pic1")}>
                <Thumbnail
                  large
                  source={
                    pic1
                      ? { uri: pic1 }
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
