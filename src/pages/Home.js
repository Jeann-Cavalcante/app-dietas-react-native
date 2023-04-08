import { Text, TouchableOpacity, View, ScrollView, Image } from "react-native";
import ListFood from "../components/ListFood";
import Button from "../components/Button";
import Card from "../components/Card";
import logo from "../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView className='pt-16 px-4'>
      
      <Image className=' w-32 object-cover h-24' source={logo} />

      <TouchableOpacity onPress={() => navigation.navigate('DetailDiet')} activeOpacity={0.7}>
      <Card 
      cor='inside' 
      iconName='arrow-top-right'
      porc='99,25%'
      text='das refeições dentro da dieta'
      />
      </TouchableOpacity>

      <Text className='my-3 text-xl mt-10'>Refeições</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Form')} classNam ='' activeOpacity={0.7}>
        <Button iconName='food' text='Nova refeição' />
      </TouchableOpacity>

      <ListFood />
    </ScrollView>
  );
}

export default Home;