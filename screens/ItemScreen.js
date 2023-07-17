import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const navigation =useNavigation();
    const data = route?.params?.param;
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    }, [])
    
  return (
    <SafeAreaView style={tw `flex-1 mt-2 bg-white relative`} >
        <ScrollView style={tw `flex-1 px-4 py-6`} >
            <View style={tw `relative bg-white shadow-lg`} >
                <Image
                source={
                    {
                        uri:data?.photo?.images?.large?.url?
                        data?.photo?.images?.large?.url:
                        "https://cdn.pixabay.com/photo/2017/08/08/08/56/cake-2610751_1280.jpg"
                    }
                }
                style={[{width:"100%",height:250, objectFit:'cover'}, tw`rounded-2xl`]}
                />
                <View style={[{left: -20, right: 0}, tw`absolute flex-row top-5 justify-between px-6`]} >
                   <TouchableOpacity 
                   onPress={() => navigation.navigate("Discover")}
                   style={[{backgroundColor: 'white', width:50, height: 50},tw`rounded-md w-10 h-10 items-center justify-center`]}>
                <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />

                </TouchableOpacity>
                <TouchableOpacity style={[{backgroundColor: '#06B2BE', width:50, height: 50},tw`rounded-md items-center justify-center`]} >
                <FontAwesome5 name="heartbeat" size={24} color="#fff" />

                </TouchableOpacity>
                </View>
                <View style={[{left: -20, right: 0},tw`absolute flex-row bottom-5 justify-between px-6`]} >
                    <View style={[{},tw`items-center flex-row`]} >
                        <Text style={[{}, tw`font-bold text-2xl text-gray-100`]} >
                            {data?.price}

                        </Text>
                        <Text style={[{}, tw`font-bold text-2xl text-gray-100`]} >

                        </Text>

                    </View>
                    <View style={[{backgroundColor: '#E6FFFA'}, tw` px-3 rounded-md justify-center`]} >
                        <Text style={tw`font-bold`} >{data?.open_now_text}</Text>
                    </View>
                </View>
            </View>

            <View style={[{}, tw`mt-6`]} >
                <Text style={[{color:'#428288', }, tw`font-bold text-xl`]} >
                    {data?.name}
                </Text>
                <View style={[{}, tw`flex-row items-center mt-2`]} >
                <FontAwesome5  name="map-marker-alt" size={21} color="#8C9EA6" />
                    <Text style={[{color:'#8C9EA6'}, tw`text-xl font-semibold mx-2`]} >
                        {data?.location_string}
                    </Text>
                </View>
            </View>        
            <View style={[{}, tw`mt-4 flex-row items-center justify-between`]} >
            {data?.rating && (
                <View style={[{}, tw`flex-row items-center`]} >
                    <View style={[{backgroundColor:'#FECACA'}, tw`w-10 h-8 rounded-2xl items-center justify-center shadow-md`]}>
                    <MaterialIcons name="star" size={24} color="#D58574" />
                    </View>
                    <View>
                        <Text style={[{color:'#515151'}]} >{data?.rating}</Text>
                        <Text style={[{color:'#515151'}, ]} >Ratings</Text>
                    </View>
                </View>
                

            )}

            {data?.price_level && (
                <View style={[{}, tw`flex-row items-center`]} >
                    <View style={[{backgroundColor:'#FECACA'}, tw`w-10 h-8 rounded-2xl items-center justify-center shadow-md`]}>
                    <MaterialIcons name="attach-money" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={[{color:'#515151'}]} >{data?.price_level}</Text>
                        <Text style={[{color:'#515151'}, ]} >Price Level</Text>
                    </View>
                </View>
                

            )}

            {data?.phone && (
                <View style={[{}, tw`flex-row items-center`]} >
                    <View style={[{backgroundColor:'#FECACA'}, tw`w-10 h-8 rounded-2xl items-center justify-center shadow-md`]}>
                    <FontAwesome5 name="phone-volume" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={[{color:'#515151'}]} >{data?.phone}</Text>
                        
                    </View>
                </View>
                

            )}

                         
        </View>
        {data?.description && (
                <Text style={[{letterSpacing: 0.05,color:'#97A6AF' }, tw`flex-row text-lg items-center mt-2`]} >
               {data?.description}
                </Text>
            )}

        {data?.cuisine && (
                <View style={[{gap:2}, tw`flex-row items-center justify-start flex-wrap mt-4`]} >
                    {data?.cuisine.map((n) =>  
                    <TouchableOpacity
                    key={n.key}
                    style={[{backgroundColor:'#D1FAE5'}, tw`px-2 py-1 rounded-md`]}
                    >
                        <Text>{n.name}</Text>
                    </TouchableOpacity>
                    )}
                   
                </View>
            )}  

            <View style={[{backgroundColor:"#F3F4F6", borderRadius:16, marginTop:16, padding:8}, tw`rounded-2xl px-4 py-2`]} >
            {data?.phone && (
                <View style={[{}, tw`flex-row items-center`]} >
                    <View style={[{backgroundColor:'#FECACA'}, tw`w-10 h-8 rounded-2xl items-center justify-center shadow-md`]}>
                    <FontAwesome5 name="phone-volume" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={[{color:'#515151'}, tw`mx-4`]} >{data?.phone}</Text>
                        
                    </View>
                </View>
                

            )}
            {data?.email && (
                <View style={[{}, tw`flex-row items-center mt-2`]} >
                    <View style={[{backgroundColor:'#FECACA'}, tw`w-10 h-8 rounded-2xl items-center justify-center shadow-md`]}>
                    <FontAwesome5 name="envelope" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={[{color:'#515151'}, tw`mx-4`]} >{data?.email}</Text>
                        
                    </View>
                </View>
                

            )}
            {data?.address && (
                <View style={[{}, tw`flex-row items-center mt-2`]} >
                    <View style={[{backgroundColor:'#FECACA'}, tw`w-10 h-8 rounded-2xl items-center justify-center shadow-md`]}>
                    <FontAwesome5 name="map-pin" size={24} color="black" />
                    </View>
                    <View>
                        <Text style={[{color:'#515151'}, tw`mx-4`]} >{data?.address}</Text>
                       
                    </View>
                </View>
                

            )}

            <View style={[{backgroundColor:"#06B2BE"}, tw`mt-4 px-4 py-4 rounded-lg items-center justify-center mb-12`]} >
                <Text style={[{letterSpacing: 0.05,}, tw`text-3xl font-semibold uppercase text-gray-100`]} >Book or Call Now</Text>
            </View>
            </View>


        </ScrollView>


    </SafeAreaView>

  )
}

export default ItemScreen