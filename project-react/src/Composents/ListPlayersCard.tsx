import { Grid, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Alert } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';
import { useState } from "react";
import { API_PUT_EQUIP_WEAPON_ENEMY, API_PUT_EQUIP_WEAPON_HERO, API_PUT_REMOVE_WEAPON_ENEMY, API_PUT_REMOVE_WEAPON_HERO } from "../Constant/Constant";

interface ListHeroCardProps {
  listPlayer: ListPlayer;
  typePersonnage: number;
  setIsMaj: (n:number)=>void;
  isMaj: number;
};

const ListHeroCard = 
 ({ listPlayer,
  typePersonnage,
    setIsMaj 
  }: ListHeroCardProps) => {

    const [isHero] = useState(typePersonnage)
      const PutEquipWeapon = async (IdPlayer: number) => {
        setIsMaj(0)
      await fetch(API_PUT_EQUIP_WEAPON_HERO + IdPlayer, {
        method: 'PUT'
      })
        setIsMaj(typePersonnage)
    };
    const PutEquipWeaponEnemy = async (IdPlayer: number) => {
      setIsMaj(0)
    await fetch(API_PUT_EQUIP_WEAPON_ENEMY + IdPlayer, {
      method: 'PUT'
    })
      setIsMaj(typePersonnage)
  };
    const PutEsequipWeaponEnemy = async (IdPlayer: number) => {
      setIsMaj(0)
      await fetch(API_PUT_REMOVE_WEAPON_ENEMY + IdPlayer, {
        method: 'PUT'
      })
        setIsMaj(typePersonnage)
    };

    const PutRemoveWeaponHero = async (IdPlayer: number) => {
      setIsMaj(0)
      await fetch(API_PUT_REMOVE_WEAPON_HERO + IdPlayer, {
        method: 'PUT'
      })
        setIsMaj(typePersonnage)
    };

  return (
    <Grid className="GridListPlayerCard">
      <Card sx={{ maxWidth: 650}} className={'All'}>
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
      <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? PutEquipWeapon(listPlayer.id) : PutEquipWeaponEnemy(listPlayer.id)} className="btnListPlayerCard">
        Equiper l'arme du joueur
      </Button>
      <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? PutRemoveWeaponHero(listPlayer.id) : PutEsequipWeaponEnemy(listPlayer.id)} className="btnListPlayerCard">
        Déséquiper l'arme du joueur
      </Button>
    </Grid>
  );
}

export default ListHeroCard;