import React from 'react'

const CoinItem = (props) => {

  return (
    <div className="flex items-center bg-[#26272b] justify-between shadow-lg   rounded-md p-3 shadow-[#000000] hover:scale-105 duration-150 ease-in-out cursor-pointer m-4">
      <p>{props.coins.market_cap_rank}</p>
      <div className="w-[40px] items-center">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="">{props.coins.total_volume.toLocaleString()}</p>
      <p className="">${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
}

export default CoinItem