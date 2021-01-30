
import React, { useState } from 'react';
import {
  View, 
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import Cita from './components/Cita';


const App = () => {

  const [citas, setcitas] = useState([
    { id :"1", paciente:"firulais", propietario:"juan", sintomas:"no come"},
    { id :"2", paciente:"popy", propietario:"Jona", sintomas:"no come"},
    { id :"3", paciente:"Lucas", propietario:"Ricardo", sintomas:"no duerme"}
  ])

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de citas</Text>

        <FlatList
            keyExtractor={cita => cita.id}
            data={citas}
            renderItem={ ({item}) => <Cita item={item} /> }
        />

    </View>
    
  
  );

};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076B",
    flex:1
  },
  titulo:{
    marginTop:40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
