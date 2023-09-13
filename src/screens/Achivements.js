import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AchivementData } from '../data/AchivementData';


      const Seperator = () => <View style={[
        {
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical:10,
        }
      ]}></View>


const Achivements = ({ navigation }) => {

  return (
    <View>
{/* 
    <TouchableOpacity 
    style={styles.btn}
    onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.btnText}>Home</Text>
    </TouchableOpacity>
*/}


      <FlatList 
      keyExtractor={(item) => item.id}
      data={AchivementData}
      renderItem={({item}) =>{
        return(
          <View style={[ { backgroundColor:"#FFFFFF"}, ]}>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.college}>{item.college}</Text>
      <Seperator />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
      <Seperator />

            <View style={styles.subContainer}>
              <Text style={[styles.role, styles.commonStyle]}><Text style={styles.subText}>Role : </Text>{item.role}</Text>
              <Text style={[styles.date, styles.commonStyle]}><Text style={styles.subText}>Date : </Text>{item.date}</Text>
            </View>

            <Text style={[styles.rank, styles.commonStyle]}><Text style={styles.subText}>Position : </Text>{item.rank}</Text>
          </View>
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
  mainContainer:{
    //borderWidth:1,
    marginVertical:10,
  },
  container:{
    padding:20,
    marginHorizontal:40,
    borderWidth:1,
    borderRadius:10,
    elevation:8,
  },
  college:{
    fontSize:30,
    fontWeight:"bold",
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    textAlign:"center",
    textTransform:"uppercase",
  },
  subTitle:{
    fontSize:18,
    fontWeight:"800",
    textAlign:"center",
    color:"grey",
    textTransform:"capitalize",
    color:"green",
  },
  commonStyle:{
    marginHorizontal:20,
    marginTop:10,
    fontSize:20,
    color:"green",
  },
  subText:{
    color:"grey",
    fontSize:15,
  },




  btn:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"grey",
    width:120,
    borderRadius:10,
    position:"absolute",
    bottom:25,
    left:"30%"
  },
  btnText:{
    padding:5,
    fontSize:20,
    fontWeight:"bold",
    color:"#FFFFFF",
    textAlign:"center",
    textTransform:"uppercase",
   // position:"relative",
   // bottom:0,
  },
});



export default Achivements;