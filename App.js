// App.js
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/Charmander.jpeg'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };

  const squirtleData = {
    name: 'Squirtle',
    image: require('./assets/Squirtle.jpeg'),
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };

  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/Bulbasaur.jpeg'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  };

  const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/Pikachu.jpeg'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };

  const jigglypuffData = {
    name: 'Jigglypuff',
    image: require('./assets/jigglypuff.jpeg'),
    type: 'Fairy',
    hp: 115,
    moves: ['Sing', 'Double Slap', 'Pound', 'Rollout'],
    weaknesses: ['Steel', 'Poison'],
  };

  const eeveeData = {
    name: 'Eevee',
    image: require('./assets/eevee.jpeg'),
    type: 'Normal',
    hp: 55,
    moves: ['Tackle', 'Tail Whip', 'Growl', 'Quick Attack'],
    weaknesses: ['Fighting'],
  };

  const mewtwoData = {
    name: 'Mewtwo',
    image: require('./assets/Mewtwo.jpeg'),
    type: 'Psychic',
    hp: 106,
    moves: ['Confusion', 'Psychic', 'Barrier', 'Swift'],
    weaknesses: ['Bug', 'Dark', 'Ghost'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...pikachuData} />
        <PokemonCard {...jigglypuffData} />
        <PokemonCard {...eeveeData} />
        <PokemonCard {...mewtwoData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
