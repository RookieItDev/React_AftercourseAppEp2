import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
// Import MapView จาก react-native-maps
import MapView, { Marker, Polyline } from 'react-native-maps'
import { decode } from "@mapbox/polyline"

const GoogleMapDirection = () => {

  const [coords, setCoords] = useState([])

  // สร้างฟังก์ชันสำหรับแสดงเส้น พิกัดและ polyline
  const getDirections = async (startLoc, destinationLoc) => {
    try{
      const KEY = "YOUR_GOOGLE_MAP_API_KEY"
      let resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
      )
      let respJson = await resp.json()
      let points = decode(respJson.routes[0].overview_polyline.points)
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      return coords
    } catch(error) {
      return error
    }
  }

  useEffect(()=> {
    getDirections("13.827209457220281,100.5924696184215", "13.823562398743706,100.59230085902841")
    .then(coords => setCoords(coords))
    .catch(err => console.log("Something went wrong"));
  }, [])

  return (
    <>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 13.827209457220281,
          longitude: 100.5924696184215,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
      >
        {
          coords.length > 0 && 
          <Polyline coordinates={coords} strokeColor={"teal"} strokeWidth={6} />
        }

        <Marker coordinate={{
          latitude: 13.823562398743706, 
          longitude: 100.59230085902841,
        }} />

      </MapView>
    </>
  )

}

export default GoogleMapDirection

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