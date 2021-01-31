import React from 'react';
import {View, Text,StyleSheet, TextInput} from 'react-native';

const Formulario = () => {
    return ( 
        <>
            <View style={styles.form}>
                <Text style={styles.label}>Paciente</Text>
                <TextInput
                    styles={styles.input}
                    onChangeText= {(text) => console.log(text)}
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Dueño</Text>
                <TextInput
                    styles={styles.input}
                    onChangeText= {(text) => console.log(text)}
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Contacto</Text>
                <TextInput
                    styles={styles.input}
                    onChangeText= {(text) => console.log(text)}
                    keyboardType='number-pad'
                />
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Cintomas</Text>
                <TextInput
                    styles={styles.input}
                    onChangeText= {(text) => console.log(text)}
                    multiline
                />
            </View>
        </>
     );
}
 
const styles = StyleSheet.create({
    form:{
        backgroundColor:'#FFF',
        paddingHorizontal:10,
        paddingVertical:20,
        marginHorizontal:'2.5%'
    },
    label: {
        fontWeight:'bold',
        fontSize:18,
        marginTop:20
    },
    input:{
      marginTop:10,
      height:50,
      borderColor:'#e1e1e1',
      borderWidth:1,
      borderStyle: 'solid'
    }
  });
  
export default Formulario;