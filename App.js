import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigatioNavigate from './src/navigation/NavigatioNavigate';
import Home from './src/components/Home';


export default function App() {
  return (
    <>
      <NavigatioNavigate />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   marginTop:30,
  // },
});
