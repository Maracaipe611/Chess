import React, { useEffect, useState } from "react";
import './PieceStyles.scss'
import PieceNames from "../../Utils/PieceNamesArray";
import { useAllPieces } from "../../Providers/AllPieces";

const Piece = ({ originalHouse }) => {
    const pieceNames = PieceNames;
    const [CurrentPiece, setCurrentPiece] = useState();
    const { AllPieces } = useAllPieces()

    useEffect(() => {
        let piece;
        piece = AllPieces.map(pieces =>
                    pieces.find(finalPiece =>
                        finalPiece.CurrentHouse === originalHouse && finalPiece.Ativo)).find(x => x);

        setCurrentPiece(piece);
    }, [AllPieces, originalHouse])

    const getImageClassName = () => {
        if (CurrentPiece.Name === pieceNames.void) return null;
        return (
            CurrentPiece.Color + CurrentPiece.Name
        )
    }

    const component = () => {
        return (!!CurrentPiece && CurrentPiece?.Ativo &&
            <div
                data-pieceid={CurrentPiece.Id}
                data-piececolor={CurrentPiece.Name === pieceNames.void ? "" : CurrentPiece.Color}
                className={(CurrentPiece === pieceNames.void ? pieceNames.void : CurrentPiece.Name) + " " + getImageClassName()}
                key = {CurrentPiece.Id}
            />
            )
    }
    return component();
}

export default Piece;
