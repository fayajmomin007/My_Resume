import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'

const Experience = ({navigation}) => {
  return (
    <View>
    <View style={styles.headingContainer}>
    <Text style={styles.heading}>Junior Web developer</Text>
    </View>
      
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subHeading}>SARV Pvt Ltd </Text>
        <Text style={styles.subHeading}>Mar-2022 to Feb-2023 (11 months)</Text>
      </View>

      <View style={styles.responsiblity}>
      <Text style={styles.responsiblityHeading}>Rolls and Responsibilities :</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>1.0 </Text> Responsible for Writing HTML CSS code.</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>2.0 </Text> Writing React Component, React Routing & navigation.</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>3.0 </Text> Usage of States, Props, Events & Hooks.</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>4.0 </Text> Collaborate with a team of developers and designers to create a web application run on 
      multiple platforms.</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>5.0 </Text> Create reusable, effective, and scalable JavaScript code.
      </Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>6.0 </Text> Design the data and presentation layer of the web application's front end.</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>7.0 </Text> To make reusable and effective code using HTML, CSS, JavaScript, and Bootstrap code for 
      the given projects.</Text>
      <Text style={styles.responsiblityText}><Text style={styles.numbers}>8.0 </Text> Maintain and handle Hooks, JSX, Props, and States.</Text>
      </View>

    {/* 
      <View style={styles.mainbtn}>
        <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.btnStyle}
        >
          <Text style={styles.btnText}>go to Home</Text>
        </TouchableOpacity>
      </View>
    */}
    </View>
  )
}

const styles = StyleSheet.create({
  
  heading:{
    fontSize:30,
    textTransform:"uppercase",
    textAlign:"center",
    marginHorizontal:20,
    borderBottomWidth:1,
    fontWeight:"bold",
    marginTop:10,
  },
  subHeadingContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    marginTop:10,
  },
  subHeading:{
    fontSize:18,
    color:"green",
  },
  responsiblityHeading:{
    marginTop:10,
    marginHorizontal:30,
    fontSize:25,
  },
  responsiblityText:{
    padding:2,
    marginHorizontal:40,
    fontSize:18,
  },
  numbers:{
    fontSize:15,
    color:"grey",
  },
  mainbtn:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginTop:70,
  },
  // btnStyle:{
  //  // width:120,
  //   borderWidth:1,
  //   textAlign:"center",
  //   padding:5,
  //   paddingHorizontal:30,
  //   borderRadius:10,
  //   backgroundColor:"grey",
  //   width:200,
  // },
  // btnText:{
  //   textAlign:"center",
  //   fontSize:20,
  //   textTransform:"uppercase",
  //   color:"#FFFFFF",
  //   fontWeight:"bold",
  // },
});


export default Experience;