import React, { useState, useEffect } from "react";
import TableInteractions from "../../table/TableInteractions";
import PieceNames from "../../Utils/PieceNamesArray";
import "./OptionsToPawnTransformStyles.scss";

const ModalPawnOptions = ({
    houseId,
    AllPieces,
    setAllPieces
}) =>
{
    const [CurrentPiece, setCurrentPiece] = useState();

    useEffect(() => {
        const houseIndex = houseId;
        const piece = AllPieces?.map(pieces =>
            pieces.find(finalPiece => {
                return finalPiece.AbleToChange === true && finalPiece.CurrentHouse === houseIndex ? finalPiece : null
            })).find(x => x);

        setCurrentPiece(piece);
    }, [AllPieces])

    const getPiece = (piece) =>
    {
        const { ChangePawn } = TableInteractions(AllPieces);
        const newPawn = ChangePawn(CurrentPiece, piece);
        setAllPieces(newPawn);
    }

    const options = [
        PieceNames.queen,
        PieceNames.bishop,
        PieceNames.horse,
        PieceNames.tower
    ]
    const piecesOptions = () =>
    {
        const opt =  options.map(piece => {
            return (<button
            className={CurrentPiece?.Color + piece}
            onClick={() => getPiece(piece)}
            />)
        })

        return opt
    }

    const Modal = () =>
    {
        return CurrentPiece?.AbleToChange ?
        (<div className={"Modal"}>
            {piecesOptions()}
        </div>)
        :
        null
    }

    return Modal();
}

export default ModalPawnOptions;
