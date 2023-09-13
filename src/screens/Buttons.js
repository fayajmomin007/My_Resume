import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



  const Separator = () => <View style={styles.separator}></View>

const Buttons = ({navigation}) => {
  return (
    <View style={[
      {
        backgroundColor:'#FFFFFF',
        height:"100%"
      },
    ]}>
    
    <View>

{/* fristbtnContainer start */}
    <View style={[styles.Container, 
                  {marginTop:50},
                ]}>
        <View style={styles.fristbtnContainer}>

          {/* EDUCATION BUTTON */}
            <TouchableOpacity
            style={styles.fristbtn}
            onPress={()=>{
              return navigation.navigate("Education");
            }}>
            <LinearGradient
      colors={['black', 'pink']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
       <Text style={styles.fristbtnText}>Education</Text>
       </LinearGradient>
            </TouchableOpacity>


            {/* SKILLS BUTTON */}
            <TouchableOpacity
            style={styles.fristbtn}
            onPress={()=>{
              return navigation.navigate("Skills");
            }}>
            <LinearGradient
      colors={['black', 'pink']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
       <Text style={styles.fristbtnText}>Skills</Text>
       </LinearGradient>
            </TouchableOpacity>

        </View>
      </View>

{/* fristbtnContainer start */}



{/* secondbtnContainer start */}


      <View style={styles.Container}>
            <View style={styles.secondbtnContainer}>

                    {/* EXPERIENCE BUTTON */}
              <TouchableOpacity
              style={styles.fristbtn}
              onPress={()=>{
                return navigation.navigate("Experience");
              }}>
              <LinearGradient
      colors={[ 'pink','black']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
       <Text style={styles.fristbtnText}>Experience</Text>
       </LinearGradient>
              </TouchableOpacity>


              {/* PROJECTS BUTTON */}
              <TouchableOpacity
              style={styles.fristbtn}
              onPress={()=>{
                return navigation.navigate("Projects");
              }}>
              <LinearGradient
      colors={['pink','black']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
       <Text style={styles.fristbtnText}>Projects</Text>
       </LinearGradient>
              </TouchableOpacity>

            </View>
      </View>


{/* secondbtnContainer end */}


      
{/* fristbtnContainer start */}

      <View style={styles.Container}>
        <View style={styles.fristbtnContainer}>

        {/* MY PROFILE BUTTON */}
        <TouchableOpacity
      style={styles.fristbtn}
        onPress={()=>{
          return navigation.navigate("Profile");
        }}>
        <LinearGradient
      colors={['black', 'pink']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
       <Text style={styles.fristbtnText}>Profile</Text>
       </LinearGradient>
        </TouchableOpacity>


        {/* ACHIVEMENTS BUTTON */}
      <TouchableOpacity
      style={styles.fristbtn}
      onPress={()=>{
        return navigation.navigate("Achivements");
      }}>
      <LinearGradient
      colors={['black', 'pink']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
       <Text style={styles.fristbtnText}>Achivements</Text>
       </LinearGradient>
      </TouchableOpacity>

        </View>
      </View>

{/* fristbtnContainer end */}


{/* last start */}

      {/* ACADEMIC PROJECTS BUTTON */}
      <View style={[
        {
          alignItems:"center",
        }
      ]}>

      
        <TouchableOpacity
        style={[
          {
            borderWidth:1,
            width:200,
            marginTop:10,
            borderRadius:10,
            backgroundColor: '#DDDDDD',
          }
        ]}
          onPress={()=>{
            return navigation.navigate("AcademicProjects");
          }}>
          <LinearGradient
      colors={['pink', 'black']} 
      start={{ x: 0.4, y: 0.4 }}
      style={[
        {
          borderRadius:10,
        },
      ]}
      >
          <Text style={styles.fristbtnText}>Academic Projects</Text>
          </LinearGradient>
          </TouchableOpacity>

          

      </View>

{/* last start */}

    </View>


<View style={[
  {
    marginTop:200,
  },
]}>
<Separator />
{/* ICONS */}
    <View style={[styles.iconContainer,
      {
       // marginTop:200,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
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
    </View>


<Separator />

    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    margin:5,
  },
  fristbtnContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center",
    width:350,
    //borderWidth:1,
    padding:5,
  },
  fristbtn:{
    borderWidth:1,
    width:120,
    borderRadius:10,
    backgroundColor: 'violet',
  },
  fristbtnText:{
    fontSize:20,
    fontWeight:"bold",
    padding:5,
    textAlign:"center",
    textTransform:"uppercase",
    color:"white",
  },



  secondbtnContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-evenly',
    alignItems:"center",
    width:350,
    //borderWidth:1,
    padding:10,
  },




  imgStyle:{
    width:60,
    height:60,
  },

  separator:{
   // borderBottomWidth:1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});


export default Buttons;