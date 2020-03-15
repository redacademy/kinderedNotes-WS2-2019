import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  sentContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    width: 300,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  sentNote: {
    position: 'relative',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#c7c7c7',
    shadowOpacity: 1.0,
    elevation: 5,
    width: 300,
    height: 280,
    marginTop: 45,
    marginBottom: 35,
  },
  messageContainer: {
    marginHorizontal: 45,
    justifyContent: 'center',
    height: 150,
    marginBottom: 50,
  },
  message: {
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: 210,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  font: {
    fontWeight: '700',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },
  notesContainer: {
    marginTop: 20,
  },
  sentNoteGREEN: {
    borderColor: COLORS.ACCENT_GREEN,
    borderWidth: 1.5,
  },
  sentNoteBLUE: {
    borderColor: COLORS.ACCENT_BLUE,
    borderWidth: 1.5,
  },
  sentNoteFillGREEN: {
    backgroundColor: COLORS.ACCENT_GREEN,
    borderColor: COLORS.ACCENT_GREEN,
  },
  sentNoteFillBLUE: {
    backgroundColor: COLORS.ACCENT_BLUE,
    borderColor: COLORS.ACCENT_BLUE,
  },
  buttonColorGREEN: {
    color: '#fff',
  },
  buttonColorBLUE: {
    color: '#fff',
  },
  buttonColorFilledGREEN: {
    color: COLORS.ACCENT_GREEN,
  },
  buttonColorFilledBLUE: {
    color: COLORS.ACCENT_BLUE,
  },
  buttonFillGREEN: {
    backgroundColor: COLORS.ACCENT_GREEN,
  },
  buttonFillBLUE: {
    backgroundColor: COLORS.ACCENT_BLUE,
  },
})

export default styles
