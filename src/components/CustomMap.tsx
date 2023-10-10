import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { useLocation } from '../hooks/useLocation'
import { LoadingScreen } from '../screens/LoadingScreen'
import { Fab } from './Fab'

export const CustomMap = () => {

    const [showPolyLine, setShowPolyLine] = useState(true)

    const {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUserLocation,
        stopFollowUserLocation,
        userLocation,
        routeLines
    } = useLocation()

    const mapViewRef = useRef<MapView>()
    const following = useRef<boolean>(true)

    useEffect(() => {

        followUserLocation()
        return () => {
            stopFollowUserLocation()
        }

    }, [])

    useEffect(() => {

        if (!following.current) return

        const { latitude, longitude } = userLocation

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        })

    }, [userLocation])

    const centerPosition = async () => {

        const location = await getCurrentLocation()

        mapViewRef.current?.animateCamera({
            center: location
        })

        following.current = true
    }

    if (!hasLocation) {
        return <LoadingScreen />
    }

    return (
        <>
            <MapView

                ref={(el) => mapViewRef.current = el!}

                // Provider google no se muestra en simulador
                // provider='google'
                showsUserLocation={true}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: initialPosition?.latitude ?? 37.78825,
                    longitude: initialPosition?.longitude ?? -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={
                    () => following.current = false
                }
            >

                {
                    showPolyLine && (
                        <Polyline
                            coordinates={routeLines}
                            strokeColor='red'
                            strokeWidth={3}
                        />
                    )
                }

                {/* <Marker
                    // image={
                    //     require('../assets/custom-marker.png')
                    // }
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                    title={'Hello'}
                    description={'There'}
                /> */}

            </MapView>

            <Fab
                iconName='compass-outline'
                onPress={
                    centerPosition
                }
                style={{
                    position: 'absolute',
                    bottom: 22,
                    right: 16,
                }}
            />

            <Fab
                iconName='brush-outline'
                onPress={
                    () => setShowPolyLine(!showPolyLine)
                }
                style={{
                    position: 'absolute',
                    bottom: 88,
                    right: 16,
                }}
            />
        </>
    )
}
