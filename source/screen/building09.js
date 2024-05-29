import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Bottombar from '../component/bottomBar'; // 하단 버튼 바
import B1Screen from './building09_B1';
import FirstFloorScreen from './1F';
import SecondFloorScreen from './2F';
import ThirdFloorScreen from './09_3F';
import FourthFloorScreen from './09_4F';
import FifthFloorScreen from './09_5F';
import SixthFloorScreen from './09_6F';
import SeventhFloorScreen from './09_7F';
import EighthFloorScreen from './09_8F';
import NinthFloorScreen from './09_9F';
import TenthFloorScreen from './09_10F';
import ElevenFloorScreen from './09_11F';
import TwelvethFloorScreen from './09_12F';
import GilScreen from './gil'; // Import the Gil screen

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const Building09 = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Building09Main"
          component={Building09Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="B1Screen"
          component={B1Screen}
          options={{title: '지하1층'}}
        />
        <Stack.Screen
          name="1FScreen"
          component={FirstFloorScreen}
          options={{title: '1층'}}
        />
        <Stack.Screen
          name="2FScreen"
          component={SecondFloorScreen}
          options={{title: '2층'}}
        />
        <Stack.Screen
          name="3FScreen"
          component={ThirdFloorScreen}
          options={{title: '3층'}}
        />
        <Stack.Screen
          name="4FScreen"
          component={FourthFloorScreen}
          options={{title: '4층'}}
        />
        <Stack.Screen
          name="5FScreen"
          component={FifthFloorScreen}
          options={{title: '5층'}}
        />
        <Stack.Screen
          name="6FScreen"
          component={SixthFloorScreen}
          options={{title: '6층'}}
        />
        <Stack.Screen
          name="7FScreen"
          component={SeventhFloorScreen}
          options={{title: '7층'}}
        />
        <Stack.Screen
          name="8FScreen"
          component={EighthFloorScreen}
          options={{title: '8층'}}
        />
        <Stack.Screen
          name="9FScreen"
          component={NinthFloorScreen}
          options={{title: '9층'}}
        />
        <Stack.Screen
          name="10FScreen"
          component={TenthFloorScreen}
          options={{title: '10층'}}
        />
        <Stack.Screen
          name="11FScreen"
          component={ElevenFloorScreen}
          options={{title: '11층'}}
        />
        <Stack.Screen
          name="12FScreen"
          component={TwelvethFloorScreen}
          options={{title: '12층'}}
        />
        <Stack.Screen
          name="Gil"
          component={GilScreen}
          options={{title: '길 안내'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Building09Main = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView>
          <ScrollView
            style={styles.outerContainer}
            contentContainerStyle={styles.innerContainer}>
            <FloorButton 
              floor="B1"
              details="열람실, 전공실험실(기계공학과, 건축공학전공)"
              navigation={navigation} 
            />
            <FloorButton 
              floor="1F"
              details="학과사무실(기계공학과, 토목환경공학전공), 프린스홀, 강의실, 전공실험실(토목환경공학전공)"
              navigation={navigation} 
            />
            <FloorButton
              floor="2F"
              details="학과사무실(컴퓨터공학과), 강의실, 전공실험실(기계공학과, 멀티미디어공학과, 컴퓨터공학과, 토목환경공학전공)"
              navigation={navigation}
            />
            <FloorButton 
              floor="3F" 
              details="공과대학(학장실, 부속실), 학과사무실(전기전자공학과), 강의실, 공용PC실, 전공실험실(전기전자공학과, 컴퓨터공학과, 토목환경공학전공)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="4F" 
              details="학과사무실(산업경영공학과, 정보통신공학과), 강의실, 전공실험실(산업경영공학과, 정보통신공학과)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="5F" 
              details="학과사무실(건축공학전공), 공학교육혁신센터, 취/창업상담실, 디자인씽킹스튜디오, 강의실, 전공실험실(건축공학전공, 멀티미디어공학과, 컴퓨터공학과, 정보통신공학과)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="6F" 
              details="학과사무실(멀티미디어공학과), 교수연구실, 전공실험실(멀티미디어공학과, 산업경영공학과, 컴퓨터공학과)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="7F" 
              details="교수연구실, 전공실험실(컴퓨터공학과)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="8F" 
              details="교수연구실, 전공실험실(전기전자공학과)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="9F" 
              details="교수연구실, 전공실험실(정보통신공학과)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="10F" 
              details="교수연구실, 전공실험실(토목환경공학전공)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="11F" 
              details="교수연구실, 전공실험실(건축공학전공)" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="12F" 
              details="산학협력홀" 
              navigation={navigation} 
            />
          </ScrollView>
          <Bottombar />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const FloorButton = ({floor, details, navigation}) => {
  let screenName = `${floor}Screen`; // 스크린 이름 동적으로 설정

  return (
    <View style = {styles.floorContainer}>
      <TouchableOpacity
        style={styles.floor}
        onPress={() => navigation.navigate(screenName)} // 스크린 이름 변경
      >
        <View style={styles.floorNumber}>
          <Text style={styles.numberText}>{floor}</Text>
        </View>
        <View style={styles.floorInfo}>
          <Text numberOfLines={2} style={styles.infoText}>{details}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style = {styles.floorMoreInfo}
      >
        <Image
          style={styles.floorMoreInfoImage}
          source={require('../image/info.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  floorContainer: {
    width: windowWidth,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    gap: 10,
  },
  floor: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    flexDirection: 'row',
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#a52a2a',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
  floorMoreInfo: {
    width: windowWidth * 0.07,
    height: windowHeight * 0.05,
  },
  floorMoreInfoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default Building09;
