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
    height: 280,
    marginTop: 45,
    marginBottom: 35,
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
    fontWeight: '700',
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },
})

export default styles
