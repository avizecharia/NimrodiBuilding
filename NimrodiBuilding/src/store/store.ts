// FILL HERE 3.3

import { configureStore } from "@reduxjs/toolkit";
import { RolereducerSlice } from "./rolereducer";
import { FloorreducerSlice } from "./floorreducer";

export const store = configureStore({
  reducer: {
    Rolereducer: RolereducerSlice.reducer,
    Floorreducer: FloorreducerSlice.reducer,
  },
});

export const { changeAccess, setRole } = {
    ...RolereducerSlice.actions,
    ...FloorreducerSlice.actions,
};


export type RootState = ReturnType<typeof store.getState>;
