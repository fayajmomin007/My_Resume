import { Alert, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MyButtons from './MyButtons';




 const Seperator = () => <View style={[
  {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical:5,
  }
 ]}></View>

const Home = ({navigation}) => {

  return (
    <View style={[{ marginTop:50},]}>
      <View style={[styles.imgContainer, { marginTop:20},]}>
      <Image
      style={styles.imgStyle}
      resizeMode='cover'
      source={require("../assets/fayaz3.jpg")}
      />
      <Text style={styles.nameStyle}>FAYAJ MUBARAK MOMIN</Text>
      <Text style={[{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        textTransform:"uppercase",
      },]}>Mechanical Engineer</Text>
      </View>
      
<Seperator />
<Seperator />

      <View style={[
        {
          marginTop:20,
        },
      ]}>
      <View style={[
        {
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-between",
        },
      ]}>
      <MyButtons 
      title='Education' 
      onPress={() => navigation.navigate("Education")}
      />


      <MyButtons 
      title='Skills' 
      onPress={() => navigation.navigate("Skills")}
      />
      </View>

      <View style={[
        {
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"center",
        },
      ]}>
          <MyButtons 
          title='Experience' 
          onPress={() => navigation.navigate("Experience")}
          />

          <MyButtons 
          title='Projects' 
          onPress={() => navigation.navigate("Projects")}
          />
      </View>

      <View style={[
        {
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-between",
        },
      ]}>
        <MyButtons 
        title='Profile' 
        onPress={() => navigation.navigate("Profile")}
        />

        <MyButtons 
        title='Achivement' 
        onPress={() => navigation.navigate("Achivements")}
        />
      </View>

      <View style={[
        { 
          display:"flex", 
          alignItems:"center",
          justifyContent:"center",
        },
    ]}>
        <MyButtons 
        title='A-Projects' 
        onPress={() => navigation.navigate("AcademicProjects")}
        />
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    imgContainer:{
        display:"flex",
        alignItems:"center",

    },
    imgStyle:{
        width:200,
        height:200,
       borderRadius:150,
    },
    nameStyle:{
        textAlign:"center",
        marginTop:20,
        fontSize:28,
        fontWeight:"bold",
        color:"darkgreen",
    },
    btnContainer:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:150,
    },
    mainbtnStyle:{
        backgroundColor:"grey",
        borderRadius:10,
        width:300,
        borderRadius:100,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    btnText:{
        fontSize:25,
        textAlign:"center",
        padding:8,
        textTransform:"uppercase",
        fontWeight:"bold",
        color:"white",
        
    },
});



export default Home;