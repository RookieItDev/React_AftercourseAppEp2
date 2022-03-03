import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const STORAGE_KEY = '@save_age'

const AsyncStorageData = () => {

  const [age, setAge] = useState('0')

  // สร้างฟังก์ชันบันทึกข้อมูลลง AsyncStorage
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, age)
      alert('บันทึกข้อมูลลง Async Storage แล้ว');
    } catch(e) {
       alert('มีข้อผิดพลาดในการบันทึกข้อมูลลง Async Storage')
    }
  }

  // สร้างฟังก์ชันอ่านข้อมูลจาก AsyncStorage
  const readData = async () => {
    try {
      const userAge = await AsyncStorage.getItem(STORAGE_KEY)
      if(userAge !== null){
        setAge(userAge)
      }
    } catch(e){
      alert('มีข้อผิดพลาดในการอ่านข้อมูลจาก Async Storage')
    }
  }

  // สร้างฟังก์ชันสำหรับการล้างข้อมูล AsyncStorage
  const clearStorage = async () => {
    try{
      await AsyncStorage.clear()
      alert('ล้างข้อมูลใน Async Storage แล้ว!')
    } catch(e){
      alert('มีข้อผิดพลาดในการลยข้อมูลจาก Async Storage')
    }
  }

  // สร้างฟังก์ชันเมื่อมีการป้อนข้อมูลใน textbox
  const onChangeText = userAge => setAge(userAge)

  // สร้างฟังก์ชันบันทึกข้อมูลเมื่อ submit form
  const onSubmitEditing = () => {
    if(!age) return
    saveData()
    setAge('')
  }

  useEffect(()=>{
    readData()
  }, [])

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <Text style={styles.title}>ตัวอย่างการใช้ Async Storage</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.textlabel}>ป้อนอายุของคุณ:</Text>
        <TextInput
          style={styles.input}
          value={age}
          placeholder="ป้อนอายุเป็นตัวเลข"
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
        />
        <Text style={styles.text}>คุณอายุ {age} ปี</Text>
        <TouchableOpacity style={styles.button} onPress={clearStorage}>
          <Text style={styles.buttonText}>ล้างข้อมูล</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AsyncStorageData

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'teal',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  panel: {
    paddingTop: 40,
    alignItems: 'center',
  },
  textlabel:{
    fontSize: 18,
  },
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: '#dcdcdc',
  },
  input: {
    padding: 15,
    height: 60,
    width:150,
    borderBottomWidth: 1,
    margin: 10,
    fontSize: 24,
  },
  button: {
    margin: 10,
    padding: 10,
    width:150,
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
})
