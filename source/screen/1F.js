import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';

import Bottombar2 from '../component/bottomBar2'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstFloorScreen = ({navigation}) => {
  const showInfoAlert = room => {
    let additionalText = '';
    if (room === '090816') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090817') {
      additionalText = '\ng';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '확인',
        onPress: () => console.log('확인 버튼이 눌렸습니다.'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={require('../../source/image/공대8층.png')}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => showInfoAlert('090816')}>
        <Text style={styles.buttonText}>090816</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '60%'}]}
        onPress={() => showInfoAlert('090817')}>
        <Text style={styles.buttonText}>090817</Text>
      </TouchableOpacity>
      <Bottombar2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    marginTop: -300,
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    left: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default FirstFloorScreen;
