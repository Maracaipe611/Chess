import React, { useState } from 'react';
import './tableStyles.scss';
import WsRequest from './Requests/requests';
import SingleMove, {} from './MovePieces/Move'
import Piece from '../Component/PieceComponent/PieceComponent';
import PieceModel from '../Component/PieceModel/PieceModel';

function Table() {
    const [selectedHouse, setSelectedHouse] = useState("");
    const [selectedHousePosition, setSelectedHousePosition] = useState("");
    const [whitePiecesAte, setWhitePiecesAte] = useState([]);
    const [blackPiecesAte, setBlackPiecesAte] = useState([]);
    const [movedHouses, setMovedHouses] = useState([{}]);
    const colunmAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const colunmLimit = [8, 7, 6, 5, 4, 3, 2, 1];

    /*
    * Return the class of the house based on:
    * index of Letter and index in colunm.
    * If the colunm is 'unpair', will return the opposite  
    */
    const housePiece = (alphabetIndex, index) => {
        const whiteHouse = "WhiteHouse";
        const blackHouse = "BlackHouse";
        const position = colunmAlphabet[alphabetIndex] + (index);
        const colorHouse = alphabetIndex % 2 === 0 ? whiteHouse : blackHouse;
        const pieceClassName = getPiecePosition(position)
        let pieceClass = [];

        if (colorHouse === whiteHouse && index % 2 !== 0) {
            pieceClass = pieceClass.concat(blackHouse).concat(pieceClassName.finalClassName);
        } else
        if (colorHouse === blackHouse && index % 2 !== 0) {
            pieceClass = pieceClass.concat(whiteHouse).concat(pieceClassName.finalClassName)
        } else {
            pieceClass = pieceClass.concat(colorHouse).concat(pieceClassName.finalClassName);
        };


        return { pieceClass, pieceClassName };
    }

    const getPiecePosition = (position) => {
        let houseClassName, houseColor = "";
        let uuid;
        const whitePieces = PieceModel.WhitePieces();
        const blackPieces = PieceModel.BlackPieces();
        const whitePiecesPositions = whitePieces.flatMap(whitePiece => whitePiece.map(piece => piece.StartPosition));
        const blackPiecePositions = blackPieces.flatMap(whitePiece => whitePiece.map(piece => piece.StartPosition));

        if(whitePiecesPositions.includes(position))
        {
            houseColor = "White";
            const piece = whitePieces.map(pieces => pieces.find(p => p.StartPosition === position)).find(x => x);
            houseClassName = piece.Name;
            uuid = piece.Id;

        } else if (blackPiecePositions.includes(position))
        {
            houseColor = "Black";
            const piece = blackPieces.map(pieces => pieces.find(p => p.StartPosition === position)).find(x => x);
            houseClassName = piece.Name;
            uuid = piece.Id;
        }else{
            houseClassName = "Void"
        }

        const finalClassName = houseColor + houseClassName;

        return { finalClassName, uuid};
    }

    const movePiece = (piecePosition, div) => {
        let pieceName;
        WsRequest();
        const moveToEat = !!(div.target.classList.contains("possibleMove")) || !!(div.target.children[0]?.classList.contains("possibleMove"));

        const isDivChildren = !!div.target.classList.contains('children');
        if (isDivChildren) {
            pieceName = div.target.parentElement.classList[2];
        } else {
            pieceName = div.target.classList[2];
        }

        if (moveToEat) {
            let previousPiece = document.getElementById(selectedHousePosition);
            if (!movedHouses.findIndex(x => x?.pieceType === pieceName && x?.originalId === piecePosition) <= 0) {
                setMovedHouses(movedHouses.concat([{ originalId: previousPiece.attributes.uuid.value }]));
            }

            if (pieceName !== "Void") {
                pieceName.includes("White") ?
                    setWhitePiecesAte(whitePiecesAte.concat(`${pieceName} ${selectedHousePosition}`))
                    : setBlackPiecesAte(blackPiecesAte.concat(`${pieceName} ${selectedHousePosition}`));
            }
            
            if(isDivChildren)
            {
                div.target.parentElement.classList.add(selectedHouse);//next house turns into the select piece
                div.target.parentElement.classList.remove(pieceName);//next house lost their old class name
                div.target.parentElement.setAttribute("uuid",previousPiece.attributes.uuid.value);
                
            } else {
                div.target.classList.add(selectedHouse);//next house turns into the select piece
                div.target.classList.remove(pieceName);//next house lost their old class name
                div.target.setAttribute("uuid",previousPiece.attributes.uuid.value);
            }
            
            previousPiece.classList.remove(selectedHouse); //previous house lost the piece that was there
            previousPiece.classList.add("Void"); //previous piece turns into a cleared house
            previousPiece.setAttribute("uuid", undefined);

            removeOtherPossibilities();
        } else {
            possiblePositions(piecePosition, pieceName);
            setColor(piecePosition, 'yellow');
            setSelectedHouse(pieceName);
            setSelectedHousePosition(piecePosition);
        }
    }

    const setColor = (piece, color, futureMove) => {
        let divPiece = document.getElementById(piece);

        if (futureMove) {
            Object.values(divPiece.children).map(x => x.classList.add('possibleMove'));
            divPiece.style.cursor = "pointer";
        } else {
            divPiece?.classList.add('selectedHouse');
        }
    }

    const removeOtherPossibilities = () => {
        const removePossibility = Object.values(document.getElementsByClassName('possibleMove'));
        const houseSelected = Object.values(document.getElementsByClassName('selectedHouse'));

        //essa função retorna mto erro
        if (removePossibility?.flat(x => x?.classList).length > 0) {
            removePossibility?.map(x => 
                x?.classList.remove('possibleMove')
            );
            const div = removePossibility.find(x => x?.parentElement.classList.contains("Void"));
            if (!!div) {
                div.parentElement.style.cursor = "unset"
            }
        };

        houseSelected.map(x => {
            return (x.classList.remove('selectedHouse'), x.style.cursor = "unset")
        }); //remove the house select by user
    }

    const possiblePositions = (actuallyPiecePosition, pieceType) => {
        let futuresPositions = [];
        let pieceName = pieceType.replace('White', '').replace('Black', '');
        const color = pieceType.includes("White") ? "White" : "Black"

        futuresPositions = SingleMove(pieceName, actuallyPiecePosition, color, movedHouses).possibleMoves;

        removeOtherPossibilities();
        futuresPositions.map(x => setColor(x, 'green', true));
    }

    const renderColunm = (letter, collorIndex) => {
        return (
            colunmLimit.map((i) => {
                const houseProps = housePiece(collorIndex, i)
                let pieceId = letter + i;
                return (
                    <Piece
                        pieceId = {pieceId}
                        houseColor={houseProps.pieceClass}
                        originalId = {pieceId}
                        onClick = {movePiece}
                        uuid = {houseProps.pieceClassName.uuid }
                    />
                )
            }
            )
        )
    };


    const finalTable = colunmLimit.map((number, i) => {
        let letter = colunmAlphabet[i];
        return (
            <div className={"mergedHouses"}>
                {renderColunm(letter, i)}
            </div>)
    })

    return (
        <div className={"TableComplete"}>
            {finalTable}
        </div>
    );
}

export default Table;
