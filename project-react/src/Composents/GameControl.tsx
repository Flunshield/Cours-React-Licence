import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/GameControl.css';
import ListPlayersCard from "./ListPlayersCard";
import { API_LINK_GET_HERO, API_LINK_GET_ENEMY } from "../Constant/Constant";

export default function GameControl() {
    const [listHero, setListHero] = useState<ListPlayer[]>([])
    const [listEnemy, setListEnemy] = useState<ListPlayer[]>([])
    const [isUseHero, setIsUseHero] = useState(false)
    const [isUseEnemy, setIsUseEnemy] = useState(false)
    const [isMaj, setIsMaj] = useState(0)
    const [typePersonnage, setTypePersonnage] = useState(0)

    
    //Get all Hero
    const GetHeros = async () => {
      await fetch(API_LINK_GET_HERO, {
        method: 'GET'
      })
      .then((res) => res.json())
      .then((result: ListPlayer[]) => {
        setListHero(result);
        setIsUseHero(true)
        setIsUseEnemy(false)
        setTypePersonnage(1)
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
          setIsUseEnemy(true)
          setIsUseHero(false)
          setTypePersonnage(2)
        });
    }

    useEffect(() => {
      if(isMaj == 1)
      {
        GetHeros()
        setIsMaj(0)
      }
      if(isMaj == 2)
      {
      GetEnemies()
      setIsMaj(0)
    }
    }, [isMaj])

    console.log(typePersonnage)

  const listPlayers = () =>
  {
    setIsUseHero(false)
    setIsUseEnemy(false)
  }
  return (
    <>
      <div className="btn">
        <div className="btnUnit">
          {isUseHero && !isUseEnemy ?
          <Button variant="contained" onClick={listPlayers}>
            Fermer la liste des héros
          </Button>
          :
          <Button variant="contained" onClick={GetHeros}>
            Ouvrir la liste des héros
          </Button>}
        </div>

        <div>
          {isUseEnemy && !isUseHero ?
          <Button variant="contained" onClick={listPlayers}>
            Fermer la liste des enemies
          </Button>
          :
          <Button variant="contained" onClick={GetEnemies}>
            Ouvrir la liste des enemies
          </Button>}
        </div>
      </div>
      {isUseHero && !isUseEnemy && listHero.map((listHero) => {
        return <ListPlayersCard key={listHero.id} listPlayer={listHero} typePersonnage={typePersonnage} isMaj={isMaj} setIsMaj={setIsMaj}/>;
      })}
      {isUseEnemy && !isUseHero && listEnemy.map((listEnemy) => {
        return <ListPlayersCard key={listEnemy.id} listPlayer={listEnemy} typePersonnage={typePersonnage} isMaj={isMaj} setIsMaj={setIsMaj} />;
      })}
    </>
  );
}
