import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { API_DELETE_HERO, API_DELETE_BADGUY } from "../Constant/Constant";

export default function DeletePlayer() {
    const [heroDeleted, setHeroDeleted] = useState<string | undefined>("")
    const [badGuyDeleted, setBadGuyDeleted] = useState<string | undefined>("")


    const [show, setShow] = useState(true);
    const [valueHero, setValueHero] = useState(0);
    const [valuebadGuy, setValuebadGuy] = useState(0);

    const DeleteHero = async (id: number) => {
        try {
            await fetch(API_DELETE_HERO, {
                method: 'DELETE',
                body: JSON.stringify({ id: id }),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error ${response.status}`);
                    };
                })
            setBadGuyDeleted("")
            setHeroDeleted("Le héros a bien été supprimé !")
            setShow(true);
        } catch (error) {
            console.log(error);
            alert("Le héros que vous souhaitez supprimer n'existe pas.");
        }
    };

    const DeletebadGuy = async (id: number) => {
        try {
            await fetch(API_DELETE_BADGUY, {
                method: 'DELETE',
                body: JSON.stringify({ id: id }),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error ${response.status}`);
                    };
                })
            setHeroDeleted("")
            setBadGuyDeleted("L'ennemie a bien été supprimé !")
            setShow(true);
        } catch (error) {
            console.log(error);
            alert("Le BadGuy que vous souhaitez supprimer n'existe pas.")
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
                <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous supprimerez le héros sélectionné !</p>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField type={'number'} id="hero" value={valueHero} onChange={(e) => setValueHero(parseInt(e.target.value))} variant="outlined" />
                </Box>
                <Button variant="contained" className="" onClick={() => DeleteHero(valueHero)}>
                    Supprimer un héros
                </Button>
                {show && heroDeleted && <p>{heroDeleted}</p>}
            </Box>
            <Box sx={{ width: '100%' }}>
                <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous supprimerez l'ennemie sélectionné :</p>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField type={'number'} id="enemie" value={valuebadGuy} onChange={(e) => setValuebadGuy(parseInt(e.target.value))} variant="outlined" />
                </Box>
                <Button variant="contained" className="" onClick={() => DeletebadGuy(valuebadGuy)}>
                Supprimer un ennemi
                </Button>
                {show && badGuyDeleted && <p>{badGuyDeleted}</p>}
            </Box>
        </Box>
    );
};

