import React, { useState } from "react";
import { solution } from "./utils/utils";

export const Context = React.createContext();

const Store = ({ children }) => {
    const [test, setTest] = useState(solution);

    return (
        <Context.Provider value={[test, setTest]}>{children}</Context.Provider>
    )
}

export default Store;