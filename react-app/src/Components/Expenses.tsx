
import { Card } from '@mui/material';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ItemsInterface from './../interface/ItemsInterface'

interface ExpensesProps {
  items: ItemsInterface[];
}
const Expenses = 
({ items
} : ExpensesProps) => {

return (
    <Card className="expenses">
      {items.map((x) => 
      <ExpenseItem
        title={x.title}
        amount={x.amount}
        date={x.date}
      />
      )}
    </Card>
  );
};

export default Expenses;
