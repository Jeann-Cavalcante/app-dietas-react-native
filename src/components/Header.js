import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View className='flex bg-primary h-32 flex-row items-center justify-center px-4 pt-10'>
      <TouchableOpacity 
      onPress={() => navigation.goBack()} 
      className='absolute left-2 top-16'
      >
        <MaterialCommunityIcons name="arrow-left-thin" size={40} color={'#374151'} />
      </TouchableOpacity>
      <Text className='text-2xl font-bold  text-gray-700'>{title}</Text>
    </View> 
  );
}

export default Header;