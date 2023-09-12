import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import unsplash from '../../api/unsplash';
import { IImage } from '../../models/IImage';

interface ImagesState {
  images: IImage[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
};

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await unsplash.get('/photos/random', {
    params: {
      count: 10,
    },
  });
  return response.data;
});

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectImages = (state: RootState) => state.images.images;
export const selectImagesLoading = (state: RootState) => state.images.loading;
export const selectImagesError = (state: RootState) => state.images.error;

export const selectImageById = (state: RootState, imageId: string) => {
  return state.images.images.find((image) => image.id === imageId);
};

export default imagesSlice.reducer;
