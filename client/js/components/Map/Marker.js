import React from 'react'
import {Image, View} from 'react-native'
import {useQuery} from '@apollo/react-hooks'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {GET_CITY_COORDS} from '../../context'
import AVATARS from '../AvatarSelect/avatars'
import {COLORS} from '../styles'

const Marker = ({city, avatar}) => {
  const {data} = useQuery(GET_CITY_COORDS, {
    variables: {city},
  })

  // TODO: handle error

  if (!data || !data.getCityCoords) {
    return null
  }

  const {lat, lng} = data.getCityCoords
  return (
    <MapboxGL.ShapeSource
      id="markersShape"
      shape={{
        type: 'Feature',
        properties: {
          id: 'mapMarker',
        },
        geometry: {
          type: 'Point',
          coordinates: [Number(lng), Number(lat)],
        },
      }}
    >
      <MapboxGL.SymbolLayer
        id="mapMarker"
        sourceID="markersShape"
        style={{
          iconSize: 1,
          iconAllowOverlap: true,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
          }}
        >
          <Image
            pointerEvents="none"
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: COLORS.LIGHT_BLUE,
            }}
            source={AVATARS[avatar]}
          />
        </View>
      </MapboxGL.SymbolLayer>
    </MapboxGL.ShapeSource>
  )
}

export default Marker
