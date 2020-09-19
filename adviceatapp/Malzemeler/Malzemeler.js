import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Alert, TextInput,Dimensions,ImageBackground,Image,Button} from 'react-native';

const {width,height}=Dimensions.get("window");
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase( 'db.Adviceat' );

import MultiSelect from "react-multi-select-component";



import Makarna from '../veriler/Makarnalar1.json';
import Salata from '../veriler/Salatalar.json';
import Tatli from '../veriler/Tatlilar.json';
import Corba from '../veriler/Corbalar.json';

import Balik from '../veriler/Balik.json';
import Bowl from '../veriler/Bowl.json';
import Tavuk from '../veriler/Tavuklar1.json';

  
  import veriler1 from './Arama.json';
  
import Select from 'react-select';
const image={uri:"https://i.pinimg.com/564x/30/b5/79/30b57948b3b6f01134c61c341249eb94.jpg"}

 
 

  

 
 



export default class Malzemeler extends Component{
 
 yukle=()=>{
   
    this.props.route.params.name=="Bowl"&&this.setState({data:Bowl})
    this.props.route.params.name=="Makarna"&&this.setState({data:Makarna})
    this.props.route.params.name=="Corba"&&this.setState({data:Corba,})
    this.props.route.params.name=="Salata"&&this.setState({data:Salata,})
    this.props.route.params.name=="Tatli"&&this.setState({data:Tatli})
    this.props.route.params.name=="Tavuk"&&this.setState({data:Tavuk,})
    this.props.route.params.name=="Balik"&&this.setState({data:Balik})

 
   }
   componentDidMount=()=>{

    this.yukle();
  
   }

listItemView = (item) => {
  const {image,adi,recipe,materials,sure,pisirimturu}=item;
    return (
      <View style={styles.item}>
       <View style={{flexDirection:"column"}}>
       <View style={{flexDirection:"row"}}>
  <Image source={image} resizeMode={"contain"} style={{width:100,height:100,}}/>

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

         <TouchableOpacity>
              <Image resizeMode={"contain"} style={{width:30,height:30,marginLeft:120}} source={{uri:"https://img3.stockfresh.com/files/k/kiddaikiddee/m/16/6262578_stock-vector-noodles-icon.jpg"}}/>
               </TouchableOpacity>
    </View>
    </View>
    </View>
 
   
  </View>
  
    )
 }
 listViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.2, width: '100%', backgroundColor: '#ffffff' }}
      />
    );
  };

constructor(props){
     super(props);
     this.state={
            malzemeler:[],
            data: [],
         
           
               }
                  }

render(){


  return(
    <ImageBackground  style={{flex:1,justifyContent:"center",alignItems:"center"}} source={image} resizeMode={"container"}>
      <View style={{flex:1,justifyContent:"center",alignItems:"center",marginTop:20}}>

      <View> 
  
<View style={{marginLeft:30,marginTop:10}}>

  <Text style={{fontSize:20,color:"#000000"}}> Lutfen malzemeleri seciniz:</Text>
  
      <Select style={{marginVertical:20}}
          isMulti
         name="malzemeler"
         options={veriler1}
       className="basic-multi-select"
        classNamePrefix="select"
        onChange={(value)=>{this.setState({malzemeler:value})}}
  />
  </View>

  
      <View style={{marginTop:80}}>


   <Button title="Ürünleri Listele"  onPress={()=>{
   
    const newlist= JSON.stringify(this.state.malzemeler)
   const  length1 =this.state.malzemeler.length;
         const newlist1=[];

          this.state.data.map((items)=>{
             const list=[];
            this.state.malzemeler.map((map)=>{
            if(items.materials.includes(map.value)==true)
          {
               list.push(map.value)

           }

})

  if(list.length==length1)
      {
             newlist1.push(items)
       }

       
})
this.setState({data:newlist1})

    
      
  
}}/>

   <FlatList style={{marginLeft:10}}
            data={this.state.data}
            ItemSeparatorComponent={this.listViewItemSeparator}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>this.listItemView(item)}
          />
    
   
  
         
        </View> 
</View>
   </View>
 

           


</ImageBackground>



  )}
      
}
    


  





const styles = StyleSheet.create({
 
item: {
  
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginRight:30,
    backgroundColor:"#f8f8ff",
     width:300,
    height:150
  },

  title1: {
    fontSize: 12,
    color:"#000000",
    marginTop:4
  },
  baslik: {
    fontSize: 18,
    color:"#00008b",
    marginTop:9,
    marginLeft:2
  },
});


