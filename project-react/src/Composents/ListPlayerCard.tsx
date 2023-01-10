import { Grid, Card, CardContent, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ListPlayer } from "../Interfaces/ListPlayer";
import '../Css/ListPlayerCard.css';

type ListPlayerCardProps = {
  listPlayer: ListPlayer;
};

export default function ListPlayerCard({ listPlayer }: ListPlayerCardProps) {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Card sx={{ maxWidth: 650}} className={'All'}>
          <CardContent>
            <TableContainer component={Paper}>
              <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nom du Héro</TableCell>
                    <TableCell align="right">Classe du Héro</TableCell>
                    <TableCell align="right">Vitalité du Héro</TableCell>
                    <TableCell align="right">Force du Héro</TableCell>
                    <TableCell align="right">Sagesse du Héro</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                      {listPlayer.name}
                      </TableCell>
                      <TableCell align="right">{listPlayer.classePlayer}</TableCell>
                      <TableCell align="right">{listPlayer.vitality}</TableCell>
                      <TableCell align="right">{listPlayer.strength}</TableCell>
                      <TableCell align="right">{listPlayer.wisdom}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
      </Card>
    </Grid>
  );
}
