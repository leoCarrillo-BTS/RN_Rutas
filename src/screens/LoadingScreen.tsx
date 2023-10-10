import React from 'react'
import { ActivityIndicator, View, Text } from 'react-native';

export const LoadingScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <ActivityIndicator
                size={44}
                color={'black'}
            />

        </View >
    )
}
