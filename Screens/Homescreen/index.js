import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { StyleSheet, View, Text, Image } from "react-native";

import Header from "../../Helper/Header";

import Carousel, { ParallaxImage } from "react-native-snap-carousel";

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
      <View style={styles.slide}>
        {/* <Image source={item.thumbnail} /> */}
        <ParallaxImage
          source={require("../../assets/images/bnh1.jpg")}
          style={{ width: 100, height: 100 }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Image
          source={require("../../assets/images/bnh1.jpg")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
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
        <Text>Cigratte Brands</Text>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Carousel
            layout={"default"}
            ref={c => {
              this._carousel = c;
            }}
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
      </View>
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
    width: 450
  },
  itemWidth: {
    width: 320
  },

  slide: {
    borderRadius: 35,
    padding: 0,
    backgroundColor: "pink"
  },
  image: {
    width: 300,
    height: 300
  },

  title: {
    fontSize: 24
  }
});
