import { Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { ListPlayer } from "../Interfaces/ListPlayer";
import ListHeroCard from "./ListHeroCard";

export default function GameControl() {
    const [listHero, setListHero] = useState<ListPlayer[]>([])
    const [listEnemy, setListEnemy] = useState<ListPlayer[]>([])
    const [isUse, setIsUse] = useState(false)
    const API_LINK_GET_HERO = "https://localhost:7148/getAllHeroes"
    const API_LINK_GET_ENEMY = "https://localhost:7148/getAllEnemys"
    
    //Get all Hero
    const GetHeros = async () => {
      await fetch(API_LINK_GET_HERO, {
        method: 'GET'
      })
      .then((res) => res.json())
      .then((result: ListPlayer[]) => {
        setListHero(result);
        setIsUse(true)
      });
  }

      //Get all Enemies
      const GetEnemies = async () => {
        await fetch(API_LINK_GET_ENEMY, {
          method: 'GET'
        })
        .then((res) => res.json())
        .then((result: ListPlayer[]) => {
          setListEnemy(result);
          setIsUse(true)
        });
    }

  const listPlayers = () =>
  {
    setIsUse(false)
  }
  return (
<>
      <Grid
        justifyContent={'center'}
        marginTop={10}
      >
        {isUse ?
        <Button variant="contained" onClick={listPlayers}>
          Fermer la liste des héros
        </Button>
        :
        <Button variant="contained" onClick={GetHeros}>
          Ouvrir la liste des héros
        </Button>}
      </Grid>

      <Grid
        justifyContent={'center'}
        marginTop={1}
      >
        {isUse ?
        <Button variant="contained" onClick={listPlayers}>
          Fermer la liste des enemies
        </Button>
        :
        <Button variant="contained" onClick={GetEnemies}>
          Ouvrir la liste des enemies
        </Button>}
        {isUse && listEnemy.map((listEnemy) => {
          return <ListHeroCard key={listEnemy.id} listHero={listEnemy} />;
        })}
      </Grid>
      
      {isUse && listHero.map((listHero) => {
        return <ListHeroCard key={listHero.id} listHero={listHero} />;
      })}
      {isUse && listEnemy.map((listEnemy) => {
        return <ListHeroCard key={listEnemy.id} listHero={listEnemy} />;
      })}
    </>
  );
}
