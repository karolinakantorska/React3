import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import FavoriteList from './favoriteList.js'


/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

const profilesArray = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const usersArray  = [
   {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
];

const moviesArray  = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  render() {
    console.log('props', this.props)
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

		<div>
			<FavoriteList profilesObject = {profilesArray} usersObject = {usersArray} noviesobject = {moviesArray}/>
		</div>

      </div>
    );
  }
}

          

export default App;
