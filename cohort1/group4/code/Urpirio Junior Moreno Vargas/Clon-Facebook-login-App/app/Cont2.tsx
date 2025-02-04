import { View, StyleSheet, Text, Image } from 'react-native';

const Cont2 = () =>{
    

    return (
        <View style = {Styles.Container3}>
                <View style={{
                    display: "flex",

                }}>
                    <Image style = {{
                        height: 50,
                        width: 50,
                        borderRadius: 30,
                    }} source={{uri: 'https://media.istockphoto.com/id/1389348844/es/foto/foto-de-estudio-de-una-hermosa-joven-sonriendo-mientras-est%C3%A1-de-pie-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=kUufmNoTnDcRbyeHhU1wRiip-fNjTWP9owjHf75frFQ='}}/>
                </View>
                <View>
                    <Text style = {{
                    color: "white",
                    fontWeight: "600",
                    textTransform: "lowercase"

                    }} >Juliamoreno@gmail.com</Text>
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

export default Cont2;





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