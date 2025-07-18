import React, { useState, useContext } from 'react';

import axios from "axios";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";

import { watchList } from "../data/data";
import { DoughnoutChart } from "./DoughnoutChart";

const labels = watchList.map((subArray) => subArray["name"]);

const WatchList = () => {

    const data = {
        labels,
        datasets: [
            {
                label: "Price",
                data: watchList.map((stock) => stock.price),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                    ],
                    borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            }
        ]
    }

    return ( 
        <>
            <div className="watchlist-container">

                <div className="search-container">
                    <input type="text" name="search" id="search" placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx" className="search" />
                    <span className='counts'> {watchList.length} / 50 </span>
                </div>

                <ul className='list'>

                    {watchList.map((stock, index) => {
                        return (
                            <WatchListItem stock={stock} key={index} />
                        )
                    })}

                </ul>

                <DoughnoutChart data={ data } />

            </div>
        </>
     );
}

export default WatchList;


const WatchListItem = ({stock}) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchlistActions(true);
    }

    const handleMouseLeave = () => {
        setShowWatchlistActions(false);
    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}> {stock.name} </p>

                <div className="itemInfo">
                    <span className='percent'> {stock.percent} </span>
                    { stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : <KeyboardArrowUp className="up" /> }

                    <span className='price'> {stock.price} </span>

                </div>
            </div>

            { showWatchlistActions && <WatchListActions uid={stock.name} />}

        </li>
    );
};


const WatchListActions = ({uid}) => {

    const { openBuyWindow } = useContext(GeneralContext);

    const handleBuyClick = () => {
        openBuyWindow(uid);
    };

    return (
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                    <button className='buy' onClick={handleBuyClick} > Buy </button>
                </Tooltip>

            </span>
        </span>
    );
};