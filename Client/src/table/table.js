import React, { useState, useEffect } from 'react';
import './tableStyles.scss';
import WsRequest from './Requests/requests';
import House from '../Component/HouseComponent/HouseComponent';
import TableInteractions from './TableInteractions';
import piecesNames from '../Utils/PieceNamesArray';
import { useAllPieces } from "../Providers/AllPieces"

function Table() {
    const [selectedHouse, setSelectedHouse] = useState("");
    const [selectedPiece, setSelectedPiece] = useState({});
    const [movedHouses, setMovedHouses] = useState([]);
    const [possibleMove, setPossibleMove] = useState([]);
    const { AllPieces, setAllPieces } = useAllPieces()
    const [FinalChessBoard, setFinalChessBoard] = useState();
    const colunmLimit = [8, 7, 6, 5, 4, 3, 2, 1];

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
                        ableHouses = {possibleMove}
                        key = {letter + i}
                    />
                }
                )
            );
        };

        const finalTable = colunmLimit.map((number, i) => {
            return (
                <div className={"mergedHouses"}
                key = {i}>
                    {renderColunm(i, number)}
                </div>)
        });

        setFinalChessBoard(finalTable);
        // eslint-disable-next-line
    }, [AllPieces, selectedPiece, possibleMove, selectedHouse, movedHouses]);

    useEffect(() => {
        setPossibleMove([])
        setSelectedHouse("")
        setSelectedPiece({})
    }, [AllPieces])

    const movePiece = (house) => {
        if (house.piece.Id === selectedPiece?.Id) return null;

        const { SelectHouse, PossiblePositions, MovePiece } = TableInteractions(AllPieces);
        const houseHasPiece = !(house.piece.Name === piecesNames.void && house.piece.Ativo)
        const selectingToMove = !houseHasPiece && possibleMove.includes(house.houseDiv.id);
        const userIsSelectingSameHouse = houseHasPiece && house.piece.Id === selectedPiece.Id;
        const movingToEat = houseHasPiece && selectedPiece?.Color !== house.piece.Color && !!selectedPiece && !!selectedPiece.Color && possibleMove.includes(house.piece.CurrentHouse);
        SelectHouse(house.piece.Id);
        setSelectedHouse(house.houseDiv.id);
        
        if (!userIsSelectingSameHouse && !selectingToMove && !movingToEat && houseHasPiece)
        {
            const ableHouses = PossiblePositions(house, movedHouses);

            setPossibleMove(ableHouses);
            setSelectedPiece(house.piece);

        } else if (selectingToMove || movingToEat)
        {
            setMovedHouses([...movedHouses, selectedPiece.Id]);
            const newAllPieces = MovePiece(selectedPiece.Id, house.houseDiv.id, movingToEat)
            setAllPieces(newAllPieces);
        }else
        {
            setPossibleMove([]);
            setSelectedPiece({});
        }
    };

    return (
        <div className={"TableComplete"}>
            {FinalChessBoard}
        </div>
    );
}

export default Table;
