import React, { useEffect, useState } from "react";
import './PieceStyles.scss'
import PieceModel from "../PieceModel/PieceModel";
import PieceNames from "../../Utils/PieceNamesArray";
const Piece = (props) => {
    const pieceNames = PieceNames;
    const possibleMove = !!(props.PossibleMove.find(x => x === props.originalHouse));
    const [CurrentPiece, setCurrentPiece] = useState();

    useEffect(() => {
        const houseIndex = props.originalHouse;
        let piece;
        piece = props.AllPieces?.WhitePieces().flatMap(whitePieces =>
            whitePieces.filter(pieces =>
                pieces)).find(finalPiece =>
                    finalPiece.CurrentHouse === houseIndex);

        if (!piece) {
            piece = props.AllPieces?.BlackPieces().flatMap(blackPieces =>
                blackPieces.filter(pieces =>
                    pieces)).find(finalPiece =>
                        finalPiece.CurrentHouse === houseIndex);
        }

        setCurrentPiece(piece);
    }, [props.AllPieces])

    const getImageClassName = () => {
        if (CurrentPiece.Name === pieceNames.void) return null;
        return (
            CurrentPiece.Color + CurrentPiece.Name
        )
    }
    const component = () => {
        return possibleMove ?
            <div className={"possibleMove"}/>
            :
            !!CurrentPiece && <div
                data-pieceid={CurrentPiece.Id}
                data-piececolor={CurrentPiece.Name === pieceNames.void ? "" : CurrentPiece.Color}
                className={(CurrentPiece === pieceNames.void ? pieceNames.void : CurrentPiece.Name) + " " + getImageClassName()}
            />
    }
    return component();
}

export default Piece;
