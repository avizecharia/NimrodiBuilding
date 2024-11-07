import optionalroles from "../data/roles.json";

//FILL HERE 3.2

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenericPayload {
  index: number;
}
export const RolereducerSlice = createSlice({
  name: "Rolereducer",
  initialState: optionalroles[0],
  reducers: {
    //מקבל index
    setRole: (
      roleNumber: string,
      newRoleNumber: PayloadAction<GenericPayload>
    ) => {
      roleNumber = optionalroles[newRoleNumber.payload.index]
    },
  },
});

export const { setRole } = {
  ...RolereducerSlice.actions,
};
export const Rolereducer = { setRole };
