import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Surface, Text, Title } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const CountryScreen = ({ route }) => {
  const { id, name, flag } = route?.params || {};

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
          <Text style={styles.subtitle}>Native Name:</Text>
          <Text style={styles.subtitle}>Population:</Text>
          <Text style={styles.subtitle}>Region:</Text>
          <Text style={styles.subtitle}>Sub Region:</Text>
          <Text style={styles.subtitle}>Capital:</Text>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: StatusBar.currentHeight - 25,
  },
  scrollView: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  flag: {
    height: 200,
    marginBottom: 20,
  },
  surface: {
    padding: 20,
    height: 'auto',
    elevation: 5,
    borderRadius: 5,
  },
  title: {
    paddingBottom: 20,
  },
  subtitle: {
    color: '#828282',
    fontWeight: 'bold',
    paddingBottom: 15,
  },
});
export default CountryScreen;
