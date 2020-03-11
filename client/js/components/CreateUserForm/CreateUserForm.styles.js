import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  profileContainer: {
    height: '100%',
  },
  submitButton: {
    zIndex: 999,
    position: 'absolute',
    bottom: 0,
  },
  termsContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
  },
  termsHeader: {
    marginVertical: 23,
  },
  termsText: {
    lineHeight: 27,
    marginBottom: 100,
  },
})

export default styles
