import {StyleSheet} from 'react-native'
import {COLORS} from '../styles'

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  tag: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 5,
    paddingVertical: 10,
    width: '48.25%', // HACK: fix width(?)
    marginVertical: 6.5,
    alignItems: 'center',
    overflow: 'hidden',
  },
  tagText: {
    width: '100%',
    textAlign: 'center',
    color: COLORS.BLUE,
    paddingHorizontal: 12,
    paddingRight: 32,
  },
  tagDelete: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: 12,
  },
  tagDeleteIcon: {
    color: COLORS.BLUE,
  },
})

export default styles
