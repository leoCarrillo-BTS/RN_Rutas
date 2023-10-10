import React from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps'
import { CustomMap } from '../components/CustomMap'

export const MapScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomMap />
        </View>
    )
}
