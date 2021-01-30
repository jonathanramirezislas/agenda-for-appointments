import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Cita = ({item}) => {
  return (
    <View style={styles.cita}>
      <View>
        <Text style={styles.label}>paciente</Text>
        <Text styles={styles.texto}>{item.paciente}</Text>
      </View>
      <View>
        <Text style={styles.label}>propietario</Text>
        <Text styles={styles.texto}>{item.propietario}</Text>
      </View>
      <View>
        <Text style={styles.label}>sintomas</Text>
        <Text styles={styles.texto}>{item.sintomas}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cita: {
    backgroundColor : '#FFF',
    borderBottomColor : '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth:1,
    paddingVertical:20,
    paddingHorizontal:20
  },
  label : {
    fontWeight:'bold',
    fontSize:18,
    marginTop:18

  },
  texto: {
    fontSize:18
  }
});

export default Cita;
