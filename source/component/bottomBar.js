import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';

import Gps from '../screen/gps'; // 내비게이션
import Notice from '../screen/notice'; // 공지 사항

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bottombar = () => {
  const navigation = useNavigation();
  const pressHome = () => navigation.navigate('Homepage');
  const [selectedView, setSelectedView] = useState('a');
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['15%', '50%', '90%'], []);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const renderContent = () => {
    switch (selectedView) {
      case 'a':
        return <Gps />;
      case 'b':
        return <Notice />;
      default:
        return <Gps />;
    }
  };

  const handleSheetChanges = useCallback((index) => {
    setIsBottomSheetOpen(index !== 0);
  }, []);

  const handlePressOutside = useCallback(() => {
    if (isBottomSheetOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    }
  }, [isBottomSheetOpen]);

  return (
    <View style={styles.bottomContainer}>
      {isBottomSheetOpen && (
        <TouchableWithoutFeedback onPress={handlePressOutside}>
          <View style={styles.bottomSheetOverlay} />
        </TouchableWithoutFeedback>
      )}
      <View style={styles.bottomSheetWrapper}>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          statusBarTranslucent
        >
          <View style={styles.contentContainer}>
            {renderContent()}
          </View>
        </BottomSheet>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton} onPress={pressHome}>
          <Image
            style={styles.bottomImage}
            source={require('../image/button1.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => setSelectedView('a')}
        >
          <Image
            style={styles.bottomImage}
            source={require('../image/button4.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => setSelectedView('b')}
        >
          <Image
            style={styles.bottomImage}
            source={require('../image/button5.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bottombar;

const styles = StyleSheet.create({
  bottomContainer: {
    height: windowHeight,
    width: windowWidth,
    position: 'absolute',
  },
  bottomSheetWrapper: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // 회색 계열 배경 추가
  },
  bottomSheetOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomBar: {
    backgroundColor: '#ffffff',
    width: windowWidth,
    height: windowHeight * 0.09,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 1,
  },
  bottomButton: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  bottomImage: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    height: 'auto',
  },
});
