import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { EducationData } from '../data/EducationData';


  const Separator = () => <View style={[
    {
      borderBottomWidth:StyleSheet.hairlineWidth,
      marginVertical:5,
    },
  ]}></View>


const Education = ({navigation}) => {
  return (
    <View>
    {/* 
      <TouchableOpacity 
      style={styles.home}
      onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Go to Home</Text>
      </TouchableOpacity>
    */}
      <FlatList 
      keyExtractor={(item) => item.id}
      data={EducationData}
      renderItem={({item}) =>{
        return(
          <View>
            <View style={styles.container}>
              <Text style={styles.clgName}>{item.college}</Text>
              <Separator />
              <Text style={styles.branchName}><Text style={styles.name}>Branch : </Text> {item.branch}</Text>
              <Text style={styles.year}><Text style={styles.name}>Years : </Text>{item.year}</Text>
              <Text style={styles.per}><Text style={styles.name}>Percentage : </Text>{item.per}</Text>
            </View>
          </View>
        );
      }}
      marginBottom={10}
      showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
    padding:20,
    marginHorizontal:20,
    marginVertical:20,
    backgroundColor:'#FFFFFF',
    elevation:8,
    borderRadius:20,
  },
  clgName:{
    color:"black",
    fontSize:30,
  },
  branchName:{
    color:"black",
    fontSize:25,
    fontWeight:"bold",
  },
  name:{
    color:"black",
    fontSize:18,
    fontWeight:"normal",
    color:"grey"
  },
  year:{
    fontSize:20,
    fontWeight:"600",
  },
  per:{
    fontSize:20,
    fontWeight:"600",
  },




  // home:{
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center",
  //   position:"absolute",
  //   bottom:25,
  //   left:"28%",
  //   backgroundColor:"grey",
  //   width:200,
  //   borderRadius:10,
  // },
  // btnText:{
  //   fontSize:20,
  //   fontWeight:"bold",
  //   padding:5,
  //   textTransform:"uppercase",
  //   color:"#FFFFFF"
  // },
});


export default Education;