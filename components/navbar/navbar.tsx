import Link from "next/link";
import React from "react";

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link href="/" passHref>
          <div className="btn btn-ghost normal-case text-xl text-white">
            Soccer Predictions
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/" passHref>
              <div className="btn btn-ghost normal-case text-xl text-white">
                Bet Values
              </div>
            </Link>
          </li>
          <li>
            <Link href="/between-dates" passHref>
              <div className={`btn btn-ghost normal-case text-white text-xl`}>
                Between Dates
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
