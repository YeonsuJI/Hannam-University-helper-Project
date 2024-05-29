import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import floors from './engineeringFloor'; // engineeringFloor.js 파일 참조

const NinthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['7F'].image);

  const showInfoAlert = room => {
    let additionalText = '';
    if (room === '090717') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090716') {
      additionalText = '\n기타 정보';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', {
            roomId: room,
            startFloor: '7F',
            goalFloor: '7F',
          }); // startFloor와 goalFloor 전달
        },
      },
      {
        text: '아니오',
        onPress: () => console.log('아니오 버튼이 눌렸습니다.'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.headerImage} source={currentImage} />
      {Object.keys(floors['7F'].rooms).map(roomId => {
        const room = floors['7F'].rooms[roomId];
        return (
          <TouchableOpacity
            key={roomId}
            style={[styles.button, {top: `${room.y}%`, left: `${room.x}%`}]}
            onPress={() => showInfoAlert(roomId)}>
            <Text style={[styles.buttonText, {fontSize: 8}]}>{roomId}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // 이미지의 비율을 유지
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default NinthFloorScreen;
