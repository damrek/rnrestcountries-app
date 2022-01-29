import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isEmpty, sortBy } from 'lodash';

const transformedResponse = (response) => {
  const countries = [];
  response.forEach(
    ({ ccn3, name, capital, population, region, subregion, borders, tld, languages, flags }) => {
      countries.push({
        id: ccn3,
        name: name.common,
        nativeName: name.official,
        capital: capital?.[0] || null,
        population,
        region,
        subregion,
        borders,
        tld,
        languages: languages && Object.values(languages),
        flag: flags?.png,
      });
    }
  );
  return countries;
};

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  tagTypes: ['Countries'],
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Countries', id })), 'Countries']
          : ['Countries'],
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const { capital, debouncedSearchTerm, population, language, region } = _arg;

        const allCountries = await fetchWithBQ('all/');
        if (allCountries.error) throw allCountries.error;

        let data = sortBy(transformedResponse(allCountries.data), ['name']);

        if (!isEmpty(capital)) {
          data = data.filter(({ capital: cap }) =>
            cap?.toLowerCase().includes(capital.toLowerCase())
          );
        }

        if (!isEmpty(debouncedSearchTerm)) {
          data = data.filter(({ name }) =>
            name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
          );
        }

        if (population && population >= 0) {
          data = data.filter(({ population: pop }) => pop >= population);
        }

        if (language) {
          data = data.filter(({ languages }) => languages?.includes(language));
        }

        if (region) {
          data = data.filter(({ region: reg }) => reg.includes(region));
        }

        return allCountries.data ? { data: data } : { error: allCountries.error };
      },
    }),
  }),
});

export const countriesApiCodes = createApi({
  reducerPath: 'countriesCodesApi',
  keepUnusedDataFor: 999_999,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v2/all' }),
  endpoints: (builder) => ({
    getAllCodes: builder.query({
      query: () => `?fields=name,alpha3Code`,
    }),
  }),
});

export const { useGetAllCountriesQuery } = countriesApi;
export const { useGetAllCodesQuery } = countriesApiCodes;
