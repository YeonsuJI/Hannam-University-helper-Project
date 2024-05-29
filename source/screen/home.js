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
//UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a> 하단 버튼 이미지 출처
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Bottombar from '../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const pressSearch = () => navigation.navigate('ScheduleSearch');
  const pressSchedule = () => navigation.navigate('Schedulepage');
  const pressButton09 = () => navigation.navigate('College of Engineering');
  const pressButton56 = () =>
    navigation.navigate('56th Anniversary Memorial Hall');
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={style.rightContainer}>
          <TouchableOpacity style={style.searchButton} onPress={pressSearch}>
            <Image
              style={style.searchImage}
              source={require('../image/button2.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.searchButton} onPress={pressSchedule}>
            <Image
              style={style.searchImage}
              source={require('../image/button3.jpg')}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <GestureHandlerRootView>
          <ScrollView
            style={style.outerContainer}
            contentContainerStyle={style.innerContainer}>
            <TouchableOpacity style={style.building} onPress={pressButton09}>
              <Image
                style={style.buildingImage}
                source={require('../image/building09.jpg')}
              />
              <Text numberOfLines={2} style={style.buildingText}>
                공과대학
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.building} onPress={pressButton56}>
              <Image
                style={style.buildingImage}
                source={require('../image/building56.jpg')}
              />
              <Text numberOfLines={2} style={style.buildingText}>
                56주년 기념관
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <Bottombar />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

const style = StyleSheet.create({
  rightContainer: {
    width: windowWidth * 0.3,
    height: 50,
    flexDirection: 'row',
  },
  searchButton: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  searchImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'center',
  },
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 40,
  },
  building: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.25,
  },
  buildingImage: {
    flex: 1,
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
  },
  buildingText: {
    fontSize: windowHeight * 0.25 * 0.2 * 0.25,
    color: '#000000',
    width: '100%',
    height: '20%',
    textAlign: 'center',
  },
});
