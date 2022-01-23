import React, { useContext, useMemo } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Surface, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PreferencesContext } from '../context/PreferencesContext';
import { useGetAllCodesQuery } from '../services/countriesService';

const CountryScreen = ({ route }) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    flag,
    borders,
    tld,
    languages,
  } = route?.params || {};
  const { isThemeDark } = useContext(PreferencesContext);
  const { data: countriesCodes } = useGetAllCodesQuery();

  const borderCountries = useMemo(
    () => countriesCodes && Object.entries(countriesCodes).flat(2),
    [countriesCodes]
  );
  const filteredBorderCountries = useMemo(
    () =>
      borders &&
      borderCountries &&
      borderCountries.filter(({ alpha3Code }) => borders.includes(alpha3Code)),
    [borders, borderCountries]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.flag}
          resizeMethod="auto"
          resizeMode="cover"
          source={{ uri: `${flag}` }}
        />

        <Surface style={styles.surface}>
          <Title style={styles.title}>{name}</Title>
          <Text style={styles.subtitle}>
            Native Name: <Text style={styles.text}>{nativeName}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Population: <Text style={styles.text}>{population.toLocaleString('en-US')}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Region: <Text style={styles.text}>{region}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Sub Region: <Text style={styles.text}>{subregion}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Capital: <Text style={styles.text}>{capital}</Text>
          </Text>

          <Text style={styles.topLevelDomain}>
            Top Level Domain: <Text style={styles.text}>{tld}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Languages: <Text style={styles.text}>{languages.toString()}</Text>
          </Text>
        </Surface>
        {filteredBorderCountries && filteredBorderCountries.length > 0 && (
          <Surface style={styles.bordersRoot}>
            <Title style={styles.title}>Border countries</Title>
            <View style={styles.bordersView}>
              {filteredBorderCountries &&
                filteredBorderCountries.length > 0 &&
                filteredBorderCountries.map(({ name: countryName }, index) => (
                  <View key={index} style={isThemeDark ? styles.darkBorderItem : styles.borderItem}>
                    <Text style={isThemeDark ? styles.darkTextBorderItem : styles.textBorderItem}>
                      {countryName}
                    </Text>
                  </View>
                ))}
            </View>
          </Surface>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: StatusBar.currentHeight - 25,
    marginBottom: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  flag: {
    height: 200,
    marginTop: 15,
    marginBottom: 20,
    borderRadius: 3,
  },
  surface: {
    padding: 20,
    height: 'auto',
    elevation: 1,
    borderRadius: 5,
  },
  title: {
    paddingBottom: 20,
  },
  subtitle: {
    color: '#828282',
    fontWeight: 'bold',
    paddingBottom: 12,
  },
  text: {
    color: '#828282',
    paddingBottom: 15,
  },
  topLevelDomain: {
    color: '#828282',
    fontWeight: 'bold',
    paddingBottom: 12,
    marginTop: 20,
  },
  bordersRoot: {
    padding: 20,
    height: 'auto',
    elevation: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  bordersView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  borderItem: {
    padding: 6,
    marginBottom: 10,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#929292',
    borderRadius: 5,
  },
  darkBorderItem: {
    padding: 6,
    marginBottom: 10,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#121212',
    borderRadius: 5,
  },
  textBorderItem: {
    color: 'white',
  },
  darkTextBorderItem: {
    color: '#929292',
  },
});
export default CountryScreen;
