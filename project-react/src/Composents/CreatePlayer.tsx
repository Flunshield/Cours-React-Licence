import { Box, Button, Paper, Step, StepLabel, Stepper, TextField } from "@mui/material";
import { Http2ServerRequest } from "http2";
import { SetStateAction, useEffect, useState } from "react";
import { ListPlayer } from "../Interfaces/ListPlayer";
import ListPlayersCard from "./ListPlayersCard";


export default function CreatePlayer() {
  const [herocreated, setHerocreated] = useState<string>("")
  const [enemyCreated, setEnemyCreated] = useState<string>("")
  const API_LINK_POST_HERO = "https://localhost:7148/addHero"
  const API_LINK_POST_ENEMY = "https://localhost:7148/addEnemy"

  const [show, setShow] = useState(true);

  const PostNewHero =  async () => {
    await fetch(API_LINK_POST_HERO, {
      method: 'POST',
    })
    setHerocreated("Le héro a été créé !")
    setShow(true);
  };

  const PostNewEnemy =  async () => {
    await fetch(API_LINK_POST_ENEMY, {
      method: 'POST',
    })
    setEnemyCreated("L'enemie a été créé !")
    setShow(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
        setShow(false);
    }, 2000);

    return () => {
        clearTimeout(timeout);
    }
}, [herocreated, enemyCreated]);

  return (
    <Box>
      <h1 >Bienvenue sur la page de créaton de personnage</h1>
      <p>Lorsque vous cliquerez sur le bouton "Créer un héro" ou "Créer un Enemmie", le jeu vous génèrera un personnage aléatoirement.</p>
      <Box sx={{ width: '100%' }}>
      <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous génèrerez un Héro !</p>
      <Button variant="contained"  className="" onClick={PostNewHero}>
        Généré un Héro
      </Button>
        {show && <p>{herocreated}</p>}
      </Box>
      <Box sx={{ width: '100%' }}>
      <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous génèrerez un Enemie !</p>
      <Button variant="contained"  className="" onClick={PostNewEnemy}>
        Généré un Enemie
      </Button>
        {show && <p>{enemyCreated}</p>}
      </Box>
    </Box>
  );
};

