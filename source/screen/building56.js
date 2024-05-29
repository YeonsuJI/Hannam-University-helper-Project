import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Bottombar from '../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Building56 = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <GestureHandlerRootView>
          <ScrollView
            style={style.outerContainer}
            contentContainerStyle={style.innerContainer}
          >
            <TouchableOpacity style={style.floor}>
              <View style={style.floorNumber}>
                <Text style={style.numberText}>1F</Text>
              </View>
              <View style={style.floorInfo}>
                <Text style={style.infoText}>?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.floor}>
              <View style={style.floorNumber}>
                <Text style={style.numberText}>2F</Text>
              </View>
              <View style={style.floorInfo}>
                <Text style={style.infoText}>??</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        <Bottombar />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Building56;

const style = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 40,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  floor: {
    width: windowWidth,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
  },
  floorNumber: {
    flex: 1.5,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb887',
  },
  floorInfo: {
    flex: 8.5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  numberText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a52a2a',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
});
