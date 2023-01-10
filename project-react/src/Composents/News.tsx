import { Container, Box, Typography, Stack, SnackbarContent } from "@mui/material";


export default function News() {
  return (
    <Container maxWidth="sm">
    <Box sx={{ my: 4 }} textAlign={'center'}>
      <Typography variant="h4" component="h1" gutterBottom marginTop={10}>
        Bienvenue sur le jeu !
      </Typography>
      <Stack
        spacing={2}
        sx={{ maxWidth: 600 }}
        marginTop={10}
        marginBottom={10}
      >
        <label> Dernières news</label>
        <SnackbarContent message="Pour rappel, la maintenance hebdomadaire est le mardi" />
        <SnackbarContent message="Victor Hugo sera présent le 15 Octobre 1850 pour un event secret !" />
        <SnackbarContent message="Fusion des serveurs présent en 2023 !" />
      </Stack>
    </Box>
  </Container>
  );
}