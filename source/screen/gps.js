import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Gps = () => {
  const [location, setLocation] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(0); // 현재 줌 레벨을 추적
  const mapRef = useRef(null);
  const previousRegion = useRef(null); // 이전 지도 위치 저장

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }
      Geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, distanceFilter: 0, interval: 5000 },
      );
    };

    requestLocationPermission();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const onRegionChange = (region) => {
    previousRegion.current = region; // 지도 이동 시 이전 위치 업데이트
  };

  const zoomIn = () => {
    if (zoomLevel < 7 && location) { // location이 null이 아닌 경우에만 실행
      const newZoomLevel = zoomLevel + 1;
      const newLatitudeDelta = location.latitudeDelta / Math.pow(1.5, newZoomLevel);
      const newLongitudeDelta = location.longitudeDelta / Math.pow(1.5, newZoomLevel);
  
      mapRef.current.animateToRegion({
        ...previousRegion.current, // 이전 위치로 이동
        latitudeDelta: newLatitudeDelta,
        longitudeDelta: newLongitudeDelta,
      });
  
      setZoomLevel(newZoomLevel);
    }
  };
  
  const zoomOut = () => {
    if (zoomLevel > -7 && location) { // location이 null이 아닌 경우에만 실행
      const newZoomLevel = zoomLevel - 1;
      const newLatitudeDelta = location.latitudeDelta * Math.pow(1.5, -newZoomLevel);
      const newLongitudeDelta = location.longitudeDelta * Math.pow(1.5, -newZoomLevel);
  
      mapRef.current.animateToRegion({
        ...previousRegion.current, // 이전 위치로 이동
        latitudeDelta: newLatitudeDelta,
        longitudeDelta: newLongitudeDelta,
      });
  
      setZoomLevel(newZoomLevel);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={location}
            zoomEnabled={true}
            showsCompass={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            onRegionChange={onRegionChange} // 지도 이동 시 호출됨
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title={'You are here'}
              />
            )}
          </MapView>
          <View style={styles.zoomButtons}>
            <TouchableOpacity style={styles.button} onPress={zoomIn}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={zoomOut}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Gps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  zoomButtons: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
