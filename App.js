
import React, { useState } from 'react';
import {
  View, 
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';


const App = () => {

  const [citas, setCitas] = useState([
    { id :"1", paciente:"firulais", propietario:"juan", sintomas:"no come"},
    { id :"2", paciente:"popy", propietario:"Jona", sintomas:"no come"},
    { id :"3", paciente:"Lucas", propietario:"Ricardo", sintomas:"no duerme"}
  ])

  const eliminarCita = id => {
    setCitas( (citasActuales) => {
      return citasActuales.filter(cita => cita.id !==id)
    })
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de citas</Text>
      <Text style={styles.titulo}>{citas.length >0 ? 'Administra tus citas' : 'No hay citas'}</Text>

       <Formulario/>

        <FlatList
            keyExtractor={cita => cita.id}
            data={citas}
            renderItem={ ({item}) => <Cita item={item} eliminarCita={eliminarCita} /> }
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
    textAlign: 'center',
    marginBottom:20
  }
});

export default App;
