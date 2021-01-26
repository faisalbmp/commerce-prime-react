import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
  categoryRoute: "new"
}

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    switchRoute: (state, action) => {
      state.categoryRoute = action.payload
    }
  },
});

const { reducer } = globalSlice;
export default reducer;