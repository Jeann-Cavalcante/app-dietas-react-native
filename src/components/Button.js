import { Text } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Button = ({iconName, text}) => {
  return (
    <View className='bg-violet-700 rounded-xl flex-row p-3 items-center justify-center'>
      <MaterialCommunityIcons name={iconName} size={24} color="white" />
      <Text className='text-white text-lg font-bold ml-2'>{text}</Text>
    </View>
  );
}

export default Button;