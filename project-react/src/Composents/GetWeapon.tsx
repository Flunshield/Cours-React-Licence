import { Box, TextField, Button, Card, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";
import { API_GET_WEAPON } from "../Constant/Constant";
import { WeaponsInterface } from "../Interfaces/WeaponsInterface";
import ListWeapon from "./ListWeapon";

export default function GetWeapon() {
    const [weaponSelect, setWeaponSelect] = useState<WeaponsInterface| undefined>()
    const [valueIdWeapon, setValueIdWeapon] = useState(0)
    const [isUseGetWeapon, setIsUseGetWeapon] = useState(false)

    const GetWeaponPlayer = async (id: number) => {
        try {
            await fetch(API_GET_WEAPON + id, {
                method: 'GET'
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error ${response.status}`);
                    }
                    return response.json();
                })
                .then((result: WeaponsInterface) => {
                    setWeaponSelect(result);
                    console.log(weaponSelect)
                });
                setIsUseGetWeapon(true)
        }
        catch (error) {
            console.log(error);
            alert("L'arme que vous rechercher n'existe pas")
            setIsUseGetWeapon(false)
        }
    };
    return (
        <>
        <Box sx={{ width: '100%' }}>
            <p>Quelle armes souhaitez-vous regarder ?</p>
            <ul>
                <li>Choix 1 : L'épée</li>
                <li>Choix 2 : Le bâton</li>
                <li>Choix 3 : La dague</li>
            </ul>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField type={'number'} id="weapon" value={valueIdWeapon} onChange={(e) => setValueIdWeapon(parseInt(e.target.value))} variant="outlined" />
            </Box>
            <Button variant="contained" className="" onClick={() => GetWeaponPlayer(valueIdWeapon)}>
                Rechercher l'arme
            </Button>

        </Box>
        
        {isUseGetWeapon && <ListWeapon weaponSelect={weaponSelect} />};
        
        </>
    );
}