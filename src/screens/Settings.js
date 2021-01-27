import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Switch,
} from "react-native";

import { Ionicons, FontAwesome, Foundation } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default class Settings extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    sort: "distance",
    type: "all",
    price: "free",
    option_full: true,
    option_rated: true,
    option_free: false,
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1, paddingLeft: 15 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Campings")}
          >
            <Ionicons name="md-arrow-back" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Filter</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 15 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Campings")}
          >
            <Ionicons name="ios-search" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const {
      sort,
      type,
      price,
      option_full,
      option_rated,
      option_free,
    } = this.state;

    const activeType = (key) => type === key;

    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Sort By</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  sort === "distance" ? styles.active : null,
                ]}
                onPress={() => this.setState({ sort: "distance" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    sort === "distance" ? styles.activeText : null,
                  ]}
                >
                  Distance
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  sort === "ratings" ? styles.active : null,
                ]}
                onPress={() => this.setState({ sort: "ratings" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    sort === "ratings" ? styles.activeText : null,
                  ]}
                >
                  Ratings
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.last,
                  sort === "reviews" ? styles.active : null,
                ]}
                onPress={() => this.setState({ sort: "reviews" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    sort === "reviews" ? styles.activeText : null,
                  ]}
                >
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Type</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  activeType("all") ? styles.active : null,
                ]}
                onPress={() => this.setState({ type: "all" })}
              >
                <View style={{ flexDirection: "row" }}>
                  <Foundation
                    name="mountains"
                    size={24}
                    color={activeType("all") ? "#FFF" : "#FF7657"}
                  />
                  <FontAwesome
                    name="truck"
                    size={24}
                    color={activeType("all") ? "#FFF" : "#FFBA5A"}
                  />
                </View>
                <Text
                  style={[
                    styles.buttonText,
                    activeType("all") ? styles.activeText : null,
                  ]}
                >
                  All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  activeType("tenting") ? styles.active : null,
                ]}
                onPress={() => this.setState({ type: "tenting" })}
              >
                <Foundation
                  name="mountains"
                  size={24}
                  color={activeType("tenting") ? "#FFF" : "#FF7657"}
                />

                <Text
                  style={[
                    styles.buttonText,
                    activeType("tenting") ? styles.activeText : null,
                  ]}
                >
                  Tenting
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.last,
                  activeType("rv") ? styles.active : null,
                ]}
                onPress={() => this.setState({ type: "rv" })}
              >
                <FontAwesome
                  name="truck"
                  size={24}
                  color={activeType("rv") ? "#FFF" : "#FFBA5A"}
                />
                <Text
                  style={[
                    styles.buttonText,
                    activeType("rv") ? styles.activeText : null,
                  ]}
                >
                  RV Camping
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Price</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.first,
                  price === "free" ? styles.active : null,
                ]}
                onPress={() => this.setState({ price: "free" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    price === "free" ? styles.activeText : null,
                  ]}
                >
                  Free
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, price === "$" ? styles.active : null]}
                onPress={() => this.setState({ price: "$" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    price === "$" ? styles.activeText : null,
                  ]}
                >
                  $
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, price === "$$" ? styles.active : null]}
                onPress={() => this.setState({ price: "$$" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    price === "$$" ? styles.activeText : null,
                  ]}
                >
                  $$
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.last,
                  price === "$$$" ? styles.active : null,
                ]}
                onPress={() => this.setState({ price: "$$$" })}
              >
                <Text
                  style={[
                    styles.buttonText,
                    price === "$$$" ? styles.activeText : null,
                  ]}
                >
                  $$$
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>More Options</Text>
            </View>
            <View>
              <View style={styles.options}>
                <Text style={{ fontWeight: "500" }}>
                  Show spot that are full
                </Text>
                <Switch
                  value={option_full}
                  trackColor={{ true: "#FF7657", false: "#D3D3D3" }}
                  thumbColor="white"
                  onValueChange={() => {
                    this.setState({ option_full: !option_full });
                  }}
                />
              </View>

              <View style={styles.options}>
                <Text>Show only highly rated spots</Text>
                <Switch
                  value={option_rated}
                  trackColor={{ true: "#FF7657", false: "#D3D3D3" }}
                  thumbColor="white"
                  onValueChange={() => {
                    this.setState({ option_rated: !option_rated });
                  }}
                />
              </View>

              <View style={styles.options}>
                <Text>Show only Free spots</Text>
                <Switch
                  value={option_free}
                  trackColor={{ true: "#FF7657", false: "#D3D3D3" }}
                  thumbColor="white"
                  onValueChange={() => {
                    this.setState({ option_free: !option_free });
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    height: height * 0.1,
    width: width,
    marginTop: 50,
  },
  section: {
    flexDirection: "column",
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: "#A5A5A5",
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 18,
    marginVertical: 14,
  },
  group: {
    flexDirection: "row",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#FF7657",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    padding: 14,
    alignContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#FF7657",
  },
  activeText: {
    color: "white",
  },
  first: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  last: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
  },
});
