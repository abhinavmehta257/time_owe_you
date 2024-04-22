import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import TransactionCard from "./blocks/TransactionCard";
function Transactions({ myId, transactions }) {
  return (
    <div className="mt-[16px]">
      <span className="text-white font-[600]">Last transactions</span>
      <div className="mt-[8px] h-[60vh] overflow-scroll">
        {transactions
          ? transactions.map((transaction, index) => (
              <TransactionCard
                transaction={transaction}
                myId={myId}
                key={index}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Transactions;
