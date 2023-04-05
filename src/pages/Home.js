import { Text } from "react-native";
import { View } from "react-native";
import Card from "../components/Card";
import logo from "../assets/logo.png";
import { Image } from "react-native";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native";
import ListFood from "../components/ListFood";
import { ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView className='pt-16 px-4'>
      
      <Image className=' w-32 object-cover h-24' source={logo} />

      <TouchableOpacity activeOpacity={0.7}>
      <Card 
      cor='inside' 
      iconName='arrow-top-right'
      porc='99,25%'
      text='das refeições dentro da dieta'
      />
      </TouchableOpacity>

      <TouchableOpacity className='mt-10' activeOpacity={0.7}>
        <Text className='my-3 text-xl'>Refeições</Text>
        <Button iconName='food' text='Nova refeição' />
      </TouchableOpacity>

      <ListFood />
      <ListFood />
    </ScrollView>
  );
}

export default Home;