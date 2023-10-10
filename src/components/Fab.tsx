import React from 'react'
import { StyleProp, View, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';
import { BlackButton } from './BlackButton';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
}

export const Fab = ({ iconName, onPress, style }: Props) => {
    return (
        <View
            style={{
                ...style as any
            }}
        >

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={localStyles.blackButton}
            >

                <Icon
                    name={iconName}
                    color={'white'}
                    size={32}
                />

            </TouchableOpacity>

        </View>
    )
}

const localStyles = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 52,
        width: 52,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 6,
    }
});