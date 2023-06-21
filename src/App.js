import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';
import { BUSINESSES } from './components/businesses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.png" className="App-logo" alt="logo" />

        <img src='/images/banner.png' className='App-banner' alt='banner'/>
        <h1 className='title'>Search your restaurant...</h1>

        <SearchBar />
      </header>


        <BusinessList listOfBusinesses={BUSINESSES} />


      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
