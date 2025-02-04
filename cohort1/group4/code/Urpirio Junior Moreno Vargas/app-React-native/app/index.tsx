import { StyleSheet, Text, View,TextInput , TouchableOpacity, Image, FlatList} from "react-native";

import R from "./Random";


export default function Page() {

 
  

  return (
    <View>
      <View  style={Styles.con}>
        <Image source={{uri: 'https://i.pinimg.com/originals/88/9d/7d/889d7ddef09c4a3049981708eb525ed5.png' }} style={{
          width: 300,
          height: 200,
        }}/>
        <TextInput placeholder="Name"  style = { Styles.input1}></TextInput>

        <TextInput id="Passworb" placeholder="Passworb"  style={{
          borderWidth: 1,
          margin: 10,
          borderRadius:10,
          width: 300,
        }}></TextInput>


<TouchableOpacity   style = {Styles.btn}  >
  <Text style = {Styles.btnText}>Iniciar sesion</Text>
</TouchableOpacity>



<FlatList 
data = {
  [
    {key: "HL"},
    {key: "HL"},
    {key: "HL"}
  ]
}
renderItem={({item}) => <Text style={Styles.text}>{item.key}</Text>}

/>{/*Sirve para hacer una lista en react native */}
<R/>
      </View>
      
    </View>
  );


  
};

const Styles = StyleSheet.create({
  text: {
    height: 30,
    width: 50,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    display: "none",
  },
  con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input1: {
    margin: 10,
    borderWidth:1,
    borderRadius:10,
    width: 300,
    display:"flex",
  },
  btn: {
    width: 150,
    backgroundColor: "red",
    height: 40,
    borderRadius:10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    
  },
  btnText: {
    color:"white",
    fontSize: 18,
    fontWeight: 600,
  }
  
  
})



