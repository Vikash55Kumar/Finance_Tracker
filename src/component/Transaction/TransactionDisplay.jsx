import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TRANSACTION_SUCCESS } from "../../reducer/transactionalReducer";  
import TransactionForm from "./TransactionForm";

const TransactionDisplay = () => {
  const dispatch = useDispatch();

  const addTransaction = (transaction) => {
    dispatch(ADD_TRANSACTION_SUCCESS(transaction));
  };

  return <TransactionForm addTransaction={addTransaction} />;
};

export default TransactionDisplay;
