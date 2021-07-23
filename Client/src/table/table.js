import React, { useState, useEffect } from 'react';
import './tableStyles.scss';
import WsRequest from './Requests/requests';
import SingleMove, {} from './MovePieces/Move'
import Piece from '../Component/PieceComponent/PieceComponent';
import PieceModel from '../Component/PieceModel/PieceModel';
import House from '../Component/HouseComponent/HouseComponent';
import TableInteractions from './TableInteractions';
import piecesNames from '../Utils/PieceNamesArray';

function Table() {
    const [selectedHouse, setSelectedHouse] = useState("");
    const [selectedPiece, setSelectedPiece] = useState("");
    const [movedHouses, setMovedHouses] = useState([{}]);
    const [possibleMove, setPossibleMove] = useState([]);
    const [AllPieces, setAllPieces] = useState();
    const [FinalChessBoard, setFinalChessBoard] = useState();
    const colunmLimit = [8, 7, 6, 5, 4, 3, 2, 1];

    useEffect(() => {
        setAllPieces(PieceModel());
    }, [])


    
    useEffect(() => {
        const renderColunm = (letter) => {
            return (
                colunmLimit.map((i) => {
                    return <House
                        AlphabetIndex={letter}
                        NumberIndex={i}
                        onClick={movePiece}
                        PossibleMove={possibleMove}
                        SelectedHouse={selectedHouse}
                        AllPieces={AllPieces}
                    />
                }
                )
            )
        };

        const finalTable = colunmLimit.map((number, i) => {
            return (
                <div className={"mergedHouses"}>
                    {renderColunm(i, number)}
                </div>)
        });
       
        setFinalChessBoard(finalTable)
    }, [AllPieces, selectedPiece, possibleMove, selectedHouse])

    const movePiece = (piece) => {
        const { SelectHouse, PossiblePositions } = TableInteractions();
        if (piece.pieceId === selectedPiece)
            return null
        SelectHouse(piece);
        setSelectedHouse(piece.houseDiv.id)
        const houseHasPiece = !(piece.pieceId === piecesNames.void)
        const selectingToMove = !houseHasPiece && Object.values(piece.houseDiv.children).find(x => x).classList.contains("possibleMove");

        if (houseHasPiece && piece.pieceId !== selectedPiece) {
            const ableHouses = PossiblePositions(piece, movedHouses);
            setPossibleMove(ableHouses)
            setSelectedPiece(piece.pieceId)
        } else if (selectingToMove) {
            console.log("Usuário clicou para mover a peça")
        }
    }

    return (
        <div className={"TableComplete"}>
            {FinalChessBoard}
        </div>
    );
}

export default Table;
