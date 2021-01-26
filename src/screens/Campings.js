import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";

import { Ionicons, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");

export default class Campings extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    active: "all",
  };

  renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <View style={styles.settings}>
              <View style={styles.location}>
                <FontAwesome name="location-arrow" size={20} color="white" />
              </View>
            </View>
            <View style={styles.options}>
              <Text style={{ fontSize: 14, color: "grey", marginBottom: 5 }}>
                Detected Location
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "300" }}>
                Northern Islands()
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "baseline", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
              <Ionicons name="ios-settings" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {this.renderTabs()}
      </View>
    );
  }

  renderTabs() {
    const { active } = this.state;

    return (
      <View style={styles.tabs}>
        <View style={[styles.tab, active === "all" ? styles.activeTab : null]}>
          <Text
            style={[
              styles.tabTitle,
              active === "all" ? styles.activeTabTitle : null,
            ]}
            onPress={() => this.setState({ active: "all" })}
          >
            All Spots
          </Text>
        </View>
        <View style={[styles.tab, active === "tent" ? styles.activeTab : null]}>
          <Text
            style={[
              styles.tabTitle,
              active === "tent" ? styles.activeTabTitle : null,
            ]}
            onPress={() => this.setState({ active: "tent" })}
          >
            Tenting
          </Text>
        </View>
        <View style={[styles.tab, active === "rv" ? styles.activeTab : null]}>
          <Text
            style={[
              styles.tabTitle,
              active === "rv" ? styles.activeTabTitle : null,
            ]}
            onPress={() => this.setState({ active: "rv" })}
          >
            RV Camping
          </Text>
        </View>
      </View>
    );
  }

  renderMap() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }

  renderList() {
    const campings = [
      {
        id: 1,
        name: "Camping Paradise",
        description: "Popular sport for trekkers",
        stars: 4.9,
        distance: 2.3,
        price: "Free",
        image:
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
      },
      {
        id: 2,
        name: "Lake Florida",
        description: "This is for all sunset lovers",
        stars: 4.7,
        distance: 3.1,
        price: "Free",
        image:
          "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
      },
      {
        id: 3,
        name: "Camping Paradise",
        description: "Popular sport for trekkers",
        stars: 4.9,
        distance: 2.3,
        price: "Free",
        image:
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
      },
      {
        id: 4,
        name: "Lake Florida",
        description: "This is for all sunset lovers",
        stars: 4.7,
        distance: 3.1,
        price: "Free",
        image:
          "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
      },
      {
        id: 5,
        name: "Lake Florida",
        description: "This is for all sunset lovers",
        stars: 4.7,
        distance: 3.1,
        price: "Free",
        image:
          "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
      },
      {
        id: 6,
        name: "Lake Florida",
        description: "This is for all sunset lovers",
        stars: 4.7,
        distance: 3.1,
        price: "Free",
        image:
          "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
      },
    ];

    return campings.map((camping) => {
      return (
        <View style={styles.camping} key={`camping-list-${camping.id}`}>
          <View style={{ flex: 1, overflow: "hidden" }}>
            <Image
              source={{
                uri: camping.image,
              }}
              style={styles.campingImage}
              key={`camping-${camping.id}`}
            />
          </View>
          <View style={styles.campingDetails}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {camping.name}
            </Text>
            <Text style={{ fontSize: 14, color: "grey", paddingVertical: 3 }}>
              {camping.description}
            </Text>
            <View style={{ flex: 1, flexDirection: "row", marginRight: 90 }}>
              <View style={styles.campingInfo}>
                <FontAwesome name="star" color="#FFBA5A" size={14} />
                <Text style={{ marginLeft: 4, color: "#FFBA5A", fontSize: 14 }}>
                  {camping.stars}
                </Text>
              </View>
              <View style={styles.campingInfo}>
                <FontAwesome name="location-arrow" color="#FF7757" size={14} />
                <Text style={{ marginLeft: 4, color: "#FF7757", fontSize: 14 }}>
                  {camping.distance}
                </Text>
              </View>
              <View style={styles.campingInfo}>
                <Ionicons name="md-pricetag" color="black" size={14} />
                <Text style={{ marginLeft: 4, color: "black", fontSize: 14 }}>
                  {camping.price}
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.2, justifyContent: "center" }}>
            <SimpleLineIcons
              name="options-vertical"
              color="#A5A5A5"
              size={24}
            />
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMap()}
        <ScrollView>{this.renderList()}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    height: height * 0.17,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    paddingTop: 25,
  },
  map: {
    width: width,
    height: height * 0.5,
  },
  location: {
    height: 30,
    width: 30,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF7657",
  },
  tabs: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  tab: {
    paddingHorizontal: 14,
    marginHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  activeTab: {
    borderBottomColor: "#FF7657",
    borderBottomWidth: 3,
  },
  activeTabTitle: {
    color: "#FF7657",
  },
  settings: {
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    flex: 1,
    paddingHorizontal: 14,
  },
  camping: {
    flex: 1,
    flexDirection: "row",
    borderBottomColor: "#A5A5A5",
    borderBottomWidth: 0.5,
    padding: 14,
  },
  campingInfo: {
    flex: 1,
    flexDirection: "row",
  },
  campingDetails: {
    flex: 2,
    paddingTop: 21,
    paddingLeft: 20,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  campingImage: {
    height: 110,
    width: 110,
    borderRadius: 20,
  },
});
