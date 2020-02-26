import React, {useState} from 'react'
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native'
import {Input} from '../../components'

const Note = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Input />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Note
