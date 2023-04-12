import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import inside_in from "../assets/inside-in.png";
import inside_out from "../assets/inside-out.png";

const Message = () => {
  const inside = useRoute().params.inside;

  const navigation = useNavigation();


  return (
    <View className='pt-16 px-4 flex-1 justify-around'>
      {inside ? (
        <>
          <View >
            <Text className='text-green-600 text-4xl text-center mb-4 font-bold'>Continue assim!</Text>
            <Text className='text-center text-lg'>Você continua dentro da dieta. Muito bem!</Text>
          </View>
          <Image className='mx-auto object-cover' source={inside_in } />
        </>
      ) : (
        <>
          <View >
            <Text className='text-red-600 text-4xl text-center mb-4 font-bold'>Que pena!</Text>
            <Text className='text-center text-lg'>Você <Text className='font-bold'>saiu da dieta dessa vez,</Text> mas continue se esforçando e não desista!</Text>
          </View>
          <Image className='mx-auto object-cover' source={inside_out} />
        </>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Button iconName="home-variant" text='Ir para a página inicial' />
      </TouchableOpacity>
    </View>
  );
}

export default Message;