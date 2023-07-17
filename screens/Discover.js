import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { getPlacesData } from '../api';
import { data } from 'autoprefixer';



const Discover = () => {
    const navigation = useNavigation();
    const [type, setType] = useState("restaurants")
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);
    const [bl_lat, setBl_lat] = useState(null);
    const [bl_lng, setBl_lng] = useState(null);
    const [tr_lat, setTr_lat] = useState(null);
    const [tr_lng, setTr_lng] = useState(null);
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      },[]);

    useEffect (() => {
      setIsLoading(true);
      getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then(data => {
        setMainData(data);
        setInterval(() => {
          setIsLoading(false);

        }, 500);
      })

    }, [bl_lat, bl_lng, tr_lat, tr_lng, type])  

    
  return (
    <SafeAreaView style={[{ backgroundColor: "white" }, tw `flex-1 relative pt-7 `]}>
    <View style={tw`flex-row items-center justify-between px-8`}>
      <View>
        <Text style={[{color: "#0B646B"}, tw`font-bold text-4xl`]} >Discover</Text>
        <Text style={[{color: "#527283"}, tw`text-lg`]} >the Beauty of Kenya</Text>
      </View>
      <View style={tw`w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg`} >
        <Image 
        source={Avatar}
        style={[{width: '100%', height: '100%', objectFit: 'contain'}, tw`rounded-md`]}
        />
      </View>
    </View>
    <View style={tw`flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4`}>
    <GooglePlacesAutocomplete 
    GooglePlacesDetailsQuery={{fields: "geometry"}}
    placeholder='Search'
    fetchDetails={true}
    onPress={(data, details = null) => {
        console.log(details?.geometry?.viewport);
        setBl_lat(details?.geometry?.viewport?.southwest?.lat)
        setBl_lng(details?.geometry?.viewport?.southwest?.lng)
        setTr_lat(details?.geometry?.viewport?.northeast?.lat)
        setTr_lng(details?.geometry?.viewport?.northeast?.lng)
    }}
    query={{
        key: "YOUR_API_KEY",
        language:"en"
    }}
    />

    </View>

    {/*MenuContainer */}

    {isLoading ? (<View style={tw `flex-1 items-center justify-center`} >
      <ActivityIndicator size={"large"} color={"#0B646B"}/>
    </View>) :(
        <ScrollView>
        <View style={tw`flex-row items-center justify-between px-8 mt-8`}>
            <MenuContainer
            key={"hotels"}
            title="Hotels"
            imageSrc={Hotels}
            type={type}
            setType={setType}
            />
            <MenuContainer
            key={"attractions"}
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
            />
            <MenuContainer
            key={"restaurants"}
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
            />

        </View>
        <View>
          <View style={tw `flex-row items-center justify-between px-4 mt-8`} >
            <Text style={[{color:'#2C7379'}, tw `text-3xl font-bold` ]} >Top Picks</Text>
            <TouchableOpacity style={tw `flex-row items-center justify-between`}>
            <Text style={[{color:'#A0C4C7'}, tw `text-xl font-bold` ]} >Explore More</Text>
            <FontAwesome5 style={tw`mx-3`} name="long-arrow-alt-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>
          

          <View style={tw`px-4 mt-8 flex-row items-center justify-evenly flex-wrap`}>
            {mainData?.length > 0 ? (
              <>
              {mainData?.map((data, i) =>(
                <ItemCardContainer
                key={i}
                imageSrc={
                  data?.photo?.images?.medium?.url?
                  data?.photo?.images?.medium?.url:
                  "https://cdn.pixabay.com/photo/2017/08/08/08/56/cake-2610751_1280.jpg"
                  }
                  
                  title={data?.name}
                  location={data.location_string}
                  data={data}
                />
              ))}

              </>
              ) : (<>
    <View style={[{ width: '100%', height: 400 }, tw`items-center mt-8 justify-center`]}>
      <Image
        source={NotFound}
        style={{ width: 92, height: 92, objectFit: 'cover' }}
      />
      <Text style={[{ color: '#428288' }, tw`text-2xl font-semibold`]}>
        Ooops...No Data Found
      </Text>
    </View>
    </>
  )}
</View>
</View>

</ScrollView>
)}


  </SafeAreaView>
  )
}

export default Discover

