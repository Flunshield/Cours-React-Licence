import { Grid, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, IconButton } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';
import { useState } from "react";
import { API_DELETE_BADGUY, API_DELETE_HERO, API_PUT_EQUIP_WEAPON_BADGUY, API_PUT_EQUIP_WEAPON_HERO, API_PUT_REMOVE_WEAPON_BADGUY, API_PUT_REMOVE_WEAPON_HERO } from "../Constant/Constant";

interface ListPlayerCardProps {
  listPlayer: ListPlayer;
  numberTypePersonnage: number;
  setIsMaj: (n: number) => void;
  isMaj: number;
};

const ListPlayerCard =
  ({ listPlayer,
    numberTypePersonnage,
    setIsMaj
  }: ListPlayerCardProps) => {

    const [isHero] = useState(numberTypePersonnage)
    const PutEquipWeapon = async (IdPlayer: number) => {
      try {
        setIsMaj(0)
        await fetch(API_PUT_EQUIP_WEAPON_HERO + IdPlayer, {
          method: 'PUT'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            };
          })
        setIsMaj(numberTypePersonnage)
      } catch (error) {
        console.log(error);
      }
    };
    const PutEquipWeaponBadGuy = async (IdPlayer: number) => {
      try {
        setIsMaj(0)
        await fetch(API_PUT_EQUIP_WEAPON_BADGUY + IdPlayer, {
          method: 'PUT'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            };
          })
        setIsMaj(numberTypePersonnage)
      } catch (error) {
        console.log(error);
      }
    };
    const PutRemovepWeaponBadGuy = async (IdPlayer: number) => {
      try {
        setIsMaj(0)
        await fetch(API_PUT_REMOVE_WEAPON_BADGUY + IdPlayer, {
          method: 'PUT'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            };
          })
        setIsMaj(numberTypePersonnage);
      } catch (error) {
        console.log(error);
      }
    };

    const PutRemoveWeaponHero = async (IdPlayer: number) => {
      try {
        setIsMaj(0)
        await fetch(API_PUT_REMOVE_WEAPON_HERO + IdPlayer, {
          method: 'PUT'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            };
          })
        setIsMaj(numberTypePersonnage)
      } catch (error) {
        console.log(error);
      }
    };

    const DeleteHero = async (id: number) => {
      try {
        await fetch(API_DELETE_HERO, {
          method: 'DELETE',
          body: JSON.stringify({ id: id }),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            };
          })
        setIsMaj(numberTypePersonnage)
      } catch (error) {
        console.log(error);
        alert("Le héros que vous souhaitez supprimer n'existe pas.");
      }
    };

    const DeletebadGuy = async (id: number) => {
      try {
        await fetch(API_DELETE_BADGUY, {
          method: 'DELETE',
          body: JSON.stringify({ id: id }),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error ${response.status}`);
            };
          })
        setIsMaj(numberTypePersonnage)
      } catch (error) {
        console.log(error);
        alert("Le BadGuy que vous souhaitez supprimer n'existe pas.")
      }
    };

    return (
      <Grid className="GridListPlayerCard">
        <Card sx={{ maxWidth: 650 }} className={'All'}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nom du personnage</TableCell>
                  <TableCell align="right">Id du personnage</TableCell>
                  <TableCell align="right">Classe du personnage</TableCell>
                  <TableCell align="right">Vitalité du personnage</TableCell>
                  <TableCell align="right">Force du personnage</TableCell>
                  <TableCell align="right">Sagesse du personnage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className={'All'}
                >
                  <TableCell component="th" scope="row">
                    {listPlayer.name}
                  </TableCell>
                  <TableCell align="center">{listPlayer.id}</TableCell>
                  <TableCell align="center">{listPlayer.classePlayer}</TableCell>
                  <TableCell align="center">{listPlayer.vitality}</TableCell>
                  <TableCell align="center">{listPlayer.strength}</TableCell>
                  <TableCell align="center">{listPlayer.wisdom}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <div className="btnListPlayerCardGroup">
          <div>
            <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? PutEquipWeapon(listPlayer.id) : PutEquipWeaponBadGuy(listPlayer.id)} className="btnListPlayerCard">
              Équiper l'arme du joueur
            </Button>
            <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? PutRemoveWeaponHero(listPlayer.id) : PutRemovepWeaponBadGuy(listPlayer.id)} className="btnListPlayerCard">
              Retirer l'arme du joueur
            </Button>
          </div>
          <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? DeleteHero(listPlayer.id) : DeletebadGuy(listPlayer.id)} className="btnListPlayerCard">
            Supprimer joueur
          </Button>
        </div>
      </Grid>
    );
  }

export default ListPlayerCard;