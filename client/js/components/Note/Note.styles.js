import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  noteContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#c7c7c7',
    shadowOpacity: 1.0,
    elevation: 5,
    width: 300,
    height: 250,
    marginTop: 45,
    marginBottom: 35,
    backgroundColor: '#FFF',
    borderColor: COLORS.ACCENT_BLUE,
  },
  noteContainerGREEN: {
    borderColor: COLORS.ACCENT_GREEN,
  },
  noteContainerBLUE: {
    borderColor: COLORS.ACCENT_BLUE,
  },
  noteContainerFillGREEN: {
    backgroundColor: COLORS.ACCENT_GREEN,
    borderColor: COLORS.ACCENT_GREEN,
  },
  noteContainerFillBLUE: {
    backgroundColor: COLORS.ACCENT_BLUE,
    borderColor: COLORS.ACCENT_BLUE,
  },
  noteOptions: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default styles
