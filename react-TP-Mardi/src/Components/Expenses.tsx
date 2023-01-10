
import { Box, Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ExpenseItem from './ExpenseItem';
import '../CSS/Expenses.css';
import ItemsInterface from './../interface/ItemsInterface'
import { useState } from 'react';

interface ExpensesProps {
  items: ItemsInterface[];
}
const Expenses = 
({ items
} : ExpensesProps) => {
  const [year, setYear] = useState();

  const handleChange = (e: any) => {
    setYear(e.target.value);
  };
  
  const yearOne = 2020
  const yearTwo = 2021
  
return (
    <>
      <Box>
      <InputLabel>Filtre</InputLabel>
      <FormControl fullWidth>
        {!year ?
        <Select
          id="demo-simple-select"
          value={year ? year : ""}
          label="Tous"
          onChange={handleChange}
        >
          <MenuItem value={yearOne}>2020</MenuItem>
          <MenuItem value={yearTwo}>2021</MenuItem>
        </Select>
        :
        <Select
        id="demo-simple-select"
        value={year}
        label="Tous"
        onChange={handleChange}
      >
        <MenuItem value={""}>Tous</MenuItem>
        <MenuItem value={yearOne}>2020</MenuItem>
        <MenuItem value={yearTwo}>2021</MenuItem>
      </Select>}
      </FormControl>
      </Box>
      <Card className="expenses">
        {year ? items.filter(test => test.date?.getFullYear() === year).map((x) => 
        <ExpenseItem
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
        )
      :
      items.map((x) => 
        <ExpenseItem
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
        )
      }
      </Card>
    </>
  );
};

export default Expenses;
