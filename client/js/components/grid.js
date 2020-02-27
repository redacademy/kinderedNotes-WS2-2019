import React, {Image} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import SquareGrid from 'react-native-square-grid'
import Message_Note from '../../assets/icons/Message_Note.svg'

var NUMBERS = ['one', 'two', 'three', 'four', 'five', 'six']

var styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
  },
})

export default function Grid(props) {
  return (
    <SquareGrid
      rows={2}
      columns={3}
      items={NUMBERS}
      renderItem={renderItem}
    />
  )
}
function renderItem(item) {
  return (
    <View style={styles.item}>
      <View style={styles.content}>
        <Text style={styles.text}>{item}</Text>
        {/* <Message_Note /> */}
      </View>
    </View>
  )
}
