import React from "react";
import './PieceStyles.scss'
import PieceModel from "../PieceModel/PieceModel";
import PieceNames from "../../Utils/PieceNamesArray";
const Piece = (props) => {
    const pieceNames = PieceNames;

    const getOriginalPiece = () => {
        const houseIndex = props.originalHouse;
        const allPieces = PieceModel;
        const voidPiece = {
            Id: null,
            Name: "Void"
        };
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

        return !!piece ? piece : voidPiece;
    }

    const getImage = (piece) => {
        if (piece.Name === pieceNames.void) return null;
        return (
            <div className={piece.Color + piece.Name} />
        )
    }
    const component = () => {
        const piece = getOriginalPiece();
        return (
            <div
                pieceid={piece.Id}
                piececolor={piece.Name === pieceNames.void ? "" : piece.Color}
                className={piece === pieceNames.void ? pieceNames.void : piece.Name}
            >
                {getImage(piece)}
            </div>
        )
    }
    return component();
}

export default Piece;
