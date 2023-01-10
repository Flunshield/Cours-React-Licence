
import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Link, AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import React from 'react';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

type NavRoute = {
  route: string;
  label: string;
  displayLink: boolean;
};

export default function DrawerAppBar(props: Props) {

  const navItems: NavRoute[] = [
    {
      route: '/',
      label: 'Accueil',
      displayLink: true,
    },
    {
      route: '/books',
      label: 'Création de personnage',
      displayLink: true,
    },
  ];
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Acceuil
      </Typography>
      <Divider />
      <List>
        {navItems.map(
          (item) =>
            item.displayLink && (
              <ListItem key={item.route} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
            /* Ajouter ici le lien vers la nouvelle page */
                </ListItemButton>
              </ListItem>
            )
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography
            textAlign={'left'}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Commande du jeu
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            /* Ajouter ici le lien vers la nouvelle page */
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
