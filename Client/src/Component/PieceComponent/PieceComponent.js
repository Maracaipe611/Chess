import React from "react";
import './PieceStyles.scss'
import PieceModel from "../PieceModel/PieceModel";
import PieceNames from "../../Utils/PieceNamesArray";
const Piece = (props) => {
    const pieceNames = PieceNames;
    const possibleMove = !!(props.PossibleMove.find(x => x === props.originalHouse));

    const getOriginalPiece = () => {
        const houseIndex = props.originalHouse;
        const allPieces = PieceModel;

        let piece;
        piece = allPieces().WhitePieces().flatMap(whitePieces =>
            whitePieces.filter(pieces =>
                pieces)).find(finalPiece =>
                    finalPiece.StartPosition === houseIndex);

        if (!!!piece) {
            piece = allPieces().BlackPieces().flatMap(blackPieces =>
                blackPieces.filter(pieces =>
                    pieces)).find(finalPiece =>
                        finalPiece.StartPosition === houseIndex);
        }

        return piece;
    }

    const getImageClassName = (piece) => {
        if (piece.Name === pieceNames.void) return null;
        return (
            piece.Color + piece.Name
        )
    }
    const component = () => {
        const piece = getOriginalPiece();
        return possibleMove ?
            <div className={"possibleMove"}/>
            :
            !piece && <div
                data-pieceid={piece.Id}
                data-piececolor={piece.Name === pieceNames.void ? "" : piece.Color}
                className={(piece === pieceNames.void ? pieceNames.void : piece.Name) + " " + getImageClassName(piece)}
            />
    }
    return component();
}

export default Piece;
