import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Surface, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const CountryScreen = ({ route }) => {
  const { name, nativeName, population, region, subregion, capital, flag, borders, tld } =
    route?.params || {};

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
            Currencies: <Text style={styles.text}>{capital}</Text>
          </Text>
          <Text style={styles.subtitle}>
            Languages: <Text style={styles.text}>{capital}</Text>
          </Text>
        </Surface>
        {borders && borders.length > 0 && (
          <Surface style={styles.bordersRoot}>
            <Title style={styles.title}>Border countries</Title>
            <View style={styles.bordersView}>
              {borders &&
                borders.length > 0 &&
                borders.map((border, index) => (
                  <View key={index} style={styles.borderItem}>
                    <Text>{border}</Text>
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
  },
  borderItem: {
    width: '33%',
    padding: 3,
    alignItems: 'flex-start',
  },
});
export default CountryScreen;
