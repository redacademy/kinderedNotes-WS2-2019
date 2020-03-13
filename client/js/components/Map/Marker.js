import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import MapboxGL from '@react-native-mapbox-gl/maps'
import {GET_CITY_COORDS} from '../../context'

const Marker = ({city}) => {
  const {data} = useQuery(GET_CITY_COORDS, {
    variables: {city},
  })

  // TODO: handle error

  if (!data || !data.getCityCoords) {
    return null
  }

  const {lat, lng} = data.getCityCoords
  return (
    <MapboxGL.MarkerView
      coordinate={[Number(lng), Number(lat)]}
      x={0}
      y={0}
    />
  )
}

export default Marker
