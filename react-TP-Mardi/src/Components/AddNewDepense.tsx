import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import ItemsInterface from "../interface/ItemsInterface";


interface NewDepenseProps {
    
  items: ItemsInterface[];
  }
  
  const NewDepense = 
  ({ items }: NewDepenseProps) => {

    const [newDepense, setNewDepense] = useState<ItemsInterface[]>() 

    useEffect(() => {
        
    })

    function getValue()
    {
        const date = new Date()
        setNewDepense(
        [
            date,
            document.getElementById("amount"),
            document.getElementById("title")
        ])
        items.push(newDepense)
    }
    return (
        <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  };
  
  export default NewDepense;