import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Colors, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from '../components/CardComponent';
import { getAllCounties } from '../services/countriesService';

const MainScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const data = await getAllCounties();
      if (data) {
        const countriesInfo = [];
        data.forEach(({ ccn3, name, capital, population, region, flags }) => {
          countriesInfo.push({
            id: ccn3,
            name: name.common,
            capital: capital?.[0] || null,
            population,
            region,
            flag: flags?.png,
          });
        });
        setCountries(countriesInfo);
      }
    };

    getCountries();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search for a country..."
        value={text}
        mode="flat"
        onChangeText={(value) => setText(value)}
        selectionColor="#4F4F4F"
        style={styles.textInput}
        left={<TextInput.Icon name="magnify" color="#4F4F4F" />}
      />
      {countries.length === 0 && <ActivityIndicator animating={true} color={Colors.black} />}
      {countries.length > 0 && (
        <FlatList
          data={countries}
          renderItem={({ item: country }) => {
            return <CardComponent key={country.id} country={country} navigation={navigation} />;
          }}
          keyExtractor={(item) => item.id}
          style={styles.scrollView}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
  },
  scrollView: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  textInput: {
    margin: 20,
    backgroundColor: 'white',
    color: '#4F4F4F',
    elevation: 2,
  },
});

export default MainScreen;
