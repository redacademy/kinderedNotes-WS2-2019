import React from 'react'
import {View, Text} from 'react-native'
import {useTags} from '../../hooks'
import styles from './TagsList.styles'

const TagsList = () => {
  const {tags} = useTags()

  return (
    <View style={styles.tagsContainer}>
      {tags &&
        tags.map(tag => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
    </View>
  )
}

export default TagsList
