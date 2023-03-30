import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Ionicons} from '@expo/vector-icons'


export const SLIDER_WIDTH = Dimensions.get('window').width + 5;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);

const data = [
  {
    id: 1,
    name: 'Category1',
    namesub: 'Sub category1',
    url: 'https://icon-library.com/images/react-icon/react-icon-29.jpg',
  },
  {
    id: 2,
    name: 'Category2',
    namesub: 'Sub category2',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
  },
  {
    id: 3,
    name: 'Category3',
    namesub: 'Sub category3',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },
  {
    id: 4,
    name: 'Category4',
    namesub: 'Sub category4',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png',
  },

];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        padding: 10,
        height:86,
        width:187,
        borderRadius: 6,
        // alignItems: 'center',
        justifyContent:'space-evenly', 
        backgroundColor: '#263a96', 
      }}>
       <View style={{flexDirection:'row',justifyContent:'space-between',}}>
        <Text style={{fontSize:8,fontWeight:'500',color:'#fff',}}>{item.name}</Text>
        <Ionicons  name='ellipsis-horizontal' size={15} color={'#FFA726'} />
        </View>
      {/* <Image source={{uri: item.url}} style={{width: 20, height: 20}} /> */}
      
      <View>
        <Text style={{fontSize:10,fontWeight:'400',color:'#fff',}}>
        {item.namesub}
        </Text>
        </View>

        <View style={{height:4,width:160,backgroundColor:'#DDB984',borderRadius:6,flexDirection:'row',alignItems:'center',marginTop:10}}>
            <View style={{height:4,width:109,backgroundColor:'#FFA726',borderRadius:6}}></View>
        <Ionicons name='ellipse' size={10} color={'#fff'} style={{position:'absolute',marginLeft:109}} />
        </View>
      

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:10}}>
        <Text style={{color:'#fff',fontSize:8,fontWeight:'500',}}>Till 20 Feb 2023</Text>
        <Text style={{fontSize:10,fontWeight:'700',color:'#fff'}}>70% </Text>
        </View>
      {/* 
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text> */}


    </View>
  );
};

const Carouselpage1 = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  return (
    <View style={{ paddingTop:10,
      alignItems: 'center'}}>
      <Carousel style={{}}
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH -500 }
        itemWidth={ITEM_WIDTH +15}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 5,
          marginHorizontal: -15,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.3}
        inactiveDotScale={0.9}
      />


    </View>

    
  );
};

export default Carouselpage1;