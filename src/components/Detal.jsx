import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const API_KEY = "0b9458f12dbb.d675b86451feac994ba5";
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";

const Detail = () => {
  const [character, setCharacter] = useState([]);
    const {id} = useParams()

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("no hay");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
   
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.namr} />
        </div>
    
)
};
export default Detail;
