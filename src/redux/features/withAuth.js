import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sqQuery = createApi({
  reducerPath: "sqQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://a751-115-127-156-9.ngrok-free.app",
    prepareHeaders: (headers) => {
      headers.set("ngrok-skip-browser-warning", "true");

      const token = localStorage.getItem("access_token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    newPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password/",
        method: "POST",
        body: data,
      }),
    }),
    getTuristProfile: builder.query({
      query: () => "/tourist/profile/",
    }),
    updateTuristProfile: builder.mutation({
      query: (data) => ({
        url: "/tourist/profile/",
        method: "PATCH",
        body: data,
      }),
    }),
    // plans
    getPlans: builder.query({
      query: () => "/tour-plans/",
    }),
    createPlanOne: builder.mutation({
      query: (data) => ({
        url: "/tour-plans/",
        method: "POST",
        body: data,
      }),
    }),
    updatePlan: builder.mutation({
      query: (data) => ({
        url: `/tour-plans/${data.id}/`,
        method: "PATCH",
        body: data.updates,
      }),
    }),
    deletePlan: builder.mutation({
      query: (id) => ({
        url: `/tour-plans/${id}/`,
        method: "DELETE",
      }),
    }),
    getOneDetail: builder.query({
      query: (id) => `/tour-plans/${id}/`,
    }),
  }),
});

export const {
  useNewPasswordMutation,
  useGetTuristProfileQuery,
  useUpdateTuristProfileMutation,
  // plans
  useGetPlansQuery,
  useCreatePlanOneMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
  useGetOneDetailQuery,
} = sqQuery;
