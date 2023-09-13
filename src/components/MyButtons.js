import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const MyButtons = ({title="", onPress = () =>{}, }) => {
  return (
    <LinearGradient 
    style={styles.gradient}
    colors={['#4c669f', '#3b5998', '#192f6a']}
    start={{x:0, y:0}}
    >
      <View btnContainer>
        <TouchableOpacity 
        style={styles.btnStyle}
        onPress={onPress}>

          <Text style={styles.btnText}>{title}</Text>

        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  gradient:{
    //marginVertical:10,
    borderRadius:50,
    marginHorizontal:20,
  },
  btnContainer:{
    //borderRadius:20,
    marginVertical:20,
  },
    btnStyle:{
      width:70,
      height:70,
      //borderRadius:20,
     // marginVertical:20,
    },
    btnText:{
      padding:10,
      textAlign:"center",
      textTransform:"uppercase",
      color:"#FFFFFF",
      fontWeight:"bold",
      fontSize:10,
      lineHeight:50,
    },
    
});



export default MyButtons;