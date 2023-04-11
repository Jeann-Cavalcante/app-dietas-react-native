import { Text } from "react-native";
import { View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Button = ({ iconName, text, outline }) => {

  // const outline = false;

  return (
    <View
      style={[outline ? { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#6d28d9' }
        : { backgroundColor: '#6d28d9' }]}
      className=' rounded-xl flex-row p-3 items-center justify-center'>
      <MaterialCommunityIcons name={iconName} size={24} color={outline ? '#6d28d9' : 'white'} />
      <Text
        style={[outline ? { color: '#6d28d9' } : { color: '#fff' }]}
        className='text-white text-lg font-bold ml-2'>{text}</Text>
    </View>
  );
}

export default Button;