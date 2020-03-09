import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    height: '100%',
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
    fontSize: 11,
    fontWeight: '600',
    paddingHorizontal: 20,
    textAlign: 'center',
    overflow: 'hidden', // TODO: limit length and add ellipsis
  },
})

export default styles
