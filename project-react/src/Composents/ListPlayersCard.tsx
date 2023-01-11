import { Grid, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';
import { useState } from "react";
import { API_PUT_EQUIP_WEAPON_BADGUY, API_PUT_EQUIP_WEAPON_HERO, API_PUT_REMOVE_WEAPON_BADGUY, API_PUT_REMOVE_WEAPON_HERO } from "../Constant/Constant";

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
        <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? PutEquipWeapon(listPlayer.id) : PutEquipWeaponBadGuy(listPlayer.id)} className="btnListPlayerCard">
          Équiper l'arme du joueur
        </Button>
        <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? PutRemoveWeaponHero(listPlayer.id) : PutRemovepWeaponBadGuy(listPlayer.id)} className="btnListPlayerCard">
          Retirer l'arme du joueur
        </Button>
      </Grid>
    );
  }

export default ListPlayerCard;