import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home';
import Buttons from '../screens/Buttons';
import Profile from '../screens/Profile';
import Achivements from '../screens/Achivements';
import Education from '../screens/Education';
import Skills from '../screens/Skills';
import Experience from '../screens/Experience';
import Projects from '../screens/Projects';
import AcademicProjects from '../screens/AcademicProjects';


    const Stack = createNativeStackNavigator();

const NavigatioNavigate = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home}
            
            options={{
              headerShown:false,
            }}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='Achivements' component={Achivements}/>
            <Stack.Screen name='Education' component={Education}/>
            <Stack.Screen name='Skills' component={Skills}/>
            <Stack.Screen name='Experience' component={Experience}/>
            <Stack.Screen name='Projects' component={Projects}/>
            <Stack.Screen name='AcademicProjects' component={AcademicProjects}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({});


export default NavigatioNavigate;