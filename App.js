import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Keyboard,
  Platform,
} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';
import AsyncStorage from '@react-native-community/async-storage';

const App = () => {


  const [showform, setShowForm] = useState(false);
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'firulais', propietario: 'juan', sintomas: 'no come'},
  ]);


  useEffect(() => {
    const obtenerCitasStorage = async () => {
        try {
            const citasStorage = await AsyncStorage.getItem('citas');
            if(citasStorage) {
                setCitas(JSON.parse(citasStorage))//RECUERDA QUE EN EL STORAGE LO GUARDAMOS COMO STRING
            }
        } catch (error) {
            console.log(error);
        }
    }
    obtenerCitasStorage();//get citas del storage(sqlite)
  }, []);


  const eliminarCita = (id) => {
    const citasFiltradas = citas.filter( cita => cita.id !== id );
    setCitas( citasFiltradas );
    guardarCitasStorage(JSON.stringify(citasFiltradas));//sustituimos las citas viejas por la nueva pero sin el elemento eliminado
  };

  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    setShowForm(!showform);
  };

  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  // Almacenar las citas en storage
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem('citas', citasJSON);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
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
              guardarCitasStorage={guardarCitasStorage}
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
              keyExtractor={(cita) => cita.id}
              data={citas}
              renderItem={({item}) => (
                <Cita item={item} eliminarCita={eliminarCita} />
              )}
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
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
