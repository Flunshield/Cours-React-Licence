import { Grid, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';

type ListHeroCardProps = {
  listHero: ListPlayer;
};

export default function ListHeroCard({ listHero }: ListHeroCardProps) {
  return (
    <Grid>
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
                      {listHero.name}
                      </TableCell>
                      <TableCell align="center">{listHero.classePlayer}</TableCell>
                      <TableCell align="center">{listHero.vitality}</TableCell>
                      <TableCell align="center">{listHero.strength}</TableCell>
                      <TableCell align="center">{listHero.wisdom}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
      </Card>
    </Grid>
  );
}
