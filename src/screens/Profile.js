import { Linking, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




const Profile = ({navigation}) => {
  return (
    <View style={[
      { 
        backgroundColor:"#FFFFFF",
        height:"100%",
      },
    ]}>
      <View style={styles.imgContainer}>
        <Image 
        resizeMode='contain'
        style={styles.imgStyle}
        source={require("../assets/fayaz2.jpg")}
        />
      </View>

      <View>
      <Text style={styles.myName}>Fayaj Mubarak Momin</Text>
      </View>

      <View style={styles.personalDetailsContainer}>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Email : </Text> mominfayaj286@gmail.com</Text>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Mobile : </Text> 8669286973</Text>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Languages Known : </Text> Hindi, Enhlish, Marathi</Text>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Date od Birth : </Text> 4 Sept 1996</Text>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Gender : </Text> Male</Text>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Marital Status : </Text> Unmarried</Text>
      <Text style={styles.personalDetails}><Text style={styles.startName}>Address : </Text> At Post Mandrup Tal. Solapur dist. Solapur Maharashtra, 413221</Text>
      </View>


      <View style={[
        {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        margin:60,
        //marginVertical:70,
        borderBottomWidth:1,
        borderTopWidth:1,
        padding:10,
        },
      ]}>
      <TouchableOpacity
    onPress={() => Linking.openURL("https://instagram.com/fayaj_momin?igshid=OGQ5ZDODk2ZA==")}
    >
      <Entypo name="instagram" size={40} color="blue" />
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() =>Linking.openURL("https://www.facebook.com/profile.php?id=61550936019131&mibextid=ZbWKwl")}
    >
      <Feather name="facebook" size={40} color="blue" />
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() =>Linking.openURL("https://www.lonkedin.com/in/fayaj-momin-b1b549278")}
    >
      <AntDesign name="linkedin-square" size={40} color="blue" />
    </TouchableOpacity>
    </View>


  {/* 
    <View style={styles.btnContainer}>
    <TouchableOpacity
    style={styles.btnStyle}
    onPress={() => navigation.navigate("Home")}
    >
    <Text style={styles.btnText}>Go to Home</Text>
    </TouchableOpacity>
    </View>
  */}
    </View>
  )
}

const styles = StyleSheet.create({
  imgContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
  },
  imgStyle:{
    width:200,
    height:200,
    //aspectRatio:1,   
    //padding:20,
    borderRadius:100, 
  },
  myName:{
    fontSize:30,
    textAlign:"center",
    marginTop:20,
    fontWeight:"bold",
    textTransform:"uppercase",
  },
  personalDetailsContainer:{
    //borderWidth:1,
    marginTop:10,
  },
  personalDetails:{
    padding:3,
    marginHorizontal:50,
    fontSize:18,
  },
  startName:{
    fontSize:15,
    color:"grey",
  },








  btnStyle:{
    display:"flex",
    alignItems:"center",
    borderWidth:1,
    width:200,
    marginTop:80,
    marginHorizontal:80,
    borderRadius:10,
    backgroundColor:"grey",
  },
  btnText:{
    textTransform:"uppercase",
    fontWeight:"bold",
    fontSize:20,
    padding:5,
    color:"#FFFFFF",
  },
});


export default Profile;