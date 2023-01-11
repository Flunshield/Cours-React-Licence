import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/GameControl.css';
import ListPlayersCard from "./ListPlayersCard";
import { API_GET_ALL_HERO, API_GET_ALL_BADGUY } from "../Constant/Constant";

export default function GameControl() {
  const [listHero, setListHero] = useState<ListPlayer[]>([])
  const [listbadGuy, setListBadGuy] = useState<ListPlayer[]>([])
  const [isUseHero, setIsUseHero] = useState(false)
  const [isUsebadGuy, setIsUseBadGuy] = useState(false)
  const [isMaj, setIsMaj] = useState(0)
  const [numberTypePersonnage, setNumberTypePersonnage] = useState(0)


  //Get all Hero
  const GetHeros = async () => {
    try {
      await fetch(API_GET_ALL_HERO, {
        method: 'GET'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          return response.json();
        })
        .then((result: ListPlayer[]) => {
          setListHero(result)
          setIsUseHero(true)
          setIsUseBadGuy(false)
          setNumberTypePersonnage(1)
        });
    } catch (error) {
      console.log(error);
    }
  }

  //Get all Enemies
  const GetEnemies = async () => {
    try {
      await fetch(API_GET_ALL_BADGUY, {
        method: 'GET'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }
          return response.json();
        })
        .then((result: ListPlayer[]) => {
          setListBadGuy(result);
          setIsUseBadGuy(true)
          setIsUseHero(false)
          setNumberTypePersonnage(2)
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isMaj == 1) {
      GetHeros()
      setIsMaj(0)
    }
    if (isMaj == 2) {
      GetEnemies()
      setIsMaj(0)
    }
  }, [isMaj])

  const listPlayers = () => {
    setIsUseHero(false)
    setIsUseBadGuy(false)
  }
  return (
    <>
      <div className="btn">
        <div className="btnUnit">
          {isUseHero && !isUsebadGuy ?
            <Button variant="contained" onClick={listPlayers}>
              Fermer la liste des héros
            </Button>
            :
            <Button variant="contained" onClick={GetHeros}>
              Ouvrir la liste des héros
            </Button>}
        </div>

        <div>
          {isUsebadGuy && !isUseHero ?
            <Button variant="contained" onClick={listPlayers}>
              Fermer la liste des ennemies
            </Button>
            :
            <Button variant="contained" onClick={GetEnemies}>
              Ouvrir la liste des ennemies
            </Button>}
        </div>
      </div>
      {isUseHero && !isUsebadGuy && listHero.map((listHero) => {
        return <ListPlayersCard key={listHero.id} listPlayer={listHero} numberTypePersonnage={numberTypePersonnage} isMaj={isMaj} setIsMaj={setIsMaj} />;
      })}
      {isUsebadGuy && !isUseHero && listbadGuy.map((listbadGuy) => {
        return <ListPlayersCard key={listbadGuy.id} listPlayer={listbadGuy} numberTypePersonnage={numberTypePersonnage} isMaj={isMaj} setIsMaj={setIsMaj} />;
      })}
    </>
  );
}
