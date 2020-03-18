import {StyleSheet, Dimensions} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  mapContainer: {
    height: Dimensions.get('window').height + 160,
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  map: {
    flex: 1,
  },
})

export default styles
