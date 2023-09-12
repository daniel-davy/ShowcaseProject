import {
  ActivityIndicator,
  Text,
} from 'react-native';
import {ReactElement, memo, useCallback, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {
  fetchImages,
  selectImages,
  selectImagesError,
  selectImagesLoading,
} from '../redux/slices/imageSlice';
import ImageList from '../components/gallery/imageList';
import React from 'react';

const Gallery = (): ReactElement => {
  const dispatch = useAppDispatch();
  const images = useAppSelector(selectImages);
  const loading = useAppSelector(selectImagesLoading);
  const error = useAppSelector(selectImagesError);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = useCallback(async () => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [fetchData]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ImageList images={images} onRefresh={onRefresh} refreshing={refreshing} />
  );
};

export default memo(Gallery);
