import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import ListFood from "../components/ListFood";
import Button from "../components/Button";
import Card from "../components/Card";
import logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getStorageDiet } from "../utils/StorageLocal";

const Home = () => {
  const [item, setItem] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getPor() {
      const por = await getStorageDiet();
      setItem(por);
      console.log(por);
    };
    getPor();
  }, []);
  console.log(item);
  return (
    <ScrollView className='pt-16 px-4'>

      <Image className=' w-32 object-cover h-24' source={logo} />

      <TouchableOpacity onPress={() => navigation.navigate('DetailDiet')} activeOpacity={0.7}>
        <Card
          cor={item.inside_in >= item.inside_out ? 'inside' : 'outside'}
          iconName='arrow-top-right'
          porc={isNaN(item.porc)? '0%' : item?.porc?.replace('.', ',')+'%'}
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