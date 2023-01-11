import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { API_LINK_POST_HERO, API_LINK_POST_BADGUY } from "../Constant/Constant";


export default function CreatePlayer() {
  const [heroCreated, setHeroCreated] = useState<string | undefined>(undefined)
  const [badGuyCreated, setBadGuyCreated] = useState<string | undefined>(undefined)


  const [show, setShow] = useState(true);

  const PostNewHero = async () => {
    try {
      await fetch(API_LINK_POST_HERO, {
        method: 'POST',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          };
        })
      setBadGuyCreated("")
      setHeroCreated("Le héro a été créé !")
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  const PostNewbadGuy = async () => {
    try {
      await fetch(API_LINK_POST_BADGUY, {
        method: 'POST',
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          };
        })
      setHeroCreated("")
      setBadGuyCreated("L'enemie a été créé !")
      setShow(true);
    } catch (error) {
      console.log(error);
    }
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
        <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous générerez un Héros !</p>
        <Button variant="contained" className="" onClick={PostNewHero}>
          Générer un Héros
        </Button>
        {show && heroCreated && <p>{heroCreated}</p>}
      </Box>
      <Box sx={{ width: '100%' }}>
        <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous générerez un ennemi !</p>
        <Button variant="contained" className="" onClick={PostNewbadGuy}>
        Générer un ennemi
        </Button>
        {show && badGuyCreated && <p>{badGuyCreated}</p>}
      </Box>
    </Box>
  );
};

