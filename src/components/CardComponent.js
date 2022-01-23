import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Subheading } from 'react-native-paper';

const CardComponent = React.memo(({ navigation, country }, ...props) => {
  return (
    <Card style={styles.card} onPress={() => navigation.navigate('Country', country)}>
      <Card.Cover source={{ uri: `${country.flag}` }} resizeMethod="auto" resizeMode="cover" />
      <Card.Title title={country.name} />
      <Card.Content>
        <Paragraph>
          <Subheading>Population:</Subheading> {country.population.toLocaleString('en-US')}
        </Paragraph>
        <Paragraph>
          <Subheading>Region:</Subheading> {country.region}
        </Paragraph>
        <Paragraph>
          <Subheading>Capital:</Subheading> {country.capital}
        </Paragraph>
      </Card.Content>
    </Card>
  );
});

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    marginBottom: 15,
    elevation: 2,
    borderRadius: 5,
  },
});

export default CardComponent;
