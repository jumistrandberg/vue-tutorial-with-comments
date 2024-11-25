<script setup>
import { ref } from "vue";
let people = ref(["Alex", "Joe", "Sam"]);
const books = ref([
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    year: 1949,
  },
]);

const movies = ref([
  ["The Shawshank Redemption", "The Godfather", "The Dark Knight"],
  ["Pulp Fiction", "Fight Club", "The Silence of the Lambs"],
  ["Inception", "The Prestige", "The Matrix"],
  [
    "The Lord of the Rings: The Return of the King",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Fellowship of the Ring",
  ],
]);

const games = ref({
  id: 1,
  title: 'Epic Adventure Game',
  genre: ['Action', 'Adventure', 'RPG'],
  platform: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
  releaseDate: '2022-03-15',
  developer: {
    name: 'Awesome Game Studios',
    location: 'San Francisco, CA',
    teamSize: 50
  },
  ratings: {
    metacritic: 90,
    user: 4.8
  },
  features: {
    singlePlayer: true,
    multiplayer: true,
    onlineCoop: true,
    splitScreen: false
  },
  systemRequirements: {
    minimum: {
      os: 'Windows 10',
      processor: 'Intel Core i5',
      memory: '8 GB RAM',
      graphics: 'NVIDIA GTX 970',
      storage: '50 GB available space'
    },
    recommended: {
      os: 'Windows 11',
      processor: 'Intel Core i7',
      memory: '16 GB RAM',
      graphics: 'NVIDIA RTX 3080',
      storage: '100 GB available space'
    }
  },
  storyline: 'Embark on a thrilling adventure to save the world from impending doom!',
  characters: ['Hero', 'Sidekick', 'Villain', 'NPCs'],
  achievements: [
    { id: 1, name: 'Master Explorer', description: 'Explore every corner of the game world' },
    { id: 2, name: 'Legendary Warrior', description: 'Complete the game on the hardest difficulty' }
  ]
})

const complexGamesObj = ref({
  game1: {
    title: 'Space Explorer',
    genre: 'Sci-Fi',
    platform: 'PC',
    releaseDate: '2023-05-20'
  },
  game2: {
    title: 'Fantasy Quest',
    genre: 'Fantasy',
    platform: 'PlayStation',
    releaseDate: '2023-07-10'
  },
  movie1: {
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Sci-Fi',
    releaseDate: '2010-07-16'
  },
  movie2: {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    releaseDate: '1994-09-23'
  },
  book1: {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationYear: 1965
  },
  book2: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    publicationYear: 1960
  }
})
</script>

<template>
  // Index is optional but good practice to use it to avoid issues with
  duplicate keys // Bind the index to the key attribute with shorthand for
  v-bind
  <p v-for="(person, index) in people" :key="index">{{ person }}</p>

  <h3>Books array of objects</h3>
  <ul v-for="({ id, title, author, genre, year }, index) in books" :key="index">
    <li>ID: {{ id }}</li>
    <li>Title: {{ title }}</li>
    <li>Author: {{ author }}</li>
    <li>Genre: {{ genre }}</li>
    <li>Year: {{ year }}</li>
  </ul>

  <h3>Movies array of arrays</h3>
  <ul v-for="(movie, index) in movies" :key="index">
    <li v-for="(m, index) in movie" :key="index">{{ m }}</li>
  </ul>

  <h3>Games, object of objects</h3>
  <ul v-for="(value, keys, index) in games" :key="index">
    {{
      index
    }},
    {{
      keys
    }},
    {{
      value
    }}
  </ul>

  <h3>Complex games object of objects</h3>
  <ul v-for="(game, index) in complexGamesObj" :key="index">
    <!-- Getting all objects  -->
     <li>{{ game }}</li>
     <br />
     <!-- Getting single value from object  -->
      <li v-for="(property, i) in game" :key="i">{{ property }}</li>
  </ul>
</template>
