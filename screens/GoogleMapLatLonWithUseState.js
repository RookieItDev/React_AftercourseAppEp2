import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useRef } from 'react'
// Import MapView จาก react-native-maps
import MapView, {Marker} from 'react-native-maps'

const GoogleMapLatLonWithUseState = () => {

  const mapRef = useRef(null)

  // พิกัดที่ลาดพร้าววังหิน 68
  const [region, setRegion] = useState({
    latitude: 13.827209457220281, // พิกัดต้นทาง
    longitude: 100.5924696184215, // พิกัดต้นทาง
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  })

  // สร้างตัวแปรเก็บตำแหน่งปลายทาง
  const VictoryMonument = {
    latitude: 13.764927868684737, // พิกัดปลายทาง
    longitude: 100.53828484210098, // พิกัดปลายทาง
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  // สร้างฟังก์ชันสำหรับเปลี่ยนไปพิกัดปลายทาง
  const goToVictoryMonument = () => {
    mapRef.current.animateToRegion(VictoryMonument, 3 * 1000)
  }

  return (
    <View style={styles.container}>

      <MapView 
      ref={mapRef}
      style={styles.map}
      initialRegion={{
          latitude: 13.827209457220281,  // พิกัดต้นทาง
          longitude: 100.5924696184215, // พิกัดต้นทาง
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={region} pinColor="red" />

      </MapView>

      <Button onPress={() => goToVictoryMonument()} title="Go to Victory Monument" />

      <Text />

      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>

    </View>
  )
}

export default GoogleMapLatLonWithUseState

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    backgroundColor: "#3f51b5",
    alignSelf: 'stretch',
    color: '#fff',
    textAlign: 'center',
  }
})