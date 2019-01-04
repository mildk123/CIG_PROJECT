import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Image } from "react-native";
import { Dimensions, ScrollView } from "react-native";

import Header from "../../Helper/Header";

import Carousel from "react-native-snap-carousel";
import {  Card, CardItem, Text, Body } from "native-base";

class Homescreen extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          title: "heelo",
          thumbnail: require("../../assets/images/bnh1.jpg")
        },
        {
          title: "badshah",
          thumbnail: require("../../assets/images/bnh2.jpg")
        },
        {
          title: "khan",
          thumbnail: require("../../assets/images/bnh1.jpg")
        }
      ]
    };
  }

  static navigationOptions = {
    header: null
  };

  _renderItem({ item, index }, parallaxProps) {
    return (
      <Card style={styles.cardMain}>
        <CardItem cardBody style={styles.cardBody} bordered={false}>
          <Body>
            <Image source={item.thumbnail} style={styles.image} />
          </Body>
        </CardItem>
        <CardItem footer style={styles.cardFooter}>
          <Text style={styles.title}>{item.title}</Text>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          headerColor="#C00000"
          icon={"menu"}
          title={"Shop"}
          hasTabs={false}
          searchBtn={true}
          favBtn={false}
          threeDots={false}
          {...this.props}
        />

        <View
        >
          <Carousel
            layout={"default"}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={styles.sliderWidth.width}
            itemWidth={styles.itemWidth.width}
            hasParallaxImages={true}
            enableSnap={true}
            firstItem={0}
            useScrollView={true}
            vertical={false}
          />
          <Carousel
            layout={"default"}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={styles.sliderWidth.width}
            itemWidth={styles.itemWidth.width}
            hasParallaxImages={true}
            enableSnap={true}
            firstItem={0}
            useScrollView={true}
            vertical={false}
          />
          <Carousel
            layout={"default"}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={styles.sliderWidth.width}
            itemWidth={styles.itemWidth.width}
            hasParallaxImages={true}
            enableSnap={true}
            firstItem={0}
            useScrollView={true}
            vertical={false}
          />
          <Carousel
            layout={"default"}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={styles.sliderWidth.width}
            itemWidth={styles.itemWidth.width}
            hasParallaxImages={true}
            enableSnap={true}
            firstItem={0}
            useScrollView={true}
            vertical={false}
          />
        </View>
      </ScrollView>
    );
  }
}

export default (HomeStackNavigator = createStackNavigator({
  Homescreen: Homescreen
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  sliderWidth: {
    width: Dimensions.get("window").width
  },
  itemWidth: {
    width: Dimensions.get("window").width - 120
  },

  cardMain: {
    borderRadius: 16
  },
  cardBody: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 27,
    height: Dimensions.get("window").height * 0.24
  },
  image: {
    width: 250,
    height: Dimensions.get("window").height * 0.23
  },

  cardFooter: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: '#C00000',
  },

  title: {
    margin: 5,
    color : 'white',
    fontSize: Dimensions.get("window").width * 0.05
  }
});
