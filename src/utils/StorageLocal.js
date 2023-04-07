import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async () => {
 const data = await JSON.parse(AsyncStorage.getItem('food'));

  return data;
}

export const setStorage = async ({date, hora, nome, desc, inside}) => {
  if(!data || !hora || !nome || !desc || !inside) return;
  await AsyncStorage.setItem('food', JSON.stringify({
    date,
    hora,
    nome,
    desc,
    inside
  }));
}

export const removeStorage = async (item) => {
  const data = await getStorage();

  const newData = data.filter((food) => food.id !== item.id);

  await setStorage(newData);
}