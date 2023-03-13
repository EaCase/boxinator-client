import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchAllShipments = createAsyncThunk(
  'shipments/',
  async (id) => {
    const response = {} // await shipmentService.getAccountShipments();
    return response.data;
  }
)

const initialState = {
  shipments: []
};

export const shipmentSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    addAll(state, action) { state.shipments = action.payload; },
  },
  extraReducers: {},
});

export const { addAll } = shipmentSlice.actions;

const shipmentReducer = shipmentSlice.reducer;

export default shipmentReducer;
