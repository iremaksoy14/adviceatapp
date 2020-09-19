import React,{useEffect,useState} from "react";
import { ImageBackground, StyleSheet, Text, View,Button,Dimensions,TouchableOpacity } from "react-native";
 const {width,height}=Dimensions.get("window");


import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase( 'Bitarif.db' );

const atıstırmalık = { uri: "https://i.pinimg.com/564x/9b/38/75/9b3875d86e33f84d3ad3c51628a95c69.jpg" };

const makarna = { uri: "https://cupfulofkale.com/wp-content/uploads/2019/04/Roasted-Red-Pepper-Pasta-Pinterest.jpg" };
const corba={uri:"https://www.kidsgourmet.com.tr/wp-content/uploads/2019/09/brokoli-corbasi-.jpg"}
const salata={uri:"https://static.happycenter.com.tr/Uploads/HappyLife/tavuklu-bulgur-salatasi-8270.jpg"}

const tatli={uri:"https://i.pinimg.com/564x/5b/78/44/5b78444c75e915cbb553992ef1700c01.jpg"}
const tavuk={uri:"https://blog.n11.com/wp-content/uploads/2017/12/sebzeli-izgara-tavuk-tarifi-2-800x529.jpg"}
const balik={uri:"https://i.pinimg.com/originals/75/8d/66/758d6656fa007e24647e00de66acb2ce.jpg"}

const bowl={uri:"https://joyfoodsunshine.com/wp-content/uploads/2020/03/smoothie-bowl-recipe-1.jpg"}
const Anasayfa = ({navigation}) => {



  return(
  <View style={styles.container}>




     <Text style={styles.text}>MAKARNALAR</Text>
    <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Makarna"})}}>
    <ImageBackground resizeMode={"cover"} source={makarna} style={styles.image}></ImageBackground>
       </TouchableOpacity>



       <Text style={styles.text}>CORBALAR</Text>
       <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Corba"})}}>
      <ImageBackground source={corba} style={styles.image}></ImageBackground>
       </TouchableOpacity>

 <Text style={styles.text}>BALIK</Text>
         <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Balik"})}}>
      <ImageBackground source={balik} style={styles.image}></ImageBackground>
        </TouchableOpacity>
        

         <Text style={styles.text}>SALATALAR
        </Text>
         <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Salata"})}}>
       <ImageBackground source={salata} style={styles.image}></ImageBackground>
        </TouchableOpacity>



           <Text style={styles.text}>TATLILAR</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Tatli"})}}>
        <ImageBackground source={tatli} style={styles.image}></ImageBackground>
          </TouchableOpacity>

           <Text style={styles.text}>TAVUK</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Tavuk"})}}>
          <ImageBackground source={tavuk} style={styles.image}></ImageBackground>
         </TouchableOpacity>

          <Text style={styles.text}>BOWL</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Bowl"})}}>
          <ImageBackground source={bowl} style={styles.image}></ImageBackground>
         </TouchableOpacity>

          <Text style={styles.text}>ATIŞTIRMALIKLAR</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate("Yemekler",{name:"Atıştırmalık"})}}>
          <ImageBackground source={atıstırmalık} style={styles.image}></ImageBackground>
         </TouchableOpacity>

  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
 
    justifyContent: "center",
    width:width,
    height:180,
    flexDirection: "column"
  },
 
 text: {
  
  fontSize:20,
  color:"#000000"
  },
});

export default Anasayfa;