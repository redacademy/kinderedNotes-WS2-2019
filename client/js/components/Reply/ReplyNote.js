import React from 'react'
import {Text, Image, View} from 'react-native'
import {useAuth} from '../../hooks'
import AVATARS from '../AvatarSelect/avatars'
import {ScrollView} from 'react-native-gesture-handler'

const ReplyNote = ({
  avatarIndex = 4,
  name,
  message = 'boooo stupid note',
}) => {
  const {user} = useAuth()

  return (
    <ScrollView>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image
          style={{height: 80, width: 80}}
          source={AVATARS[avatarIndex]}
        />
        <View
          style={{
            flexDirection: 'column',
            paddingTop: 30,
            paddingLeft: 20,
          }}
        >
          <Text>TODO: name</Text>
          <Text style={{color: 'gray'}}>{message}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default ReplyNote
