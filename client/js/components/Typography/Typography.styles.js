import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  header: {
    color: '#3e3e3e',
    fontWeight: '500',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    alignSelf: 'center',
    paddingTop: 5,
  },
  authText: {
    color: '#636e74',
    fontWeight: '500',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
  },
  title: {
    color: COLORS.TEXT_PRIMARY.INVERT,
    fontWeight: '700',
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
  },
})

export default styles
