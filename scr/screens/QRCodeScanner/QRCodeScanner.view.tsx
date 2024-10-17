import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera/legacy';
import { CameraType } from 'expo-camera/legacy';
import styles from './QRCodeScanner.style';
import { useQRCodeScannerLogic } from './QRCodeScanner.logic';


interface QRCodeScannerProps {
  onClose: () => void;  // Hàm đóng modal được truyền từ Home
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ onClose }) => {
  const { hasPermission, scanned, setScanned, handleQRCodeScan } = useQRCodeScannerLogic(onClose);
  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    handleQRCodeScan(data);
  };

  if (hasPermission === null) {
    return <Text>Checking camera access...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No camera access.</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        type={CameraType.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
      {scanned && (
        <Button title="Scan again" onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default QRCodeScanner;
