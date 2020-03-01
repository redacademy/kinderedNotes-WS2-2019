import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tag: {
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 7.5,
    paddingVertical: 10,
    width: '48.25%', // HACK: fix width(?)
    marginVertical: 6.5,
    alignItems: 'center',
  },
  tagText: {
    color: COLORS.BLUE,
  },
})

export default styles
