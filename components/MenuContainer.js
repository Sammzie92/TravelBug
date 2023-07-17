import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const MenuContainer = ({title, imageSrc, type, setType}) => {
  const handlePress = () => {
    setType(title.toLowerCase())
  }
  return (
    <TouchableOpacity style={tw`items-center justify-center `} 
    onPress={handlePress}
     >
        <View style={[tw`w-24 h-24 p-2 rounded-full items-center justify-center mx-2`, type === title.toLowerCase() ? tw`shadow-sm bg-gray-200` : '']}>
          <Image 
            source={imageSrc}
            style={{ width: 100, height: 100, resizeMode: 'contain' }}
          />
        </View>
        <Text style={[{color: "#00BCC9" }, tw`text-xl font-semibold`]} >{title}</Text>

    </TouchableOpacity>
     
  )
}

export default MenuContainer

const styles = StyleSheet.create({})