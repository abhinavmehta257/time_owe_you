import React from "react";
import formatTimeFromMinutes from "../../helpers/hoursConverter";
import epochToDateTime from "../../helpers/formatTime";

function TransactionCard({ transaction, myId }) {
  return (
    <>
      <div className="flex py-[8px] px-[16px] bg-[#1f1f1f] mb-[8px] rounded-[16px] items-center">
        <div>
          <img
            className="w-[32px] h-[32px] rounded-[8px]"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex text-white ml-[8px] justify-between w-full items-center">
          <div className="flex flex-col">
            <span className="font-[600]">
              {transaction.receiver_id == myId
                ? transaction.sender.name
                : transaction.receiver.name}
            </span>
            <span>{epochToDateTime(transaction.date_time)}</span>
          </div>
          <span className="font-[600]">
            {transaction.receiver_id == myId ? (
              <span className="text-[#75dfc2]">
                {formatTimeFromMinutes(transaction.amount)}
              </span>
            ) : (
              <span className="text-[red]">
                -{formatTimeFromMinutes(transaction.amount)}
              </span>
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default TransactionCard;
