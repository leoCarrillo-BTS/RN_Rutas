import React, { useContext } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { PERMISSIONS, PermissionStatus, check, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'
import { BlackButton } from '../components/BlackButton'

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View
            style={localStyles.conatiner}
        >
            <Text style={localStyles.title}>
                Es necesario permitir el GPS para usar esta aplicación
            </Text>

            <BlackButton
                title='Permiso'
                onPress={askLocationPermission}
            />

            <Text>
                {JSON.stringify(permissions, null, 5)}
            </Text>
        </View>
    )
}

const localStyles = StyleSheet.create({

    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: 200,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16
    }
});