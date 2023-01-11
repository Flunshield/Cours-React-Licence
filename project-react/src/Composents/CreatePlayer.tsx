import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { API_LINK_POST_HERO, API_LINK_POST_ENEMY } from "../Constant/Constant";


export default function CreatePlayer() {
  const [herocreated, setHerocreated] = useState<string|undefined>(undefined)
  const [enemyCreated, setEnemyCreated] = useState<string|undefined>(undefined)


  const [show, setShow] = useState(true);

  const PostNewHero =  async () => {
    await fetch(API_LINK_POST_HERO, {
      method: 'POST',
    })
    setEnemyCreated("")
    setHerocreated("Le héro a été créé !")
    setShow(true);
  };

  const PostNewEnemy =  async () => {
    await fetch(API_LINK_POST_ENEMY, {
      method: 'POST',
    })
    setHerocreated("")
    setEnemyCreated("L'enemie a été créé !")
    setShow(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
        setShow(false);
    }, 2000);

    return () => {
        clearTimeout(timeout);
    }
}, [show]);

  return (
    <Box>
      <Box sx={{ width: '100%' }}>
      <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous génèrerez un Héro !</p>
      <Button variant="contained"  className="" onClick={PostNewHero}>
        Généré un Héro
      </Button>
        {show && herocreated && <p>{herocreated}</p>}
      </Box>
      <Box sx={{ width: '100%' }}>
      <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous génèrerez un Enemie !</p>
      <Button variant="contained"  className="" onClick={PostNewEnemy}>
        Généré un Enemie
      </Button>
        {show && enemyCreated && <p>{enemyCreated}</p>}
      </Box>
    </Box>
  );
};

