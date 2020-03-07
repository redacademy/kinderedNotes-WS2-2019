import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  receivedContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  container: {
    width: 300,
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
    backgroundColor: '#48a9c5',
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
  font: {
    color: '#fff',
    fontWeight: '900',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  bookmark: {
    position: 'absolute',
    top: 25,
    right: 25,
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
    marginTop: 30,
  },
  reply: {
    color: '#fff',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
  },
})

export default styles
