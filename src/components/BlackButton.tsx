import React from 'react'
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'

interface Props {
    title: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
}


export const BlackButton = ({ title, onPress, style = {} }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            style={{
                ...style as any,
                ...localStyles.blackButton
            }}
        >
            <Text style={localStyles.buttonText}>
                title
            </Text>
        </TouchableOpacity>
    )
}

const localStyles = StyleSheet.create({
    blackButton: {
        height: 44,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
});
