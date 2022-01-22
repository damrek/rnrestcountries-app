import { Slider } from '@miblanchard/react-native-slider';
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Caption, Subheading, ThemeProvider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
import { Appbar, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { darkTheme, defaultTheme } from '../../App';
import { PreferencesContext } from '../context/PreferencesContext';
import { change, cleanAll } from '../features/filter/filterSlice';

const regionList = [
  {
    label: '',
    value: '',
  },
  {
    label: 'Africa',
    value: 'Africa',
  },
  {
    label: 'America',
    value: 'Americas',
  },
  {
    label: 'Asia',
    value: 'Asia',
  },
  {
    label: 'Europe',
    value: 'Europe',
  },
  {
    label: 'Oceania',
    value: 'Oceania',
  },
];

const languageList = [
  {
    label: '',
    value: '',
  },
  {
    label: 'English',
    value: 'eng',
  },
  {
    label: 'Spanish',
    value: 'spa',
  },
];

function FiltersScreen() {
  const { isThemeDark } = useContext(PreferencesContext);
  const dispatch = useDispatch();
  const [capital, setCapital] = useState('');

  const [region, setRegion] = useState();
  const [showRegionDropDown, setShowRegionDropDown] = useState(false);

  const [language, setLanguage] = useState();
  const [showLanguageDropDown, setShowLanguageDropDown] = useState(false);

  const [population, setPopulation] = useState(0);

  const _handleClean = () => {
    setCapital('');
    setRegion(null);
    setLanguage(null);
    setPopulation(0);
    dispatch(cleanAll());
  };

  const _handleApply = () =>
    dispatch(
      change({
        capital,
        region,
        language,
        population,
      })
    );

  return (
    <View style={isThemeDark ? styles.darkContainer : styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Filters" />
        <Text onPress={_handleClean} style={isThemeDark ? styles.darkText : styles.text}>
          Clean all
        </Text>
        <Text onPress={_handleApply} style={isThemeDark ? styles.darkText : styles.text}>
          Apply
        </Text>
      </Appbar.Header>
      <TextInput
        placeholder="Search for a capital..."
        value={capital}
        mode="flat"
        onChangeText={(value) => setCapital(value)}
        selectionColor="#4F4F4F"
        style={isThemeDark ? styles.darkTextInput : styles.textInput}
        left={<TextInput.Icon name="magnify" color="#4F4F4F" />}
      />
      <SafeAreaView style={styles.selectDropdownContainer}>
        <ThemeProvider
          theme={
            isThemeDark
              ? darkTheme
              : {
                  ...defaultTheme,
                  colors: {
                    ...DefaultTheme.colors,
                    primary: 'white',
                    text: 'black',
                    background: 'white',
                  },
                }
          }
        >
          <DropDown
            key={`region-${region}`}
            label="Filter by region"
            mode="outlined"
            visible={showRegionDropDown}
            showDropDown={() => setShowRegionDropDown(true)}
            onDismiss={() => setShowRegionDropDown(false)}
            value={region}
            setValue={setRegion}
            list={regionList}
            dropDownItemTextStyle={styles.dropDownItemTextStyle}
            dropDownItemSelectedTextStyle={styles.dropDownItemSelectedTextStyle}
          />
          <View style={styles.spacerStyle} />
          <DropDown
            key={`language-${language}`}
            label="Filter by language"
            mode="outlined"
            visible={showLanguageDropDown}
            showDropDown={() => setShowLanguageDropDown(true)}
            onDismiss={() => setShowLanguageDropDown(false)}
            value={language}
            setValue={setLanguage}
            list={languageList}
            dropDownItemTextStyle={styles.dropDownItemTextStyle}
            dropDownItemSelectedTextStyle={styles.dropDownItemSelectedTextStyle}
          />
        </ThemeProvider>
        <View style={styles.spacerStyle} />
        <Subheading>Filter by population</Subheading>
        <Caption>{`Above than: ${population.toLocaleString('en-US')} M`}</Caption>
        <Slider
          value={population}
          minimumValue={0}
          maximumValue={300000000}
          onValueChange={(value) => setPopulation(value)}
          maximumTrackTintColor="#4F4F4F"
          minimumTrackTintColor="#828282"
          step={5_000_000}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#232323',
  },
  text: {
    marginRight: 20,
  },
  darkText: {
    marginRight: 20,
    color: 'white',
  },
  textInput: {
    margin: 20,
    backgroundColor: 'white',
    color: '#4F4F4F',
    elevation: 2,
  },
  darkTextInput: {
    margin: 20,
    backgroundColor: '#121212',
    color: '#4F4F4F',
    elevation: 2,
  },
  selectDropdownContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  spacerStyle: {
    marginBottom: 30,
  },
  dropDownItemTextStyle: {
    color: '#828282',
  },
  dropDownItemSelectedTextStyle: {
    color: 'black',
  },
});

export default FiltersScreen;
