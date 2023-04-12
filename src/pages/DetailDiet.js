import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { getStorageDiet } from "../utils/StorageLocal";

const DetailDiet = () => {
  const [list, setList] = useState([]);
  const [inside, setInside] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    async function getList(){
      const data = await getStorageDiet();

      if(!data) return;

      const porc = parseFloat(data.porc.replace(',', '.'));
      porc >= 50? setInside('inside') : setInside('outside');
      setList(data);

    };
    getList();
  }, [])
  return (
    <View className='flex-1 bg-primary'>
      <View className='flex  bg-primary h-44 flex-row items-center px-4 pt-10'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='mr-4'>
          <MaterialCommunityIcons name="arrow-left-thin" size={40} color="black" />
        </TouchableOpacity>
        <View className='justify-center items-center pl-8'>
          <Text className='text-4xl font-bold text-center text-gray-700'>{list?.porc ? list?.porc + '%' : '0%'}</Text>
          <Text className='text-center  text-gray-700'>das refeições dentro da dieta</Text>
        </View>
      </View>

      <View className='rounded-t-3xl flex-1 px-4 pt-6 bg-gray-100 '>
        <Text className='text-center text-lg font-bold'>Estatísticas gerais</Text>
        <View className='my-6'>
          <Card cor={inside} porc={list?.bestSequence ? list?.bestSequence : '0'} text='melhor sequência dentro da dieta' />
        </View>
        <Card cor={inside} porc={list?.reg ? list?.reg : '0'} text='refeições registradas' />

        <View className='flex-row w-full gap-x-4 mt-6 justify-between'>
          <View className='w-1/2'>
            <Card cor={inside} porc={list?.inside_in ? list?.inside_in : '0'} text='dentro da dieta' />
          </View>
          <View className='w-1/2'>
            <Card cor={inside} porc={list?.inside_out ? list?.inside_out : '0'} text='fora da dieta' />

          </View>
        </View>
      </View>
    </View>
  );
}

export default DetailDiet;