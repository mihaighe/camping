import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen')


export default class Campings extends React.Component {
    static navigationOptions = {
        headerShown: false,
    }

    state = {
        active: 'all'
    }

    renderHeader() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{ flex: 2, flexDirection: 'row', }}>
                        <View style={styles.settings}>
                            <View style={styles.location}>
                                <FontAwesome name="location-arrow" size={14} color="white" />
                            </View>
                        </View>
                        <View style={styles.options}>
                            <Text style={{ fontSize: 12, color: 'grey', marginBottom: 5 }}>
                                Detected Location
                        </Text>
                            <Text style={{ fontSize: 14, fontWeight: '300' }}>
                                Northern Islands()
                        </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'baseline', alignItems: 'flex-end' }}>
                        <Ionicons name='ios-settings' size={24} color="black" />
                    </View>
                </View>
                {this.renderTabs()}
            </View>
        )
    }

    renderTabs() {
        // this.state = { active: 'all' }

        // active = this.state.active

        const { active } = this.state

        return (
            <View style={styles.tabs}>
                <View style={[styles.tab, active === 'all' ? styles.activeTab : null]}>
                    <Text style={[styles.tabTitle, active === 'all' ? styles.activeTabTitle : null]}>All Spots</Text>
                </View>
                <View style={[styles.tab, active === 'tent' ? styles.activeTab : null]}>
                    <Text style={[styles.tabTitle, active === 'tent' ? styles.activeTabTitle : null]}>Tenting</Text>
                </View>
                <View style={[styles.tab, active === 'rv' ? styles.activeTab : null]}>
                    <Text style={[styles.tabTitle, active === 'rv' ? styles.activeTabTitle : null]}>RV Camping</Text>
                </View>
            </View>
        )
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
        )
    }

    renderList() {

    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderHeader()}
                    {this.renderMap()}
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.15,
        paddingHorizontal: 14,
    },
    map: {
        width: width,
        height: height * 0.5,
    },
    location: {
        height: 24,
        width: 24,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    tabs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: height * 0.05,
    },
    tab: {
        paddingHorizontal: 14,
        marginHorizontal: 10,
    },
    tabTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 16
    },
    activeTab: {
        borderBottomColor: 'orange',
        borderBottomWidth: 3,
    },
    activeTabTitle: {
        color: 'orange',
    },
    settings: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    options: {
        flex: 1,
        paddingHorizontal: 14,
    },
});