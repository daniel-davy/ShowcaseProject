import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ReactElement, memo} from 'react';
import { IImage } from '../../models/IImage';
import { useNavigation } from '@react-navigation/native';
import { AppStackScreenProp } from '../../navigation/stackNavigation';
import React from 'react';

const ImageListItem = ({image}: IProps): ReactElement => {
  const navigation = useNavigation<AppStackScreenProp>();

  const onSelectImage = () => {
    navigation.navigate('Photo', {imageId: image.id, name: image.user.name});
  };

  return (
    <TouchableOpacity onPress={onSelectImage} style={styles.card}>
      <Image source={{uri: image.urls.regular}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.author}>{image.user.name}</Text>
        <Text style={styles.description}>
          {image.description?.split(' ').slice(0, 7).join(' ')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ImageListItem);

interface IProps {
  image: IImage
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  textContainer: {
    marginTop: 5,
  },
  author: {
    fontWeight: 'bold',
  },
  description: {
    color: '#888',
    marginTop: 5,
  },
});
