import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <Routes />
      <Toast />
      <StatusBar style='dark'  />
    </>
  );
}
