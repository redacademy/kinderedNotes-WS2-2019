import {useState, useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const useAsyncStorage = key => {
  const [value, setValue] = useState()

  const set = async newValue => {
    try {
      const retval = await AsyncStorage.setItem(
        key,
        JSON.stringify(newValue),
      )
      setValue(retval)
      return retval
    } catch (e) {}
  }

  useEffect(() => {
    ;(async function getLocalValue() {
      try {
        const retval = await AsyncStorage.getItem(key)
        setValue(JSON.parse(retval))
      } catch (e) {}
    })()
  }, [setValue, key])

  return [value, set]
}

export default useAsyncStorage
