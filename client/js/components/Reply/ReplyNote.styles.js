import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  replyContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  imageContainer: {
    padding: 10,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#e6e6e6',
  },
  image: {
    height: 50,
    width: 50,
  },
  replyNote: {
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 20,
  },
  nameReply: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 16,
    color: '#272727',
    lineHeight: 22,
  },
  messageReply: {
    color: 'gray',
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#555555',
    lineHeight: 19,
  },
})

export default styles
