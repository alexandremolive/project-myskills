import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
    setMySkills((oldSkill => [...oldSkill, newSkill]))
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Alexandre</Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text onPress={handleAddNewSkill} style={styles.buttonText}> Add</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>
       { 
       mySkills.map((skill) => (
       <TouchableOpacity key={skill} style={styles.buttonSkill} activeOpacity={0.7}>
          <Text style={styles.textSkill}>
        {skill}
          </Text>
        </TouchableOpacity>
        ))
        }

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems:'center'

  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    
  }
});
