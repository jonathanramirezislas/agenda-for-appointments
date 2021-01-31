import React, { useState } from 'react';
import {View, Button,Text, StyleSheet, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {

  //HERE I COULD use my useForm custome hook
  const [paciente, guardarPaciente] = useState('');
  const [propietario, guardarPropietario] = useState('');
  const [telefono, guardarTelefono] = useState('');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');
  const [sintomas, guardarSintomas] = useState('');
  

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
      const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
      guardarFecha(date.toLocaleDateString('es-ES', opciones));
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
    const opciones = { hour: 'numeric', minute: '2-digit', hour12: false};
    guardarHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.label}>Paciente</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Dueño</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Contacto</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => console.log(text)}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Sintomas</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => console.log(text)}
          multiline
        />
      </View>
      <View >
      <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
          locale='es_ES'
          headerTextIOS="Elige la fecha"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
      </View>
      <View >
      <Text style={styles.label}>Hora:</Text>
        <Button title="Seleccionar Hora" onPress={showTimePicker} />
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
          locale='es_ES'
          headerTextIOS="Elige una Hora"
          cancelTextIOS="Cancelar"
          confirmTextIOS="Confirmar"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: '2.5%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
  },
  input: {
    marginTop: 5,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
});

export default Formulario;
