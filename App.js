import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
   Keyboard, 
    Platform
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {

  const [showform, setShowForm] = useState(false);

  const [citas, setCitas] = useState([
    {id: '1', paciente: 'firulais', propietario: 'juan', sintomas: 'no come'},
  
  ]);

  const eliminarCita = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    setShowForm(!showform);
  };

    // Ocultar el teclado
    const cerrarTeclado = () => {
      Keyboard.dismiss();
    }
  


  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>

      <View>
        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}> 
            {showform ? 'Cancelar Crear Cita' : 'Crear Nueva Cita'} 
          </Text>
        </TouchableHighlight>
      </View>

      {showform ? (
        <>
          <Text style={styles.titulo}>Crear Nueva Cita</Text>
          <Formulario
            citas={citas}
            setCitas={setCitas}
            setShowForm={setShowForm}
          />
        </>
      ) : (
        <>
          <Text style={styles.titulo}>
            {' '}
            {citas.length > 0
              ? 'Administra tus citas'
              : 'No hay citas, agrega una'}{' '}
          </Text>
         <FlatList
            style={styles.listado}
            keyExtractor={cita => cita.id}
            data={citas}
            renderItem={ ({item}) => <Cita item={item} eliminarCita={eliminarCita} /> }
        />
        </>
      )}
    </View>
    </TouchableWithoutFeedback>

  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
      padding: 10,
      backgroundColor:'#7d024e',
      marginVertical: 10
  },
  textoMostrarForm: {
      color: '#FFF',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default App;
