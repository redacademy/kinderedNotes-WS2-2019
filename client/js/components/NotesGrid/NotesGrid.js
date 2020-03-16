import React from 'react'
import {View, Text, FlatList, ActivityIndicator} from 'react-native'
import {useActiveNote} from '../../hooks'
import {COLORS} from '../styles'
import NotesGridItem from './NotesGridItem'
import styles from './NotesGrid.styles'

const NotesGrid = ({data, loading, error, Icon, onNotePress, bg}) => {
  const {setActiveNote} = useActiveNote()
  const handleNotePress = item => {
    setActiveNote(item)
    onNotePress(item.id)
  }

  if (error) {
    return (
      <Text>
        Something went wrong. Please restart the App to try again.
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <NotesGridItem
              color={bg || item.color}
              style={item.style}
              onPress={() => handleNotePress(item)}
            >
              {Icon ? (
                <Icon width="95" />
              ) : (
                <Text
                  style={{
                    ...styles.itemText,
                    fontFamily:
                      item.font === 'DEFAULT'
                        ? 'Nunito-SemiBold'
                        : item.font === 'HANDWRITTEN'
                        ? 'Playlist-Script'
                        : 'PermanentMarker',
                    color:
                      item.style === 'FILL'
                        ? COLORS.TEXT_PRIMARY.INVERT
                        : COLORS[`ACCENT_${item.color}`],
                  }}
                >
                  {item.message}
                </Text>
              )}
            </NotesGridItem>
          )}
          numColumns={3}
          keyExtractor={(_, i) => i.toString()}
        />
      )}
    </View>
  )
}

export default NotesGrid
