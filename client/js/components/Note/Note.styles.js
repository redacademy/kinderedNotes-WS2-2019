import {StyleSheet} from 'react-native'

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
    backgroundColor: '#FFF',
    borderColor: '#48A9C5',
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
  },
})

export default styles
