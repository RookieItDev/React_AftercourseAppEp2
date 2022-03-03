import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Import MapView จาก react-native-maps
import MapView, {Marker} from 'react-native-maps'

const GoogleMap = () => {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 13.764927868684737,
          longitude: 100.53828484210098,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>

        <Marker coordinate={{
          latitude: 13.764927868684737,
          longitude: 100.53828484210098,
        }} pinColor="blue" />

        <Marker coordinate={{
            latitude: 13.764337378551637,
            longitude: 100.5367835476832,
          }}
          image={require("../assets/images/centlogo.png")}  
        />

        <Marker coordinate={{
            latitude: 13.763981685617287,
            longitude: 100.5392190120619,
          }} 
          image={require("../assets/images/centlogo.png")} 
        />

        <Marker coordinate={{
            latitude: 13.761597943954763,
            longitude: 100.53709345316925,
          }} 
          image={require("../assets/images/centlogo.png")}
         />

      </MapView>
    </View>
  )
}

export default GoogleMap

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
})
