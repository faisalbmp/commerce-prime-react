import {
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';

const bagsAdapter = createEntityAdapter();


const initialState = bagsAdapter.getInitialState({
  loading: 'idle',
  currentRequestId: undefined,
  error: null
})

export const bagsSlice = createSlice({
  name: 'bags',
  initialState: initialState,
  reducers: {
    addBags(state, action) {
      bagsAdapter.addOne(state, action.payload)
    },
    removeBag(state, action) {
      bagsAdapter.removeOne(state, action.payload)
    },
  },
});

const { reducer } = bagsSlice;
export const { addBags, removeBag } = bagsSlice.actions
export default reducer;


export const {
  selectById: selectBagsById,
  selectIds: selectBagsIds,
  selectEntities: selectBagsEntities,
  selectAll: selectAllBags,
  selectTotal: selectTotalBags
} = bagsAdapter.getSelectors(state => state.bags);