import { api } from "../../api/apiSlice";

const templateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createTemplate: builder.mutation({
      query: ({ data }) => ({
        url: `/templates/create/`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["templates"],
    }),

    sendSourceCode: builder.mutation({
      query: ({ data }) => ({
        url: `/templates/send-source-code`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["templates"],
    }),

    // get categories by store used
    getTemplate: builder.query({
      query: (link) => `/templates/${link}/`,
      providesTags: ["templates"],
    }),
  }),
});

export const {
  useCreateTemplateMutation,
  useGetTemplateQuery,
  useSendSourceCodeMutation,
} = templateApi;
