import React,{Component} from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,TextInput,Dimensions,ImageBackground} from 'react-native';
import * as firebase from  'firebase';
import { Field, reduxForm } from 'redux-form';
import store from './store.js';
const {width,height}=Dimensions.get("window");



const image={uri:"https://i.pinimg.com/564x/10/a8/4f/10a84f6b998ea9826f4b93020caf2fec.jpg"} ;




//Validation
const validate = values => {
    const errors = {}; 
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }      
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'username must be more than or equal 5 characters'
    } 
    
  
    return errors
}


const renderField = ({ secureTextEntry,placeholder,name,label, keyboardType, meta: { touched, error, warning }, input: { onChange, ...restInput }}) => {
   return(
     
       
 <View style={{flexDirection:"row",flex:1,justifyContent:"flex-start",alignItems:"flex-start",marginRight:100,marginTop:50,marginLeft:30}}>
    
     <Text  style={{justifyContent:"center",color:"#000000",fontSize:12,marginTop:10}}>{label}</Text>
     <View style={{flexDirection:"column"}}>      
        <TextInput  secureTextEntry={secureTextEntry} placeholder={placeholder}  name={name} style={{width:width-150,padding:10,fontSize:12,borderRadius:4,backgroundColor:"#ffffff"}}
               keyboardType={keyboardType}   onChangeText={onChange}{...restInput} />    
    {touched && ((error && <Text style={{ color: 'red'}}>{error}</Text>) ||
            
              (warning && <Text style={{ color: 'blue' }}>{warning}</Text>))}
               </View> 
      </View>

      

   
  
             )
};





const submit = values => {
    alert(`Validation success. Values = ~${JSON.stringify(values)}`);    

}

  class LoginScreen extends Component{
   
   constructor(props){
   super(props);
   this.state={
     email:"",
     password:"",
     logIn:false
}
 }
/*
 componentDidMount=()=>{
 
       //firebase config
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



  firebase.auth().onAuthStateChanged(users=>{

    if(users){
 
   this.props.navigation.navigate(" Kategoriler")

    }
    else{
      this.props.navigation.navigate("LoginScreen");
    }
  })
 }
 */

UyeOl=(values)=>{


//firebase.auth().createUserWithEmailAndPassword(values.email,values.password)
//.then(()=>{

  this.props.navigation.navigate("Kategoriler1");
}
//)

//}
GirisYap=(values)=>{


//firebase.auth().signInWithEmailAndPassword(values.email,values.password)
//.then(()=>{

  this.props.navigation.navigate("Kategoriler1");
}
//)

//}





render()
{
  const{handleSubmit}=this.props;
  return(

 <ImageBackground  source={image}  style={{width:width,height:height,flex:1}}>
 <View style={{ flex: 1, flexDirection: 'column',  justifyContent: 'center', }}>
           
            <Field  placeholder="lütfen email adresinizi giriniz" name="email" keyboardType="email-address" label="Email: " component={renderField} />
            <Field   secureTextEntry placeholder="lütfen sifrenizi giriniz" name="password" keyboardType="default" label="password: " component={renderField} />
           <View style={{marginTop:10}}>
            <TouchableOpacity onPress={handleSubmit(this.GirisYap)} style={{ alignItems: 'center',marginBottom:40,justifyContent:"flex-end",marginRight:70,borderRadius:10}}>
                <Text style={{
                    backgroundColor: '#cd853f', color: 'white', fontSize: 15,
                    height: 37, width: 140, textAlign: 'center', padding: 10,borderRadius:10}}>GİRİS YAP</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={handleSubmit(this.UyeOl)} style={{ alignItems: 'center',marginBottom:40,justifyContent:"flex-end",marginRight:70,borderRadius:10}}>
                <Text style={{
                    backgroundColor: '#cd853f', color: 'white', fontSize: 15,
                    height: 37, width: 140, textAlign: 'center', padding: 10,borderRadius:10}}>UYE OL</Text>
            </TouchableOpacity>
             </View>
        </View>
        </ImageBackground>



  )
             }
}
const ContactForm = reduxForm({
    form: 'contact', // a unique identifier for this form    
    validate              // <--- validation function given to redux-form    
  
})(LoginScreen);

export{renderField,LoginScreen};
export default ContactForm;