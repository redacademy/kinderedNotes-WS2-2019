import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
  },
  floatingContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.ACCENT_BLUE,
  },
  content: {
    flex: 1,
    paddingBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginVertical: 35,
  },
  wave: {
    opacity: 0.7,
    marginHorizontal: -50,
  },
})

export default styles
