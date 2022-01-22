import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Subheading } from 'react-native-paper';

const CardComponent = React.memo(
  (
    {
      navigation,
      country: { id, name, nativeName, population, region, subregion, capital, tld, flag, borders },
    },
    ...props
  ) => {
    return (
      <Card
        style={styles.card}
        onPress={() =>
          navigation.navigate('Country', {
            id,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            flag,
            borders,
            tld,
          })
        }
      >
        <Card.Cover source={{ uri: `${flag}` }} resizeMethod="auto" resizeMode="cover" />
        <Card.Title title={name} />
        <Card.Content>
          <Paragraph>
            <Subheading>Population:</Subheading> {population.toLocaleString('en-US')}
          </Paragraph>
          <Paragraph>
            <Subheading>Region:</Subheading> {region}
          </Paragraph>
          <Paragraph>
            <Subheading>Capital:</Subheading> {capital}
          </Paragraph>
        </Card.Content>
      </Card>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    marginBottom: 15,
    elevation: 2,
    borderRadius: 5,
  },
});

export default CardComponent;
