import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  receivedContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    width: 300,
    height: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  receivedNote: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#c7c7c7',
    shadowOpacity: 1.0,
    elevation: 5,
    width: 300,
    height: 345,
    marginTop: 45,
    marginBottom: 35,
  },
  receivedNoteBLUE: {
    borderColor: COLORS.ACCENT_BLUE,
    borderWidth: 1.5,
  },
  receivedNoteGREEN: {
    borderColor: COLORS.ACCENT_GREEN,
    borderWidth: 1.5,
  },
  receivedNoteFillBLUE: {
    backgroundColor: COLORS.ACCENT_BLUE,
    borderColor: COLORS.ACCENT_BLUE,
  },
  receivedNoteFillGREEN: {
    backgroundColor: COLORS.ACCENT_GREEN,
    borderColor: COLORS.ACCENT_GREEN,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    width: 210,
    height: 50,
    backgroundColor: '#48a9c5',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
  },
  response: {
    marginVertical: 20,
  },
  replyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#48a9c5',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    alignSelf: 'flex-end',
  },
  reply: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },
})

export default styles
