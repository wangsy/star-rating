import logo from './logo.svg';
import './App.css';
import React from "react";
import ColorList from "./components/ColorList";
import AddColorForm from './components/AddColorForm';

function App() {
  return (
  <>
    <AddColorForm />
    <ColorList />
  </>);
}

export default App;
