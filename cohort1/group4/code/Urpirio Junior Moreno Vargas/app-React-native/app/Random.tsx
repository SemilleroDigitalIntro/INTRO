import { Text } from "react-native";


const RandomNumber = (
    Number: string,
    Number1: string,
  ) =>{
   
    return ' ' + Number + ' ' + Number1;
  
  };

  const H = () =>{

  }
  const Rante = () =>{
    return(
        <Text  onPress={H} style={{
            color: "blue",
            
        }}>
            {RandomNumber('Sign','U')}
        </Text>
    )
  }
  const R = () =>{
  
    
    
      return(
        <Text style ={{
          height: 100,
          width: 200,
          fontWeight: 600,
        }}> Estos son los numero <Rante/></Text>
      )
    };
export default R;

