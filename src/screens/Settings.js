import React from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'

import { MapView } from 'expo'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

const { width, height } = Dimensions.get('screen')


export default class Settings extends React.Component {
    static NavigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                  
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    map: {
        flex: 1,
    }
})