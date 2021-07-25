import React, { useState, useEffect } from "react";
import TableInteractions from "../../table/TableInteractions";
import PieceNames from "../../Utils/PieceNamesArray";
import "./OptionsToPawnTransformStyles.scss";
import { useAllPieces } from "../../Providers/AllPieces";

const ModalPawnOptions = ({
    houseId
}) =>
{
    const {AllPieces, setAllPieces} = useAllPieces()
    const [CurrentPiece, setCurrentPiece] = useState();

    useEffect(() => {
        const piece = AllPieces.map(pieces =>
            pieces.find(finalPiece => {
                return finalPiece.AbleToChange === true && finalPiece.CurrentHouse === houseId ? finalPiece : null
            })).find(x => x);

        setCurrentPiece(piece);
    }, [AllPieces, houseId])

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
            key={CurrentPiece?.Color + piece}
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
