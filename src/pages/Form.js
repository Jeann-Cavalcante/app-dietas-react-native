import {Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useEffect, useState } from "react";
import Button from "../components/Button";

const Form = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState('');
  const [dateFood, setDateFood] = useState('');
  const [inside, setInside] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  useEffect(() => {
    setHour(date.getHours() + ':' + date.getMinutes());

    const day = parseInt(date.getDate()) < 10 ? '0' + date.getDate() : date.getDate();
    const month = parseInt(date.getMonth()) < 10 ? '0' + date.getMonth() : date.getMonth();
    
    setDateFood(day + '/' + month + '/' + date.getFullYear());
  }, [hour, date]);

  return (
    <View className='flex-1 bg-primary'>

      <View className='flex  bg-primary h-32 flex-row items-center px-4 pt-10'>
        <TouchableOpacity onPress={() => navigation.goBack()} className='mr-4'>
          <MaterialCommunityIcons name="arrow-left-thin" size={40} color="black" />
        </TouchableOpacity>
        <Text className='text-2xl font-bold text-center pl-10 text-gray-700'>Nova refeição</Text>
      </View>

      <View className='rounded-t-3xl flex-1 px-4 pt-6 bg-gray-100 '>
        <Text className='text-lg  font-semibold text-gray-700'>Nome</Text>
        <TextInput className='border-2 p-3 rounded-lg border-gray-300 text-xl text-gray-700' placeholder='Digite o nome da refeição...' />

        <Text className='text-lg  font-semibold text-gray-700 mt-6'>Descrição</Text>

        <TextInput
          multiline={true}
          numberOfLines={10}
          style={{ height: 120, textAlignVertical: 'top', }}
          placeholder='Digite a descrição da refeição...'
          className='border-2 p-3 rounded-lg border-gray-300 text-xl text-gray-700'
        />

        <View className='flex flex-row justify-between mt-6'>

          <TouchableOpacity className='w-[65%]' onPress={showDatepicker}>
            <Text className='text-lg font-semibold text-gray-700'>Data</Text>
            <TextInput
              value={dateFood}
              selectTextOnFocus={false}
              editable={false}
              className='border-2  p-3 rounded-lg border-gray-300 text-xl text-gray-700'
              placeholder='Digite o nome da refeição...' />
          </TouchableOpacity>

          <TouchableOpacity className='w-[30%]' onPress={showTimepicker}>
            <Text className='text-lg  font-semibold text-gray-700'>Hora</Text>
            <TextInput
              value={hour}
              selectTextOnFocus={false}
              editable={false}
              className='border-2 p-3 rounded-lg border-gray-300 text-xl text-gray-700'
              placeholder='Digite o nome da refeição...' />
          </TouchableOpacity>
        </View> 

        <View className='mt-8'>
          <Text className='text-lg  font-semibold text-gray-700'>Refeição dentro da dieta?</Text>
          <View className='flex-row justify-between gap-2 mt-2'>
            <TouchableOpacity 
            onPress={() => setInside(true)}
              style={[inside === true && { borderColor: '#639339', borderWidth: 2 }]}
            className=' bg-primary p-3 rounded-md w-[46%] flex-row gap-x-2 justify-center items-center'>
              <View style={{ backgroundColor: '#639339' }} className='w-3 h-3 rounded-full'></View>
            <Text className='text-xl  font-semibold text-gray-700'>Sim</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => setInside(false)}
          style={[inside === false && { borderColor: '#BF3B44', borderWidth: 2 }]}
          className=' bg-primary p-3 rounded-md w-[46%] flex-row gap-x-2 justify-center items-center'>
              <View 
              style={{ backgroundColor: '#BF3B44' }} 
              className='w-3 h-3 rounded-full'></View>
            <Text className='text-xl  font-semibold text-gray-700'>Não</Text>
          </TouchableOpacity>

          </View>
        </View>

        <TouchableOpacity className='mt-10'>
          <Button iconName='food-apple' text='Salvar' />
        </TouchableOpacity>

      </View>
    </View>
  );
}

export default Form;