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
  const machampData = {
    name: 'Machamp',
    image: require('./assets/machamp.jpeg'),
    type: 'Fighting',
    hp: 90,
    moves: ['Karate Chop', 'Cross Chop', 'Seismic Toss', 'Bulk Up'],
    weaknesses: ['Psychic', 'Flying'],
  };
  
  const laprasData = {
    image: require('./assets/lapras.jpeg'),
    name: 'Lapras',
    type: 'Water',
    hp: 130,
    moves: ['Surf', 'Ice Beam', 'Hydro Pump', 'Sing'],
    weaknesses: ['Electric', 'Grass', 'Fighting', 'Rock'],
  };
  
  const alakazamData = {
    name: 'Alakazam',
    image: require('./assets/alakazam.png'),
    type: 'Psychic',
    hp: 55,
    moves: ['Psychic', 'Future Sight', 'Calm Mind', 'Recover'],
    weaknesses: ['Bug', 'Ghost', 'Dark'],
  };
  
  const aerodactylData = {
    name: 'Aerodactyl',
    image: require('./assets/Aerodactyl.jpeg'),
    type: 'Rock',
    hp: 80,
    moves: ['Rock Slide', 'Fly', 'Ancient Power', 'Crunch'],
    weaknesses: ['Water', 'Electric', 'Ice', 'Steel'],
  };
  
  const gyaradosData = {
    name: 'Gyarados',
    image: require('./assets/Gyarados.jpeg'),
    type: 'Water',
    hp: 95,
    moves: ['Hydro Pump', 'Dragon Dance', 'Bite', 'Twister'],
    weaknesses: ['Electric', 'Rock'],
  };
  
  const jolteonData = {
    name: 'Jolteon',
    image: require('./assets/Jolteon.png'),
    type: 'Electric',
    hp: 65,
    moves: ['Thunderbolt', 'Thunder Wave', 'Quick Attack', 'Pin Missile'],
    weaknesses: ['Ground'],
  };
  
  const dragoniteData = {
    name: 'Dragonite',
    image: require('./assets/dragonite.jpeg'),
    type: 'Dragon',
    hp: 91,
    moves: ['Dragon Breath', 'Dragon Claw', 'Thunder Wave', 'Fly'],
    weaknesses: ['Dragon', 'Ice', 'Fairy'],
  };
  
  const machopData = {
    name: 'Machop',
    image: require('./assets/Machop.jpeg'),
    type: 'Fighting',
    hp: 70,
    moves: ['Low Kick', 'Karate Chop', 'Seismic Toss', 'Focus Energy'],
    weaknesses: ['Psychic', 'Flying'],
  };
  
  const flareonData = {
    name: 'Flareon',
    image: require('./assets/Flareon.png'),
    type: 'Fire',
    hp: 65,
    moves: ['Fire Blast', 'Flamethrower', 'Quick Attack', 'Smog'],
    weaknesses: ['Water', 'Rock'],
  };
  
  const vaporeonData = {
    name: 'Vaporeon',
    image: require('./assets/Vaporeon.jpeg'),
    type: 'Water',
    hp: 130,
    moves: ['Hydro Pump', 'Aurora Beam', 'Quick Attack', 'Water Gun'],
    weaknesses: ['Electric', 'Grass'],
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
        <PokemonCard {...machampData} />
        <PokemonCard {...laprasData} />
        <PokemonCard {...alakazamData} />
        <PokemonCard {...aerodactylData} />
        <PokemonCard {...gyaradosData} />
        <PokemonCard {...jolteonData} />
        <PokemonCard {...dragoniteData} />
        <PokemonCard {...machopData} />
        <PokemonCard {...flareonData} />
        <PokemonCard {...vaporeonData} />
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
