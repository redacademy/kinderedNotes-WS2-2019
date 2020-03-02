import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  form: {
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  username: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  authButtons: {
    marginTop: 30,
  },
  usernameInput: {
    marginTop: 10,
    marginBottom: 5,
    height: 40,
    width: '75%',
  },
  image: {
    paddingTop: 6,
    paddingRight: 25,
  },
  authToggle: {
    backgroundColor: 'transparent',
    color: 'red',
  },
})

export default styles
