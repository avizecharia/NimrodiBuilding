import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//FILL HERE 3.1
interface GenericPayload {
  index: number;
}
export const  FloorreducerSlice = createSlice({
  name: "Floorreducer",
  initialState: 0,
  reducers: {
    //מקבל index
    changeAccess: (
      floorNumber: number,
      newFloorNumber: PayloadAction<GenericPayload>
    ) => {
      floorNumber = newFloorNumber.payload.index;
    },
  },
});
export const { changeAccess } = {

    ...FloorreducerSlice.actions,
};
export const floorreducer = {changeAccess}
