import { ScrollView } from "react-native";
import { View, Text } from "react-native";

const ListFood = () => {
  return (
    <View className='mt-10 '>
      <Text className='text-2xl font-bold '>05/04/2023</Text>

      <View className='border-2 p-4 mt-3 rounded-xl border-gray-300 flex-row items-center justify-between'>
        <View className='flex-row'>
        <Text className='pr-3 border-r-2 text-lg border-gray-300'>08:30</Text>
        <Text className='text-lg pl-4'>Pão com ovo</Text>

        </View>

        <View style={{ backgroundColor: '#639339' }} className='w-5 h-5 rounded-full'></View>
      </View>

      <View className='border-2 p-4 mt-3 rounded-xl border-gray-300 flex-row items-center justify-between'>
        <View className='flex-row'>
          <Text className='pr-3 border-r-2 text-lg border-gray-300'>08:30</Text>
          <Text className='text-lg pl-4'>Almoço com carne</Text>

        </View>

        <View style={{ backgroundColor: '#BF3B44' }} className='w-5 h-5 rounded-full'></View>
      </View>



      <View className='border-2 p-4 mt-3 rounded-xl border-gray-300 flex-row items-center justify-between'>
        <View className='flex-row'>
          <Text className='pr-3 border-r-2 text-lg border-gray-300'>08:30</Text>
          <Text className='text-lg pl-4'>Club social</Text>

        </View>

        <View style={{ backgroundColor: '#639339' }} className='w-5 h-5 rounded-full'></View>
      </View>



    </View>
  );
}

export default ListFood;