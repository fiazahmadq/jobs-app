import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://remotive.com/api/' }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => 'remote-jobs',
    }),
    getJobById: builder.query({
      query: (id) => `remote-jobs/job/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobByIdQuery } = jobsApi;
