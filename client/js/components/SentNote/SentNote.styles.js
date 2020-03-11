import {StyleSheet} from 'react-native'

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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 5},
    shadowColor: '#c7c7c7',
    shadowOpacity: 1.0,
    elevation: 5,
    width: 300,
    height: 280,
    marginTop: 45,
    marginBottom: 35,
    backgroundColor: '#48a9c5',
  },
  messageContainer: {
    marginHorizontal: 45,
    justifyContent: 'center',
    height: 150,
    marginBottom: 50,
  },
  message: {
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
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
    color: '#48a9c5',
    fontWeight: '700',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },
  notesContainer: {
    marginTop: 20,
  },
})

export default styles
