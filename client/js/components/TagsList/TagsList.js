import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './TagsList.styles'

const TagsList = ({tags, setTags}) => {
  const deleteTag = i => {
    const tagsCopy = [...tags]
    tagsCopy.splice(i, 1)
    setTags(tagsCopy)
  }

  return (
    <View style={styles.tagsContainer}>
      {tags &&
        tags.map((tag, i) => (
          <View key={tag} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>

            <TouchableOpacity
              style={styles.tagDelete}
              onPress={() => deleteTag(i)}
            >
              <Text style={styles.tagDeleteIcon}>✕</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  )
}

export default TagsList
