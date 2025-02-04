import { View, StyleSheet, Text, Image } from 'react-native';

const Cont = () =>{
    

    return (
        <View style = {Styles.Container3}>
                <View style={{
                    display: "flex",

                }}>
                    <Image style = {{
                        height: 50,
                        width: 50,
                        borderRadius: 30,
                    }} source={{uri: 'https://www.clarin.com/img/2023/12/01/rhVeUAooY_2000x1500__1.jpg'}}/>
                </View>
                <View>
                    <Text style = {{
                    color: "white",
                    fontWeight: "600",
                    textTransform: "lowercase"

                    }} >UrpirioJunior@gmail.com</Text>
                    <Text style = {{
                        color: "white",
                        fontWeight: "600",
                        display:"flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}> <View style = {{
                        height: 5,
                        width: 5,
                        backgroundColor: "red",
                        borderRadius: 10,

                    }}></View> 1  Notificacion</Text>
                </View>
        </View>
    )
};

export default Cont;





const Styles = StyleSheet.create(
    {
        Container3:{

        height: 70,
        borderWidth: 1,
        marginVertical: 5,
        marginHorizontal:20,
        borderRadius: 12,
        borderColor: "#ccd5ae",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap:10,
        padding: 10,

        }
    }
);
