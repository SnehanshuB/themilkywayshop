import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnsedDataFor: 5
        }),
        getProductDeails: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnsedDataFor: 5
        })
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery, useGetProductDeailsQuery } = productsApiSlice;