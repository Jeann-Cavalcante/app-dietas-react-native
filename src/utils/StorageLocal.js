import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async () => {
  const data = await AsyncStorage.getItem('food');

  const json = await JSON.parse(data);

  return json;
}
// console.log('teste');
// getStorage().then((data) => console.log(data));

export const setStorage = async ({date, hora, nome, desc, inside}) => {
  console.log(date, hora, nome, desc, inside);
  if(!date || !hora || !nome || !desc || inside === '') return;
  const list = await getStorage();

  if(list){
    await AsyncStorage.setItem('food', JSON.stringify([
      ...list,
      {
        id: Math.random().toString(36).substr(2, 9),
        date,
        hora,
        nome,
        desc,
        inside
      }
    ]));
    return;
  }

  await AsyncStorage.setItem('food', JSON.stringify([{
    id: Math.random().toString(36).substr(2, 9),
    date,
    hora,
    nome,
    desc,
    inside
  }]));

}

export const removeStorage = async (item) => {
  console.log(item);
  const data = await getStorage();

  const newData = data.filter((food) => food.id !== item);

  await setStorage(newData);
}

// removeStorage('yoy95zsof');
