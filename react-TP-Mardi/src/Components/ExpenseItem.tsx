import { Card } from '@mui/material';
import ExpenseDate from './ExpenseDate';
import '../CSS/ExpenseItem.css';


interface ExpenseItemProps {
  id?: Number,
  date?: Date,
  title?: string,
  amount?: number;
}

const ExpenseItem =
({ date,
  title = "",
  amount
}: ExpenseItemProps) => {
return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
