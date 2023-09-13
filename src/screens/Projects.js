import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ReactProject } from '../data/ReactProject';



const Projects = () => {
  return (
    <View>
    <Text style={styles.mainTitle}>React js Projects</Text>
      <View style={styles.flatList}>
       
      <FlatList 
      
      keyExtractor={(item) => item.id}
      data={ReactProject}
      renderItem={({item}) =>{
        return(
          <View>
            <View style={styles.mainContainer}>
              <Text style={styles.title}><Text style={styles.subTitle}>Title : </Text>{item.title}</Text>

              <View>
              <Text style={styles.details}><Text style={styles.subTitle}>Detailes : </Text>{item.details}</Text>
              </View>

              <Text style={styles.uploding}><Text style={styles.subTitle}>Uploaded On : </Text>{item.site}</Text>

              <View style={styles.buttonContainer}>
              <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(item.press)}
            >
              <Text style={styles.buttonText}>{item.button}</Text>
            </TouchableOpacity>
            </View>
              
            </View>
          </View>
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      />

      </View>

      <Text style={styles.mainTitle}>React Native Projects</Text>

      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainTitle:{
    fontSize:25,
    textAlign:"center",
    textTransform:"uppercase",
  },
  mainContainer:{
    marginHorizontal:30,
    borderWidth:1,
    marginVertical:20,
    padding:10,
  },
  buttonContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  title:{
    fontSize:22,
    fontWeight:"bold",
   // marginTop:10,
  },
  details:{
    fontSize:16,
    lineHeight:22,
    color:"grey",
    fontWeight:"bold",
    marginVertical:5,
  },
  uploding:{
    fontSize:20,
  },
  subTitle:{
    fontSize:16,
    color:"grey",
    fontWeight:"normal",
  },
  button:{
    backgroundColor:"pink",
    width:300,
    borderRadius:100,
    marginVertical:5,
    
  },
  buttonText:{
    color:"blue",
    textTransform:"uppercase",
    fontSize:20,
    textAlign:"center",
    fontWeight:"bold",
    padding:5,
  },
});



export default Projects;