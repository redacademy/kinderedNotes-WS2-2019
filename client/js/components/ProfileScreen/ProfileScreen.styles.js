import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    paddingTop: 70,
  },
  container: {
    width: 300,
    alignSelf: 'center',
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#ebf5f8',
  },
  imageContainer: {
    alignSelf: 'center',
  },
  blueText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#47b2d0',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
})
export default styles
