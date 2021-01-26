import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { Ionicons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default class Settings extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Campings")}
          >
            <Ionicons name="md-arrow-back" size={30} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Filter</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Ionicons name="ios-search" size={30} />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Sort By</Text>
          <Text style={styles.title}>Type</Text>
          <Text style={styles.title}>Price</Text>
          <Text style={styles.title}>More Options</Text>
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
    marginTop: 35,

    alignItems: "center",
    borderColor: "black",
    borderWidth: 3,
  },
  title: {
    fontSize: 22,
  },
});
