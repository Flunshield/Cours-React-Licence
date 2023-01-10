import { Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { ListPlayer } from "../Interfaces/ListPlayer";
import ListPlayerCard from "./ListPlayerCard";

export default function GameControl() {
    const [listPlayer, setlistPlayer] = useState<ListPlayer[]>([])
    const [isUse, setIsUse] = useState(false)
    const [isPlayerLoading, setisPlayerLoading] = useState(false)
    const API_LINK = "https://localhost:7148/getAllHeroes"
    const fetchData = async () => {
      await fetch(API_LINK, {
        method: 'GET'
      })
      .then((res) => res.json())
      .then((result: ListPlayer[]) => {
        setlistPlayer(result);
        setisPlayerLoading(true)
        
      });
  }

  useEffect(() => {

  }, [isUse])

  const lookHeros = () =>
  {
    setIsUse(!isUse)
  }
  console.log(listPlayer)
  return (
<>
      <Grid
        spacing={'16'}
        justifyContent={'center'}
        marginTop={10}
      >
        <Button variant="contained" onClick={lookHeros}>
          {isUse ? 
          "Fermer le composant"
          :
          "Ouvrir le composant"}
        </Button>
        {isUse && <div>
        <Button variant="contained" onClick={fetchData}>
          {isPlayerLoading ? 
          "Mettre à jour la liste des héros"
          :
          "Afficher la liste des héros"
          }
          </Button>
        {listPlayer.map((listPlayer) => {
          return <ListPlayerCard key={listPlayer.id} listPlayer={listPlayer} />;
        })}
        </div>}
      </Grid>
    </>
  );
}
