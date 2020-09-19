import React,{Component} from 'react';
import { View ,TouchableOpacity,ImageBackground,  Dimensions,Text} from 'react-native';
const {width,height}=Dimensions.get("window");
const image={uri:"https://i.pinimg.com/564x/0b/1f/37/0b1f3741e1a730bf117d76d90c98c93f.jpg"};
export default class Kategoriler extends Component {
  constructor(props) {
    super(props);
   
  }

 

  render() {
    return (
<ImageBackground  source={image}  style={{width:width,height:height,flex:1}}>
 <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start', }}>
 
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Makarna"})}}><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>MAKARNALAR</Text></View></TouchableOpacity>

           <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Corba"})}}><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>ÇORBALR</Text></View></TouchableOpacity>

             <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Tatli"})}} ><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>TATLILAR</Text></View></TouchableOpacity>

         <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Salata"})}}><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>SALATALAR</Text></View></TouchableOpacity>



          <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Bowl"})}}><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>BOWL</Text></View></TouchableOpacity>
          
           <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Tavuk"})}}><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>TAVUK YEMEKLERİ
          </Text></View></TouchableOpacity>
          
          <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("Malzemeler",{name:"Balik"})}}><View style={{backgroundColor:"#e8e8e8",marginTop:20}}> <Text style={{fontSize:20,color:"#000000",textAlign:"center",}}>BALIK YEMEKLERİ
          </Text></View></TouchableOpacity>

         
        
      </View>
      </ImageBackground>
    );
  }
}