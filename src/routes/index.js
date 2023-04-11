import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import DetailDiet from '../pages/DetailDiet';
import Form from '../pages/Form';
import Message from '../pages/Message';
import Info from '../pages/Info';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="DetailDiet" component={DetailDiet} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Info" component={Info} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}