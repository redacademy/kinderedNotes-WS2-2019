import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 132,
    maxWidth: '32.8%',
  },
  itemText: {
    fontSize: 13,
    fontWeight: '600',
    paddingHorizontal: 15,
    textAlign: 'center',
    overflow: 'hidden', // TODO: limit length and add ellipsis
  },
})

export default styles
