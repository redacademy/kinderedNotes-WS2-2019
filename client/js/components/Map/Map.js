import React, {useEffect} from 'react'
import {View} from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import styles from './Map.styles'
import {MAPBOX_KEY} from 'react-native-dotenv'

MapboxGL.setAccessToken(MAPBOX_KEY)

const Map = () => {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  )
}

export default Map
