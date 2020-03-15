import React, {useEffect} from 'react'
import {View} from 'react-native'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {MAPBOX_KEY} from 'react-native-dotenv'
import {useActiveNote} from '../../hooks'
import Marker from './Marker'
import styles from './Map.styles'

MapboxGL.setAccessToken(MAPBOX_KEY)

const Map = () => {
  const {activeNote} = useActiveNote()
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={
            'mapbox://styles/shwilliam/ck7oe04v20veb1io9dapv39a7'
          }
        >
          <MapboxGL.Camera zoomLevel={1} />
          {activeNote.viewers.map((viewer, i) => (
            <Marker
              key={`${viewer.city}_${i}`}
              city={viewer.city}
              avatar={viewer.avatar}
            />
          ))}
        </MapboxGL.MapView>
      </View>
    </View>
  )
}

export default Map
