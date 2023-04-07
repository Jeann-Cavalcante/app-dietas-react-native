import { Text, TextInput, View } from "react-native";

const Input = (props) => {
  return (
    <View className='mt-8'>
      <Text className='text-lg  font-semibold text-gray-700'>{props.label}</Text>
      <TextInput 
      {...props}
      className='border-2 p-3 rounded-lg border-gray-300 text-xl text-gray-700' 
       />
    </View>
  );
}

export default Input;