import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props){
 
  return (
    <Card className='expense-item'>
          <ExpenseDate date={props.date}></ExpenseDate>
      <div>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        
      <div className='expense-item__price'>{props.amount}</div>
      
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;