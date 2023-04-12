import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async () => {
  const data = await AsyncStorage.getItem('food');

  if(!data) return null;

  const json = await JSON.parse(data);

  json.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  })
  setStorageDiet();

  return json;
}

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
    await setStorageDiet();
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
  
  const data = await getStorage();
  console.log('item', data.length);

  const newData = data.filter((food) => food.id != item.id);
  console.log(newData.length);

  await AsyncStorage.setItem('food', JSON.stringify(newData));

  const teste = await getStorage();
  console.log('teste', teste);
  await setStorageDiet();
}

export const updateStorage = async (item) => {
  const data = await getStorage();

  const newData = data.filter((dataItem) => dataItem.id !== item.id);
  
  await AsyncStorage.setItem('food', JSON.stringify([
    ...newData,
    item
  ] ));
}

export const getStorageDiet = async () => {
  const data = await AsyncStorage.getItem('diet');

  if(!data) return null;

  console.log('data', data);

  const json = await JSON.parse(data);

  return json;
}

export const setStorageDiet = async () => {
  const data = await getStorage();  

  let reg = 0;
  data.forEach((item) => {
      reg++;
  });

  let inside_in = 0;
  let inside_out = 0;
  data.forEach((item) => {
    if(item.inside === true){
      inside_in++;
    } else {
      inside_out++;
    }
  });

  let dietInside = (inside_in * 100) / reg;


  // best sequence inside diet
  let bestSequence = 0;
  let bestSequenceCount = 0;
  let bestSequenceCountTemp = 0;

  data.forEach((item) => {
    if(item.inside === true){
      bestSequenceCountTemp++;
    } else {
      if(bestSequenceCountTemp > bestSequenceCount){
        bestSequenceCount = bestSequenceCountTemp;
      }
      bestSequenceCountTemp = 0;
    }
  });


  await AsyncStorage.setItem('diet', JSON.stringify({
    porc: dietInside.toFixed(2),
    bestSequence: bestSequenceCount,
    reg,
    inside_in,
    inside_out
  }));
}