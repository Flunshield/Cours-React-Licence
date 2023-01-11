import { Grid, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Alert } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';
import { useState } from "react";

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
      const equipWeapon = (IdPlayer: number) => {
        setIsMaj(0)
      fetch(`https://localhost:7148/equipWeapon/${IdPlayer}`, {
        method: 'PUT'
      })
        setIsMaj(typePersonnage)
    };

    const equipWeaponEnemy = (IdPlayer: number) => {
      setIsMaj(0)
    fetch(`https://localhost:7148/equipWeaponEnemy/${IdPlayer}`, {
      method: 'PUT'
    })
      setIsMaj(typePersonnage)
  };

    const desequipWeaponEnemy = (IdPlayer: number) => {
      setIsMaj(0)
      fetch(`https://localhost:7148/removeWeaponEnemy/${IdPlayer}`, {
        method: 'PUT'
      })
        setIsMaj(typePersonnage)
    };

    const removeWeaponHero = (IdPlayer: number) => {
      setIsMaj(0)
      fetch(`https://localhost:7148/removeWeaponHero/${IdPlayer}`, {
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
                      <TableCell align="center">{listPlayer.classePlayer}</TableCell>
                      <TableCell align="center">{listPlayer.vitality}</TableCell>
                      <TableCell align="center">{listPlayer.strength}</TableCell>
                      <TableCell align="center">{listPlayer.wisdom}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
      </Card>
      <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? equipWeapon(listPlayer.id) : equipWeaponEnemy(listPlayer.id)} className="btnListPlayerCard">
        Equiper l'arme du joueur
      </Button>
      <Button variant="contained" onClick={() => (isHero > 0 && isHero < 2) ? removeWeaponHero(listPlayer.id) : desequipWeaponEnemy(listPlayer.id)} className="btnListPlayerCard">
        Déséquiper l'arme du joueur
      </Button>
    </Grid>
  );
}

export default ListHeroCard;