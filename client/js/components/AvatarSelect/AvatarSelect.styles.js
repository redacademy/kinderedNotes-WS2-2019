import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -35,
    position: 'relative',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: COLORS.LIGHT_BLUE,
    position: 'relative',
    top: -35,
    left: -35,
  },
  avatarCurrent: {
    borderColor: 'transparent',
    width: 100,
    height: 100,
    position: 'relative',
    top: -4,
    left: 0,
  },
  avatarLarge: {
    width: 120,
    height: 120,
  },
  avatarButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  avatarContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  avatarCurrentContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.LIGHT_BLUE,
  },
  avatarCurrentContainerLarge: {
    width: 122,
    height: 122,
    borderRadius: 60,
    overflow: 'hidden',
  },
  avatarLabel: {
    fontSize: 10,
    textAlign: 'center',
    height: 15,
    position: 'relative',
    top: -13,
    backgroundColor: '#33333399',
    color: '#eee',
    paddingBottom: 20,
  },
})

export default styles
