import { View, Text, Image,StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Cont from "./Cont";
import D from "./Data";
import Cont2 from "./Cont2";




const App = () =>{

    const Styles = StyleSheet.create({
        Container: {
            flex: 1, 
            backgroundColor: "#162127",
            
        },
        img: {
            height: 50,
            width: 50,

        },
        Container2: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 180,

        },
        
        btn1: {
            borderWidth: 1,
            margin: 20,
            padding: 10,
            borderRadius: 40,
            borderColor: "#ccd5ae",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        },
        btn__text: {
            color: "white",
            fontWeight: "500",
        },
        btn__text2: {
            color: "skyblue",
            fontWeight: "500",
        },
        btn2: {
            borderWidth: 1,
            marginVertical: 30,
            marginHorizontal: 20,
            paddingVertical: 12,            
            borderRadius: 40,
            borderColor: "#0077b6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
        }
        
    });


    const HEllo = () =>{
     
    };
    
   
   
    
    return(
     
        <ScrollView style = {Styles.Container}>
            
            <View  style = {Styles.Container2} >
               <Image style= {Styles.img} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/900px-2023_Facebook_icon.svg.png'}}>
                </Image> 
            </View>
            <View id="kol" style = {{
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: "white",
                margin: 10,
                marginHorizontal: 20,
                padding: 10,
                
            }}>
                <Text style={{
                    color: "white",
                }}>
                Facebook requests and receives your phone number
                from your mobile network.
                    </Text> <Text style={{
                    color: "#00a6fb",
                }}>
                    Change Settings.
                </Text>
            </View>
           <View style ={{
            display: "flex",
            flexDirection: "column",
            height: 200,
           }}>
           <Cont/>
           <Cont2/>
           </View>
           <TouchableOpacity  onPress={HEllo} style = {Styles.btn1}>
                <Text style = {Styles.btn__text}>Use another profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {Styles.btn2}>
                <Text style = {Styles.btn__text2}>Create new account</Text>
            </TouchableOpacity>
            <View style = {{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",

            }}>
                <Image style = {{
                    height: 50,
                    width: 50
                }} source={require('./img/meta-logo-240.png')}>

                </Image>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "white",
                }}>
                    Meta
                </Text>
            </View>

          
        </ScrollView>

    )

    
}
export default App;