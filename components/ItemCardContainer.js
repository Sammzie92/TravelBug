import { StyleSheet, View} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';





const  ItemCardContainer = ({imageSrc, title, location, data}) => {
  const navigation =useNavigation()
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("ItemScreen", {param: data})}
    style={[tw`rounded-md  px-3 py-2 shadow-md bg-red-300 my-2`, { width: 140, height: 200, borderColor: '#718096', borderWidth: 1 }]}>

    <Image
    source={{uri: imageSrc}}
    style={[{objectFit: 'cover', width: '100%', height: '60%' }, tw `rounded-md`]}
    />
  {title ? (
    <>
    <Text style={[{color:'#428288'}, tw`font-bold text-lg`]} >{
    title?.length > 10 ? `${title.slice(0,10)}..`: title}
    </Text>

    <View style={tw`flex-row items-center`} >
    <FontAwesome5 name="map-marker-alt" size={20} color="#8597A2" />
    <Text style={[{color:'#428288'}, tw`font-bold mx-2`]} >{
    location?.length > 12 ? `${location.slice(0,12)}..`: location}</Text>
    </View>
    </>

  ):(
    <></>
  )}
 </TouchableOpacity>
  )
}

export default  ItemCardContainer;

