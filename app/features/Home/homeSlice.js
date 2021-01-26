import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import { getData } from './homeApi';

export const fetchShoesData = createAsyncThunk(
  'home/get',
  async () => {
    try {
      const response = await getData();
      return response.data
    } catch (err) {
      throw err;
    }
  }
)
const initialState = {
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
  shoes: [],
  category: "all",
  shoe: {},
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: initialState,
  reducers: {
    fetchDetail(state, action) {
      state.shoe = action.payload
    },

  },
  extraReducers: {
    [fetchShoesData.pending]: (state, action) => {
      state.loading = 'pending'
      state.currentRequestId = action.meta.requestId
    },
    [fetchShoesData.fulfilled]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.currentRequestId = undefined;
        state.error = null;
        state.shoes = action.payload.shoes;
      }
    },
    [fetchShoesData.rejected]: (state, action) => {
      const { requestId } = action.meta
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle'
        state.error = action.payload && action.payload.message ? action.payload.message : action.message
        state.currentRequestId = undefined
      }
    }
  }
});

const { reducer } = homeSlice;
export const { fetchDetail } = homeSlice.actions
export default reducer;