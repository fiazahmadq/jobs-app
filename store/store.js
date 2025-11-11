import { configureStore } from "@reduxjs/toolkit";
import { jobsApi } from "./jobsApi";

export const store = configureStore({
  reducer: {
    // RTK Query slice reducer
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, etc.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});
