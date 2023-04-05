import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Card = ({ cor, iconName, porc, text }) => {
  return (
    <View
      style={(cor === 'inside') ? { backgroundColor: '#E5F0DB' } : { backgroundColor: '#F4E6E7' }}
      className='py-5 items-center justify-center rounded-xl'>
      <Text className='font-bold text-3xl'>{porc}</Text>
      <Text className='text-lg text-gray-700'>{text}</Text>

      <View className='absolute top-2 right-2'>
        <MaterialCommunityIcons
          name={iconName}
          size={28}
          color={(cor === 'inside') ? '#639339' : '#BF3B44'}

        />

      </View>
    </View>
  );
}

export default Card;