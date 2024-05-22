// screens/MealsScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const mealsData = [
  {
    id: 1,
    description: 'Carne',
    photo: require('../img/Carne.jpeg'),
  },
  {
    id: 2,
    description: 'Pizza',
    photo: require('../img/pizza.jpg'),
  },
  {
    id: 3,
    description: 'Hamburguesa',
    photo: require('../img/Hamburguesa.jpg'),
  },
  {
    id: 4,
    description: 'Pupusas',
    photo: require('../img/Pupusas.jpg'),
  },
  {
    id: 5,
    description: 'pollo',
    photo: require('../img/Pollo.jpg'),
  },
  {
    id: 6,
    description: 'relleno de guisquil',
    photo: require('../img/Relleno.jpg'),
  },
];

const MealsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mealsData.map((meal) => (
        <Card key={meal.id} style={styles.card}>
          <Card.Cover source={meal.photo} style={styles.image} />
          <Card.Content style={styles.content}>
            <Paragraph style={styles.description}>{meal.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f2f2f2',
  },
  card: {
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
});

export default MealsScreen;
