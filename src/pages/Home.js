import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import ListFood from "../components/ListFood";
import Button from "../components/Button";
import Card from "../components/Card";
import logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { getStorageDiet } from "../utils/StorageLocal";

const Home = () => {
  const [item, setItem] = useState([]);
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();  

  useEffect(() => {
    async function getPhoto() {
      try {
        const username = 'Jeann-Cavalcante'
        const response = await fetch('https://api.github.com/users/'+username);
        const photo = await response.json();
        console.log(photo.avatar_url);
        setPhoto(photo.avatar_url);
      } catch (error) {
        console.log(error);
      }
    }
    getPhoto() 
  }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('atualizou');
      async function getPor() {
        try {
          const por = await getStorageDiet();
          if(!por) return;
          setItem(por);
        } catch (error) {
          console.log(error);
        }
      }
      getPor();
    }, [])
  )


  return (
    <ScrollView className='pt-16 px-4'>

      <View className='flex-row justify-between pr-4'>
        <Image className=' w-32 object-cover h-24' source={logo} />
        <Image className=' w-16 object-cover rounded-full h-16' source={{uri: photo}} />

      </View>

      <TouchableOpacity onPress={() => navigation.navigate('DetailDiet')} activeOpacity={0.7}>
        <Card
          cor={item?.inside_in >= item?.inside_out ? 'inside' : 'outside'}
          iconName='arrow-top-right'
          porc={isNaN(item?.porc)? '0%' : item?.porc?.replace('.', ',')+'%'}
          text='das refeições dentro da dieta'
        />
      </TouchableOpacity>

      <Text className='my-3 text-xl mt-10'>Refeições</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Form')} classNam='' activeOpacity={0.7}>
        <Button iconName='food' text='Nova refeição' />
      </TouchableOpacity>

      <ListFood />
    </ScrollView>
  );
}

export default Home;