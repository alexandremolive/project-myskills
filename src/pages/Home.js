import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,

} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [newSkill, setNewSkill] = useState('')
  const [mySkills, setMySkills] = useState([])
  const [greeting, setGreeting] = useState('')

  function handleAddNewSkill() {
    setMySkills((oldSkill => [...oldSkill, newSkill]))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour < 12) {
      setGreeting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18){
      setGreeting('Good Afternoon')
    } else {
      setGreeting('Good Night')
    }
  }, [])
  return (
    <>
      <View style={styles.container}>
        <Text
          style={styles.title}
        >
          Welcome Alexandre
          </Text>
        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <Text style={styles.greetings}>
          {greeting}
        </Text>
        <Button onPress={handleAddNewSkill} />
        <Text
          style={[styles.title, { marginVertical: 50 }]}
        >
          My Skills
          </Text>
        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <SkillCard skill={item} />
          )}
        />
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
  greetings: {
    color: '#fff',
    marginTop: 5
  }


});
