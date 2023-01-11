import { Grid, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';

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
      <Button variant="contained" onClick={() => setIsMaj(typePersonnage)} className="btnListPlayerCard">
        Equiper l'arme du joueur
      </Button>
    </Grid>
  );
}

export default ListHeroCard;