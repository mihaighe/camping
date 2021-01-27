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

import {
  Ionicons,
  FontAwesome,
  Foundation,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { Marker } = MapView;
const { width, height } = Dimensions.get("screen");

const campings = [
  {
    id: 1,
    type: "tent",
    name: "Camping Paradise",
    description: "Popular sport for trekkers",
    stars: 4.9,
    distance: 2.3,
    price: "Free",
    latlng: {
      latitude: 44.15958062143673,
      longitude: 24.156018573320032,
    },
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
  },

  {
    id: 2,
    type: "rv",
    name: "Lake Florida",
    description: "This is for all sunset lovers",
    stars: 4.7,
    distance: 3.1,
    price: "Free",
    latlng: {
      latitude: 44.15358062143673,
      longitude: 24.163018573320032,
    },
    image:
      "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=130",
  },
  {
    id: 3,
    type: "rv",
    name: "Lake Lungeni",
    description: "Popular sport for trekkers",
    stars: 4.9,
    distance: 2.1,
    price: "Free",
    latlng: {
      latitude: 44.16158062143673,
      longitude: 24.163018573320032,
    },
    image:
      "https://images.unsplash.com/photo-1563198804-aeb88e686935?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1945&q=80",
  },
  {
    id: 4,
    type: "tent",
    name: "Lake Gubaucea",
    description: "This is for all fish lovers",
    stars: 4.3,
    distance: 5.5,
    price: "Free",
    latlng: {
      latitude: 44.16458062143673,
      longitude: 24.165018573320032,
    },
    image:
      "https://images.unsplash.com/photo-1516361728389-998730856765?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 5,
    type: "rv",
    name: "Lake Grozavesti",
    description: "This is exotic",
    stars: 4.7,
    distance: 3.1,
    price: "Free",
    latlng: {
      latitude: 44.16478062143673,
      longitude: 24.166018573320032,
    },
    image:
      "https://images.unsplash.com/photo-1548109465-dbf58cfd298f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
  },
  {
    id: 6,
    type: "tent",
    name: "Ramdom Lake",
    description: "This is urban area",
    stars: 4.2,
    distance: 4.1,
    price: "Free",
    latlng: {
      latitude: 44.16278062143673,
      longitude: 24.166018573320032,
    },
    image:
      "https://images.unsplash.com/photo-1605032659978-a5bd04094a16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
];

export default class Campings extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    active: "all",
    campings: campings,
  };

  handleTab = (tabKey) => {
    let newCampings = campings;

    if (tabKey !== "all") {
      newCampings = campings.filter((camping) => camping.type === tabKey);
    }

    this.setState({ active: tabKey, campings: newCampings });
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
                Csokanest Islands()
              </Text>
            </View>
          </View>
          <View style={{ alignItems: "baseline", alignItems: "flex-end" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Settings")}
            >
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
            onPress={() => this.handleTab("all")}
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
            onPress={() => this.handleTab("tent")}
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
            onPress={() => this.handleTab("rv")}
          >
            RV Camping
          </Text>
        </View>
      </View>
    );
  }

  renderMap() {
    const campingMarker = ({ type }) => (
      <View style={[styles.marker, styles[`${type}Marker`]]}>
        {type === "rv" ? (
          <FontAwesome name="truck" size={18} color="#FFF" />
        ) : (
          <Foundation name="mountains" size={18} color="#FFF" />
        )}
      </View>
    );

    return (
      <View>
        <MapView
          showsMyLocationButton
          style={styles.map}
          initialRegion={{
            latitude: 44.15958062143673,
            longitude: 24.161018573320032,
            latitudeDelta: 0.019,
            longitudeDelta: 0.019,
          }}
        >
          {this.state.campings.map((marker) => (
            <Marker key={`marker-${marker.id}`} coordinate={marker.latlng}>
              {campingMarker(marker)}
            </Marker>
          ))}
        </MapView>
      </View>
    );
  }

  renderList() {
    return this.state.campings.map((camping) => {
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
  marker: {
    width: 32,
    height: 32,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFF",
  },
  rvMarker: {
    backgroundColor: "#FFBA5A",
  },
  tentMarker: {
    backgroundColor: "#FF7657",
  },
  tabs: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  tab: {
    marginHorizontal: 10,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
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
