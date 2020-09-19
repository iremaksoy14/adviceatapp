import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image,Dimensions,TouchableOpacity,Button,ScrollView,Animated,

Easing } from 'react-native';
import React, { Component} from 'react';
import Modal from 'react-native-modal'

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase( 'db.Adviceat' );

import Makarna from '../veriler/Makarnalar1.json';
import Salata from '../veriler/Salatalar.json';
import Tatli from '../veriler/Tatlilar.json';
import Corba from '../veriler/Corbalar.json';

import Balik from '../veriler/Balik.json';
import Bowl from '../veriler/Bowl.json';
import Tavuk from '../veriler/Tavuklar1.json';
import Atistirmalik from '../veriler/Atistirmaliklar.json';

const {width,height}=Dimensions.get("window");
 
 
 

 export default class Makarnalar  extends Component {

   yukle=()=>{
   
    this.props.route.params. name=="Bowl"&&this.setState({data:Bowl})
    this.props.route.params. name=="Makarna"&&this.setState({data:Makarna})
    this.props.route.params. name=="Corba"&&this.setState({data:Corba})
    this.props.route.params. name=="Salata"&&this.setState({data:Salata})
    this.props.route.params.name=="Tatli"&&this.setState({data:Tatli})
    this.props.route.params.name=="Tavuk"&&this.setState({data:Tavuk})
    this.props.route.params.name=="Balik"&&this.setState({data:Balik})
    this.props.route.params.name=="Atıştırmalık"&&this.setState({data:Atistirmalik})

   }
   componentDidMount=()=>{

    this.yukle()
   }

 listViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.2, width: '100%', backgroundColor: '#ffffff' }}
      />
    );
  };


  
  
constructor(props){
super(props),
this.state={
       data:[]
  };
  
}

renderItem = ({ item }) => (
    <Item item={item} 
      adi={item.adi}
      recipe={item.recipe} 
      materials={item.materials} 
       image={item.image}
       sure={item.sure}/>)




render(){
  const {name}=this.props.route.params
   
   
 
  
  return(
    

 <SafeAreaView style={styles.container}>

    <FlatList
           data={this.state.data}
          

        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.listViewItemSeparator}

      />
    </SafeAreaView>
  )
}



  

}

class Item extends Component {


  goster = () => {  
 setTimeout(Animated.timing(this.value, {  
      toValue: 120,  
      duration: 500,  
      useNativeDriver: false,  
    }).start(),5000)  
  };  
   gizle = () => {  
    Animated.timing(this.value, {  
      toValue: 100,  
      duration: 500,  
      useNativeDriver: false,  
    }).start();  
  };  


  
  
   constructor(props){
     super(props);
     this.state={
       modal:false
     };
      this.value = new Animated.Value(100); 
   }
render(){
const {image,materials,sure,recipe,adi,malzemeler,pisirimturu}=this.props.item;
return(
 <View style={styles.item}>
  <View style={{flexaDirection:"column"}}>
  <View style={{flexDirection:"row"}}>
      <Animated.Image source={image} resizeMode={"cover"} style={[styles.animatedView, {width: this.value},{height: this.value}]}  />
      <View style={{flexDirection:"column"}}>
        <Text style={styles.baslik}>{adi}</Text>
        <View style={{flexDirection:"column"}}> 
          <View style={{flexDirection:"row"}}> 
          
             
              <Image style={{width:20,height:20,marginRight:5}} source={{uri:"https://img3.stockfresh.com/files/t/tkacchuk/m/34/5166734_stock-vector-alarm-clock-icon-on-white-background.jpg"}}/>
              
               <Text style={styles.title1}>{sure}dk</Text>
           </View>
            <View style={{flexDirection:"row"}}> 
             
             <Image style={{width:20,height:20,marginRight:5}} source={{uri:"https://st3.depositphotos.com/1393072/37685/v/1600/depositphotos_376857670-stock-illustration-pie-solid-icon-bakery-concept.jpg"}}/>
              <Text style={styles.title1}>{pisirimturu}</Text>
            </View>
          
          </View>
          <View style={{flexDirection:"row",marginLeft:5}}>
           <TouchableOpacity  
                  style={styles.touchable}  
                  onPress={() => this.goster()}  
                >  
                  <Text style={styles.text}>İNCELE</Text>  
                </TouchableOpacity>  
                <TouchableOpacity  
                  style={styles.touchable}  
                  onPress={() => this.gizle()}  
                >  
                  <Text style={styles.text}>KAPAT</Text>  
                </TouchableOpacity>  
                </View>
         <TouchableOpacity onPress={()=>{
               this.setState({modal:!this.state.modal})
               
                
              }}>
      
        
              <Image resizeMode={"contain"} style={{width:30,height:30,marginLeft:100}} source={{uri:"https://img3.stockfresh.com/files/k/kiddaikiddee/m/16/6262578_stock-vector-noodles-icon.jpg"}}/>
               </TouchableOpacity>
               
            </View>
  
     
    </View>
  {this.state.modal&& 
 
  <ScrollView     style={styles.scrollView}>
                 <View style={{width:'100%',height:'100%',backgroundColor:"# faebd7",marginRight:10,justifyContent:"center",alignItems:"center"}}>
                  <Text style={styles.title}>Malzemeler:</Text>
                    <Text style={styles.title1}>{malzemeler}</Text> 
                    <View style={{marginTop:8}}>
                    <Text style={styles.title}>Tarifi:</Text>
                    <Text style={styles.title1}>{recipe}</Text> 
                    </View>
                 </View>
                 
                 </ScrollView>
                
                }
</View>


 
</View>


)}
}
const styles = StyleSheet.create({
 
item: {
  
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor:"#f8f8ff"
  },
 title: {
    fontSize: 15,
    color:"#00008b",
    marginLeft:15
      },
  title1: {
    fontSize: 12,
    color:"#000000",
    marginTop:4
  },
  
  baslik: {
    fontSize: 18,
    color:"#00008b",
    marginTop:20,
    marginLeft:2
  },
   scrollView: {
    backgroundColor: '#f8f8ff',
    flex: 1,
    padding: 20,
   
  },
    animatedView: {  
    width: 100,  
    height: 100,  
   
     
  }, touchable: {  
    width: 45,  
    marginTop: 20,  
    height: 25,  
    backgroundColor: '#00008b',  
    marginLeft:20,
    borderRadius:10,
    textAlign:"center",
    paddingTop:5
  },
   text: {  
    color: 'white',
    fontSize:10 
  }
});




   






 

 
