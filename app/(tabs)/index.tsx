import { View, StyleSheet } from 'react-native';
import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';



const PlaceholderImage = require('@/assets/images/kaguya1.png');

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      console.log('Seleção de imagem cancelada.');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary'label="Escolha uma imagem" onPress={pickImageAsync} />
        <Button label="Usar esta imagem" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
