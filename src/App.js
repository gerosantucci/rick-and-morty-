import "./App.css";
import Form from "./components/Form";
import Detail from "./components/Detal";
import About from "./components/About";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";


const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY ="0b9458f12dbb.d675b86451feac994ba5"


function App() {
  //funciones
  const location = useLocation()
  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    const filtercharacter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filtercharacter);
  };
  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("no hay");
      }
    });
  }

  //funciones
  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} />  }
     
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
