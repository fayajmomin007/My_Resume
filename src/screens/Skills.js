import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';


const Skills = ({navigation}) => {
  return (
    <View>
      <View >
        <Text style={styles.react}>React Js :</Text>
         <View style={styles.skillContainer}>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>1.0 </Text> HTML5</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>2.0 </Text> CSS3</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>3.0 </Text> JavaScript</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>4.0 </Text> Bootstrap5</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>5.0 </Text> React JS</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>6.0 </Text> Node JS</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>7.0 </Text> JAVA</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>8.0 </Text> SQL</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>9.0 </Text> Redux</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>10.0 </Text> Core Java</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>11.0 </Text> Props & States</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>12.0 </Text> API</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>13.0 </Text> Events</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>14.0 </Text> Hooks</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>15.0 </Text> React Routing</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>16.0 </Text> JSX</Text>
        </View>
      


      <View style={styles.container}>
        <Text style={styles.react}>React Native :</Text>
        <View style={styles.skillContainer}>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>1.0 </Text> Native Core Components</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>2.0 </Text> CSS</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>3.0 </Text> JavaScript</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>4.0 </Text> TypeScript</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>5.0 </Text> React Native</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>6.0 </Text> Navigation</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>7.0 </Text> JSX</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>8.0 </Text> Hooks</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>9.0 </Text> Redux</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>10.0 </Text> Props & States</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>11.0 </Text> API</Text>
            <Text style={styles.reactSkills}><Text style={styles.reactSkillsNumber}>12.0 </Text> Events</Text>
        </View>
      </View>
    </View>


  {/*   <View style={styles.btnContainer}>
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
  //btnContainer:{},
  
  react:{
    fontSize:30,
    fontWeight:"bold",
    textTransform:"uppercase",
    marginVertical:20,
    marginHorizontal:20,
    borderBottomWidth:1,
  },
  skillContainer:{
    //borderWidth:1,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
  },
  reactSkillsNumber:{
    fontSize:15,
    color:"darkgrey",
  },
  reactSkills:{
    fontSize:20,
    fontWeight:"bold",
    padding:5,
    marginHorizontal:10,
    color:"black"
  },



  // btnStyle:{
  //   display:"flex",
  //   alignItems:"center",
  //   justifyContent:"center",
  //   borderWidth:1,
  //   width:200,
  //   marginTop:40,
  //   marginHorizontal:80,
  //   borderRadius:10,
  //   backgroundColor:"grey"
  // },
  // btnText:{
  //   textTransform:"uppercase",
  //   fontWeight:"bold",
  //   fontSize:20,
  //   padding:5,
  //   color:"#FFFFFF",
  // },
});



export default Skills;