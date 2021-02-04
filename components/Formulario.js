import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = ({citas, setCitas, setShowForm}) => {
  //HERE I COULD use my useForm custome hook
  const [paciente, setPaciente] = useState('Popy');
  const [propietario, setPropietario] = useState('Jonathan');
  const [telefono, setTelefono] = useState('449111111');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('No come');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, isTimePickerVisibility] = useState(false);

  //Date picker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    const opciones = {year: 'numeric', month: 'long', day: '2-digit'};
    setFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };

  //Time picker
  const showTimePicker = () => {
    isTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    isTimePickerVisibility(false);
  };

  const handleConfirmTime = (hora) => {
    const opciones = {hour: 'numeric', minute: '2-digit', hour12: false};
    setHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };

  // Create a new date
  const crearNuevaCita = () => {
    // Validate
    if (
      paciente.trim() === '' ||
      propietario.trim() === '' ||
      telefono.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      showAlert();
      return;
    }
    //if everything is ok
    // Create a new appointment
    const cita = { paciente, propietario, telefono, fecha, hora, sintomas  };
    cita.id = '55';

    // Agregar al state
    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);

    // Ocultar el formulario
    setShowForm(false);

    
}


  const showAlert = () => {
    Alert.alert(
      'Error', // Title
      'Todos los campos son obligatorios', // message
      [
        {
          text: 'OK', //array of buttons
        },
      ],
    );
  };

  return (
      <ScrollView style={styles.form}>
        <View style={styles.form}>
          <Text style={styles.label}>Paciente</Text>
          <TextInput
            value={paciente}
            styles={styles.input}
            onChangeText={(texto) => setPaciente(texto)}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Dueño</Text>
          <TextInput
          value={propietario}
            styles={styles.input}
            onChangeText={(texto) => setPropietario(texto)}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Contacto</Text>
          <TextInput
            value={telefono}
            styles={styles.input}
            onChangeText={(texto) => setTelefono(texto)}
            keyboardType="number-pad"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput
            value={sintomas}
            styles={styles.input}
            onChangeText={(texto) => setSintomas(texto)}
            multiline
          />
        </View>
        <View  style={styles.form}>
          <Text style={styles.label}>Fecha:</Text>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View  style={styles.form}>
          <Text style={styles.label}>Hora:</Text>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>
        <View  style={styles.form}>
          <TouchableHighlight
            onPress={() => crearNuevaCita()}
            style={styles.btnSubmit}>
            <Text style={styles.textoSubmit}>Crear Nueva Cita</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: '2.5%'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnSubmit: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Formulario;
