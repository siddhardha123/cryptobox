import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <Link to='/'>
      <div className="text-4xl flex justify-center items-center">
        <FaCoins className="text-red-600  text-4xl" />
        <h1 className="font-bold">cryptobox</h1>
      </div>
    </Link>
  );
}

export default Navbar