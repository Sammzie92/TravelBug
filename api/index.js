import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
    try {
        const {
            data : {data},
        }= await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {params: {
            bl_latitude: bl_lat ? bl_lat :'-1.444376915016349',
            tr_latitude: tr_lat ? tr_lat :'-1.16057692449413',
            bl_longitude: bl_lng ? bl_lng:'36.66542284069812',
            tr_longitude: tr_lng ? tr_lng : '37.10495521663187',
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '32',
            currency: 'KES',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US',
            neighborhood_info: true,
          },
          headers: {
            'X-RapidAPI-Key': '2f2aff6159msh9e7d2154965334ap1a8173jsncbe1dadefe92',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        }
        );

        return data;
    } catch(error) {
        return null;
    }
};