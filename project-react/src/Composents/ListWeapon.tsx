import { Grid, Card, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import '../Css/ListPlayerCard.css';
import { WeaponsInterface } from "../Interfaces/WeaponsInterface";

interface ListWeaponProps {
  weaponSelect?: WeaponsInterface;
};

const ListWeapon =
  ({ weaponSelect }: ListWeaponProps) => {
    return (
      <Grid className="GridListPlayerCard">
        <Card sx={{ maxWidth: 650 }} className={'All'}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id de l'arme</TableCell>
                  <TableCell align="center">Nom de l'arme pour un héros</TableCell>
                  <TableCell align="center">Nom de l'arme pour un ennemie</TableCell>
                  <TableCell align="center">Bonus de force</TableCell>
                  <TableCell align="center">Bonus de sagesse</TableCell>
                  <TableCell align="center">Bonus de vitalité</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }} className={'All'}
                >
                  <TableCell component="th" scope="row">
                    {weaponSelect?.id}
                  </TableCell>
                  <TableCell align="center">{weaponSelect?.heroesNameArms}</TableCell>
                  <TableCell align="center">{weaponSelect?.enemysNameArms}</TableCell>
                  <TableCell align="center">{weaponSelect?.bonusStrength}</TableCell>
                  <TableCell align="center">{weaponSelect?.bonusWisdom}</TableCell>
                  <TableCell align="center">{weaponSelect?.bonusVitality}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    );
  }

export default ListWeapon;