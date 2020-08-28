import React, { Component } from "react";
import { View, Animated, StyleSheet, Image, Text, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window')
export default class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: this.props.route.params.item,
      startView: new Animated.ValueXY(0, 0),
      endView: new Animated.ValueXY(0, 0),
      endValue: height / 2 - 230,
      endValue1: -height / 5,
      duration: 500,
    };
  }

  componentDidMount() {
    
    Animated.timing(this.state.startView, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    Animated.timing(this.state.endView, {
      toValue: this.state.endValue1,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ zIndex: 1 }}>
          <Animated.View
            style={[
              styles.square,
              {
                transform: [
                  {
                    translateY: this.state.startView.y,
                  },
                ],
              },
            ]}
          >
            <Image
              height={50}
              width={50}
              style={{
                resizeMode: 'cover',
                justifyContent: 'center', width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: "#eeeaea"
              }}
              source={require("../assets/profile.jpeg")}
            />
          </Animated.View>
        </View>
        <View>
          <Animated.View
            style={[
              styles.downView,
              {
                transform: [
                  {
                    translateY: this.state.endView.y,
                  },
                ],
              },
            ]}
          >
            <View
              style={{
                paddingTop: 50,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 30 }}>Name:{this.state.userDetails.firstname}</Text>

              <Text style={{ fontWeight: "700" }}>Comapny:{this.state.userDetails.company}</Text>
              <Text style={styles.profileTxt}>{this.state.userDetails.gender}</Text>
              <Text style={styles.profileTxt}>{this.state.userDetails.company}</Text>
              <Text style={styles.profileTxt}>{this.state.userDetails.firstname}</Text>
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eeeaea",
  },
  square: {
    borderRadius: 50,
  },
  downView: {
    height: 200,
    width: width / 1.3,
    backgroundColor: "white",
    borderRadius: 10,
  },
  profileTxt: {
    fontWeight: "700"
  }
});