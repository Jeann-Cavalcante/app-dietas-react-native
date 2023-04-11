import { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { getStorage, removeStorage } from "../utils/StorageLocal";
import { useNavigation } from "@react-navigation/native";

const ListFood = () => {
  const [food, setFood] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    async function getList() {
      const data = await getStorage();

      if (data) {

        const days = data.map((item) => item.date);

        const daysUnique = [...new Set(days)];

        const daysFood = daysUnique.map((day) => {
          const food = data.filter((item) => item.date === day);
          return [day, food];
        });

        // ordenar daysFood for date
        const orderFood = daysFood.sort((a, b) => {
          return new Date(a[0]) - new Date(b[0]);
        });
        setFood(daysFood);
      }

    };
    getList();
  }, []);

  if (food === null || food == []) {
    return <Text className='text-xl text-center mt-8'>Não há refeições cadastradas</Text>;
  }

  return (
    <View className='mt-6 '>

      <FlatList
        data={food}
        keyExtractor={(item) => item[0]}
        scrollEnabled={false}
        style={{ marginBottom: 100 }}
        renderItem={({ item }) => (

          <View >
            <Text className='text-2xl font-bold mt-6'>{item[0]}</Text>

            {item[1]?.map((item) => (

              <TouchableOpacity onPress={() => navigation.navigate('Info', item)} key={item?.id} className='border-2 p-4 mt-3 rounded-xl border-gray-300 flex-row items-center justify-between'>
                <View className='flex-row'>
                  <Text className='pr-3 border-r-2 text-lg border-gray-300'>{item?.hora}</Text>
                  <Text className='text-lg pl-4'>{item?.desc.length > 20 ? item.desc.substring(0,20)+ "..." : item.desc }</Text>
                </View>

                <View style={[item?.inside ? { backgroundColor: '#15803d' } : { backgroundColor: '#dc2626' }]} className='w-5 h-5 rounded-full z-50'></View>
              </TouchableOpacity>

            ))}
          </View>
        )}
      />
    </View>
  );
}

export default ListFood;