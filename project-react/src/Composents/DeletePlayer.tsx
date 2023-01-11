import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { API_DELETE_HERO, API_DELETE_ENEMY } from "../Constant/Constant";

export default function DeletePlayer() {
    const [heroDeleted, setHeroDeleted] = useState<string | undefined>("")
    const [enemyDeleted, setEnemyDeleted] = useState<string | undefined>("")


    const [show, setShow] = useState(true);
    const [valueHero, setValueHero] = useState(0);
    const [valueEnemy, setValueEnemy] = useState(0);

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
            setEnemyDeleted("")
            setHeroDeleted("Le héro a bien été suprimé !")
            setShow(true);
        } catch (error) {
            console.log(error);
        }
    };

    const DeleteEnemy = async (id: number) => {
        try {
            console.log(id);
            await fetch(API_DELETE_ENEMY, {
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
            setEnemyDeleted("L'enemie a bien été suprimé !")
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
                <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous suprimerez l'héro sélectioné !</p>
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
                    Suprimer un Héro
                </Button>
                {show && heroDeleted && <p>{heroDeleted}</p>}
            </Box>
            <Box sx={{ width: '100%' }}>
                <p>Lorsque vous cliquerez sur le bouton ci-dessous, vous suprimerez l'énemie sélectioné :</p>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField type={'number'} id="enemie" value={valueEnemy} onChange={(e) => setValueEnemy(parseInt(e.target.value))} variant="outlined" />
                </Box>
                <Button variant="contained" className="" onClick={() => DeleteEnemy(valueEnemy)}>
                    Généré un Enemie
                </Button>
                {show && enemyDeleted && <p>{enemyDeleted}</p>}
            </Box>
        </Box>
    );
};

