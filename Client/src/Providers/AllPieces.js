import React, { useState } from 'react';
import PieceModel from '../Component/PieceModel/PieceModel';

export const AllPiecesContext = React.createContext({});

export const AllPiecesProvider = (props) => {
    const [AllPieces, setAllPieces] = useState(PieceModel())
    return (
        <AllPiecesContext.Provider value={{ AllPieces, setAllPieces}} key={"PieceContext"}>
            {props.children}
        </AllPiecesContext.Provider>
    )
}

export const useAllPieces = () => React.useContext(AllPiecesContext);
