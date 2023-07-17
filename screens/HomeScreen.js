import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  },[]);

  return (
    <SafeAreaView style={tw`bg-pink-50 flex-1 relative`} >
      {/*First sections */}
      <View style={tw`flex-row px-6 mt-8 items-center`} >
        <View style={tw`w-16 h-16 bg-black rounded-full items-center justify-center`}>
        <Text style={[{color: '#00BCC9' }, tw`font-semibold text-3xl`]}>GO</Text>
        </View>
        <Text style={[{color:'#2A2B4B'}, tw`font-semibold mx-2 text-3xl`]} >Travel</Text>
      </View>

      {/*Second sections */}
      <View style={tw`px-6 mt-8 mx-2`} >
        <Text style={[{ color: '#3C6072'}, tw`font-semibold text-2xl`]} >Enjoy your Trip</Text>
        <Text style={[{ color: '#00BCC9'}, tw`font-bold mt-3 text-xl`]}>Savour the Moments</Text>
        <Text style={[{ color: '#3C6072'}, tw` text-base`]}>We are all about incredible service</Text>
      </View>

      {/*Circle section */}

      <View style={[{ height: 400, width: 400, backgroundColor: '#00BCC9' }, tw`rounded-full absolute bottom-36 -right-36`]}>
      </View>
      <View style={[{ height: 400, width: 400, backgroundColor: '#E99265' }, tw`rounded-full absolute -bottom-28 -left-36`]}>
      </View>

      {/*Image Container */}

      <View style={tw`flex-1 relative items-center justify-center`} >
        <Animatable.Image
        animation="rubberBand"
        easing="ease-in-out"
        source={HeroImage} style={[{ width: '100%', height: '100%', objectFit: 'contain' }, tw`mt-20`]} 
        />
        <TouchableOpacity 
        onPress={() => navigation.navigate("Discover")}
        style={[{borderColor:'#00BCC9'}, tw`bottom-20 absolute w-24 h-24 border-l-2 border-r-2 border-t-4 
        rounded-full items-center justify-center`]}>          
            <Animatable.View 
            animation="pulse"
            easing={"ease-in-out"}
            iterationCount={"infinite"}
            style={[{backgroundColor:'#00BCC9'}, tw`w-20 h-20 rounded-full items-center justify-center`]} >
              <Text style={tw`text-3xl text-white font-semibold`} >GO</Text>
            </Animatable.View>            
        </TouchableOpacity>
      </View >



    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})