import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    {id:'e1',title:'Car Insurance' , amount : 294.67 , date:new Date(2021,2,28)},
    {id:'e2',title:'Services' , amount : 158.79 , date:new Date(2019,5,6)},
    {id:'e3',title:'Sales' , amount : 94.67 , date:new Date(2023,12,15)},

  ]
  return (
    <div>
      <h2>Let's Get Started</h2>
      {/* <ExpenseItem title={expenses = expenses[0].title} amount ={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount ={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount ={expenses[2].amount} date={expenses[2].date}></ExpenseItem> */}
      
      <ExpenseItem
      title={expenses[0].title}
    amount ={expenses[0].amount}
     date = {expenses[0].date}
      > 
      </ExpenseItem>

      
      <ExpenseItem
      title={expenses[1].title}
    amount ={expenses[1].amount}
     date = {expenses[1].date}
      > 
      </ExpenseItem>
      
      <ExpenseItem
      title={expenses[2].title}
    amount ={expenses[2].amount}
     date = {expenses[2].date}
      > 
      </ExpenseItem>

      

    </div>
  );
}

export default App;
