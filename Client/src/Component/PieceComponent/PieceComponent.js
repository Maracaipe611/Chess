import React from "react";
import './PieceStyles.scss'
import PieceModel from "../PieceModel/PieceModel";
import PieceNames from "../../Utils/PieceNamesArray";
const Piece = (props) => {
    const getOriginalPiece = () =>
    {
        const houseIndex = props.originalHouse;
        const allPieces = PieceModel();
        let piece;

        piece = allPieces.WhitePieces.flat(whitePieces => whitePieces.find( pieces => {
            return pieces.StartPositon === houseIndex ? piece : PieceNames.void;
        }));

        if(!!!piece)
        {
            piece = allPieces.BlackPieces.flat(blackPieces => blackPieces.find(pieces => {
                return pieces.StartPositon === houseIndex ? piece : PieceNames.void;
            }));
        }

        return !!!piece ? (piece.Name = PieceNames.void) : piece;
    }

    const getImage = (piece) => {
        if(piece.Name === PieceNames.void) return null;
        return(
            <img src={piece.Image} alt={piece.Name}/>
        )
    }
    const component = () =>
    {
        const piece = getOriginalPiece();
        return (
            <div
                pieceId = {piece.Name}
                pieceColor = {piece.Name === PieceNames.void ? "" : piece.Color}
                className = {piece === PieceNames.void ? PieceNames.void : piece.Name}
            >
                {getImage(piece)}
            </div>
        )
    }
    return component();
}

export default Piece;
