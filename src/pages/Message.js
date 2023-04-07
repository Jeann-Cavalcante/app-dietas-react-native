import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";

const Message = () => {
  const router = useRoute().params;
  const navigation = useNavigation();
 

  return (
    <View className='pt-16 flex-1'>
      {router.inside ? (
        <Text>true</Text>
      ) : (
        <Text>false</Text>
      ) }

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Button text='Ir para a página inicial' />
      </TouchableOpacity>
    </View>
  );
}

export default Message;