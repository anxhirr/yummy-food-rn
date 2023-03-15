import { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, Platform, SafeAreaView, Text, View } from 'react-native'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const androidSafeArea = Platform.OS === 'android' ? 'pt-5' : ''
  return (
    <SafeAreaView className={androidSafeArea}>
      <Text>
        {/* Header  */}

        <View className='flex-row'>
          <Image
            source={require('../../assets/driver.png')}
            onError={(e) => console.log(e)}
            className='w-10 h-10 bg-gray-300 rounded-full '
          />
          <View>
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver now!
            </Text>
            <Text className='font-bold text-xl'>Current Location</Text>
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}
export default HomeScreen
