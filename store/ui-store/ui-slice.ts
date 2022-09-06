import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  visible: false
}

const uiSlice = createSlice({
  name: 'ui-slice',
  initialState: defaultState,
  reducers: {
    showModal(state) {
      state.visible = true;
    },
    hideModal(state) {
      state.visible = false
    }
  }
});


export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
