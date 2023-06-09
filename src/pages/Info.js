import { Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "../components/Button";
import { useState } from "react";
import ModalComponent from "../components/ModalComponent";
import { removeStorage } from "../utils/StorageLocal";

const Info = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const items = useRoute().params
  const navigation = useNavigation();

  function handleDelete(){
    removeStorage(items)
    navigation.navigate('Home')
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View className='flex-1 bg-primary'>
      <Header title='Refeição' />

      <View className='rounded-t-3xl px-4 pt-6 flex-1 justify-between bg-gray-100'>

        <View>
          <Text className='font-bold text-4xl text-gray-900'>{items?.nome} </Text>
          <Text className='text-lg text-gray-600'>{items?.desc} </Text>

          <View className='mt-8'>
            <Text className='font-bold text-2xl text-gray-900'>Data e Hora </Text>
            <Text className='text-lg text-gray-600'> {items?.date} <Text>às</Text> {items.hora} </Text>
          </View>

          <View className='mt-8 bg-primary w-2/4 p-2 rounded-xl flex-row justify-start items-center'>
            <View style={[items?.inside ? { backgroundColor: '#15803d' } : { backgroundColor: '#dc2626' }]} className='w-3 h-3 rounded-full z-50'></View>
            <Text className='text-lg text-gray-600 pl-4'>
              {items?.inside ? 'Dentro da dieta' : 'Fora da dieta'}
            </Text>
          </View>
        </View>

        <View className='mb-8 '>
          <TouchableOpacity onPress={() => navigation.navigate('Form', items)} className='mb-3'>
            <Button iconName='archive-edit' text='Editar' />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOpenModal}>
            <Button outline iconName='delete' text='Excluir' />
          </TouchableOpacity>
        </View>
      </View>

      <ModalComponent modalVisible={modalVisible} onClose={handleCloseModal}>
        <TouchableOpacity onPress={handleDelete} className='mb-3'>
          <Button iconName='delete' text='Excluir' />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCloseModal}>
          <Button outline iconName='close' text='Cancelar' />
        </TouchableOpacity>
      </ModalComponent>
    </View>
  );
}

export default Info;