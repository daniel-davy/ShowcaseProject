import {
  FlatList,
  RefreshControl,
} from 'react-native';
import {ReactElement, memo} from 'react';
import { IImage } from '../../models/IImage';
import ImageListItem from './imageListItem';
import React from 'react';

const ImageList = ({images, refreshing, onRefresh}: IProps): ReactElement => {

  return (
    <FlatList
      data={images}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={({item}) => <ImageListItem image={item} />}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default memo(ImageList);

interface IProps {
  images: IImage[];
  refreshing: boolean;
  onRefresh: () => void;
}
