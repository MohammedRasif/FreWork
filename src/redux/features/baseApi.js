import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://c940-115-127-156-9.ngrok-free.app",
    prepareHeaders: (header) => {
      header.set("ngrok-skip-browser-warning", "true");
      return header;
    },
  }),

  tagTypes: [],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/normal_signup/",
        method: "POST",
        body: userData,
      }),
    }),
    logIn: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login/",
        method: "POST",
        body: loginData,
      }),
    }),
    otpVerify: builder.mutation({
      query: (otpData) => ({
        url: "/auth/verify_otp/",
        method: "POST",
        body: otpData,
      }),
    }),
    reSendOtp: builder.mutation({
      query: (email) => ({
        url: "/auth/resend_otp/",
        method: "POST",
        body: email,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (email) => ({
        url: "/auth/forgot-password/",
        method: "POST",
        body: email,
      }),
    }),
    newPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLogInMutation,
  useOtpVerifyMutation,
  useReSendOtpMutation,
  useVerifyEmailMutation,
  useNewPasswordMutation,
} = baseApi;
