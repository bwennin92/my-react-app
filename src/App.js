import ExpenseItem from "./components/ExpenseItem";
import "./App.css";

function App() {
  const ExpenseData = [
    {
      title: "New Car",
      price: "3000.00",
      date: "March",
    },
    {
      title: "New House",
      price: "150000.00",
      date: "April",
    },
    {
      title: "Food",
      price: "20",
      date: "June",
    },
  ];

  return (
    <div className="App">
      <ExpenseItem
        title={ExpenseData[0].title}
        price={ExpenseData[0].price}
        date={ExpenseData[0].date}
      />
      <ExpenseItem
        title={ExpenseData[1].title}
        price={ExpenseData[1].price}
        date={ExpenseData[1].date}
      />
      <ExpenseItem
        title={ExpenseData[2].title}
        price={ExpenseData[2].price}
        date={ExpenseData[2].date}
      />
    </div>
  );
}

export default App;
