import { Image, Text, View } from 'react-native';

export default function App() {
  return (
    
    <View style={{ flex:1, backgroundColor: '#27402D'}}>
      <Image 
      source={{ uri: 'https://cdn.creativefabrica.com/2025/04/26/Elegant-VM-serif-monogram-logo-Graphics-120717010-1-580x387.jpg' }}
      
      style={{
        width:220,
        height: 120,
        alignSelf: 'center',
        marginTop:160,
      }}
      />
            <Text style={{ fontSize: 13, marginTop: 1, textAlign: 'center', color:'white'}}>Quem planta com amor colhe beleza e paz.</Text>
                <Text style={{ fontSize: 14, marginTop: 1, textAlign: 'center', color:'white'}}>Cada muda é uma promessa de um mundo melhor.</Text>
    
    <Image
        source={require("./mudinha.png")}
        style={{
            width: 300,
            height: 300,
            marginTop: 60,
            alignSelf: 'flex-end'
        }}
    />

    <View  style={{ flex:0.60, backgroundColor: '#27402D'}}> </View>

      <View style={{ flex:0.40, backgroundColor: '#3a6324'}}>
      <Text style={{ fontSize: 15, marginTop: 10, textAlign: 'center', color:'white'}}>version 1.1.1 - by Fim de Semana</Text>
   
     </View>
    </View>
    );
}
