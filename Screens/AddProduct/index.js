import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";

import {Container,Item,Input,Icon,Button,Thumbnail,Text } from "native-base";

import Header from "../../Helper/Header";

// import { ImagePicker } from "expo";

import {ImagePicker} from "react-native-image-crop-picker";

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

  selectImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
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
