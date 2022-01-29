import { isEmpty } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors, Snackbar, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import CardComponent from '../components/CardComponent';
import PreferencesContext from '../context/PreferencesContext';
import { useDebounce } from '../hooks/useDebounce';
import { useGetAllCountriesQuery } from '../services/countriesService';

const MainScreen = ({ navigation }) => {
  const { isThemeDark } = useContext(PreferencesContext);
  const [text, setText] = useState();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const debouncedSearchTerm = useDebounce(text, 500);
  const { filterReducer } = useSelector((state) => state);

  const memoizedRenderFunc = useCallback(
    ({ item: country }) => {
      return <CardComponent key={country.id} country={country} navigation={navigation} />;
    },
    [navigation]
  );

  const {
    data: countries,
    isLoading,
    isFetching,
  } = useGetAllCountriesQuery({ ...filterReducer, debouncedSearchTerm });

  useEffect(() => {
    if (isEmpty(countries) && !isLoading) {
      setSnackbarVisible(true);
    }
  }, [countries, isLoading]);

  useEffect(() => {
    if (isFetching) {
      setSnackbarVisible(false);
    }
  }, [isFetching]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search for a country..."
        value={text}
        mode="flat"
        onChangeText={(value) => setText(value)}
        selectionColor="#4F4F4F"
        style={isThemeDark ? styles.textInputDark : styles.textInput}
        left={<TextInput.Icon name="magnify" color="#4F4F4F" />}
      />
      {(isLoading || isFetching) && (
        <ActivityIndicator
          size="large"
          animating={true}
          color={isThemeDark ? Colors.white : Colors.black}
          style={styles.activityIndicator}
        />
      )}
      {countries && !isFetching && !isLoading && (
        <FlatList
          data={countries}
          initialNumToRender={5}
          maxToRenderPerBatch={3}
          windowSize={7}
          renderItem={memoizedRenderFunc}
          keyExtractor={(item) => item.id}
          style={styles.scrollView}
          removeClippedSubviews={false}
        />
      )}
      {isEmpty(countries) && (
        <Snackbar
          visible={snackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
          duration={3000}
        >
          Countries not found!
        </Snackbar>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  textInput: {
    margin: 20,
    backgroundColor: 'white',
    color: '#4F4F4F',
    elevation: 2,
  },
  textInputDark: {
    margin: 20,
    backgroundColor: '#232323',
    color: 'black',
    elevation: 2,
  },
  activityIndicator: {
    height: '50%',
  },
});

export default MainScreen;
