import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AcademicProjectsData } from '../data/AcademicProjectsData';



const AcademicProjects = () => {
  return (
    <View>

      <View>
        <FlatList 
        keyExtractor={(item) => item.id}
        data={AcademicProjectsData}
        renderItem={({item}) =>{
          return(
            <View style={styles.flatList}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.imgContainer}>
                <Image 
                resizeMode='contain'
                style={styles.imgStyle}
                source={{uri:(item.image)}}/>
            </View>

            <View style={styles.textContainer}>

              <Text style={styles.mainText}><Text style={styles.subText}>Project Details : </Text>{item.datails}</Text>

              <Text style={styles.mainText}><Text style={styles.subText}>Project Year : </Text>{item.year}</Text>

              <Text style={styles.mainText}><Text style={styles.subText}>Project Dates : </Text>{item.date}</Text>
            </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  flatList:{
    borderWidth:1,
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:10,
  },
  title:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",
    textTransform:"uppercase",
    marginTop:15,
  },
  imgContainer:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  imgStyle:{
    height:150,
    width:200,
    margin:10,
  },
  textContainer:{
    padding:10,
    marginHorizontal:20,
    marginVertical:10,
  },
  mainText:{
    fontSize:20,
    marginVertical:10,
  },
  subText:{
    fontSize:15,
    color:"grey"
  },
});



export default AcademicProjects;