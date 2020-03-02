import React from 'react'
import {View, Text, FlatList} from 'react-native'
import NotesGridItem from './NotesGridItem'
import styles from './NotesGrid.styles'

const NotesGrid = ({data, loading, error, Icon}) => {
  if (error) {
    return (
      <Text>
        Something went wrong. Please restart the App to try again.
      </Text>
    )
  }

  if (loading) {
    return <Text>Loading notes...</Text>
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <NotesGridItem>
            {Icon ? (
              <Icon width="95" />
            ) : (
              <Text style={{...styles.itemText, color: item.color}}>
                {item.message}
              </Text>
            )}
          </NotesGridItem>
        )}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default NotesGrid
