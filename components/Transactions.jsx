import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import TransactionCard from "./blocks/TransactionCard";
function Transactions({ myId }) {
  const [transactions, setTransactions] = useState([]);

  async function getTransactions() {
    const authToken = Cookies.get("token");
    const headers = {
      Authorization: authToken, // Add the token to the Authorization header
      "Content-Type": "application/json", // Example of another header
    };
    const response = await axios.get(
      "https://x8ki-letl-twmt.n7.xano.io/api:-qIKyLNe/transactions",
      { headers }
    );
    console.log(response.data);
    setTransactions(response.data);
  }
  useEffect(() => {
    async function fetchData() {
      await getTransactions();
    }
    fetchData();
  }, []);
  return (
    <div className="mt-[16px]">
      <span className="text-white font-[600]">Last transactions</span>
      <div className="mt-[8px]">
        {transactions
          ? transactions.map((transaction) => (
              <TransactionCard transaction={transaction} myId={myId} />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Transactions;
