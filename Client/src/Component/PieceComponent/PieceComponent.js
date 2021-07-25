import React, { useEffect, useState } from "react";
import './PieceStyles.scss'
import PieceNames from "../../Utils/PieceNamesArray";
import ModalPawnOptions from "../OptionsToPawnTransform/OptionsToPawnTransform";
const Piece = (props) => {
    const pieceNames = PieceNames;
    const [CurrentPiece, setCurrentPiece] = useState();

    useEffect(() => {
        const houseIndex = props.originalHouse;
        let piece;
        piece = props.AllPieces?.map(pieces =>
                    pieces.find(finalPiece =>
                        finalPiece.CurrentHouse === houseIndex)).find(x => x);

        setCurrentPiece(piece);
    }, [props.AllPieces])

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
            />
            )
    }
    return component();
}

export default Piece;
