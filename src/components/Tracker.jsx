import React, { useState } from "react";

const Tracker = ({ darkMode }) => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert("Please fill in all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpense]);
    setDescription("");
    setAmount("");
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div
      className={`p-6 mx-auto max-w-md rounded-lg shadow-md transition duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-4">Expense Tracker</h1>

      <form onSubmit={handleAddExpense} className="mb-4">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Expense description"
            className={`border w-full p-2 rounded shadow-sm transition duration-300 ${
              darkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"
            }`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="mb-2">
          <input
            type="number"
            placeholder="Amount"
            className={`border w-full p-2 rounded shadow-sm transition duration-300 ${
              darkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"
            }`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`bg-blue-600 text-white py-2 px-4 rounded w-full transition duration-200 hover:bg-blue-700`}
        >
          Add Expense
        </button>
      </form>

      <ul className="list-none mb-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className={`flex justify-between p-4 mb-2 rounded shadow-sm transition duration-300 ${
              darkMode ? "bg-gray-700" : "bg-gray-100"
            }`}
          >
            <div>
              <span className="font-semibold">{expense.description}</span>
              <p className="text-gray-600 text-sm">Amount: ${expense.amount.toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleDeleteExpense(expense.id)}
              className={`text-red-600 hover:text-red-800 transition duration-200 ${
                darkMode ? "hover:text-red-400" : ""
              }`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold text-center">
        Total: ${totalExpense.toFixed(2)}
      </h2>
    </div>
  );
};

export default Tracker;
