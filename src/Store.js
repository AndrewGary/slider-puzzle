import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
    const [gameBoard, setGameBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, null]);
    // const [ gameActive, setGameActive ] = useState(false);

    return (
            <Context.Provider value={[gameBoard, setGameBoard]}>{children}</Context.Provider>
    )
}

export default Store;