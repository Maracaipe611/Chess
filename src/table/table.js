import React, { useState } from 'react';
import './tableStyles.scss';

function Table() {
    const [selectedHouse, setSelectedHouse] = useState("");
    const [selectedHousePosition, setSelectedHousePosition] = useState("");
    const [whitePiecesAte, setWhitePiecesAte] = useState([]);
    const [blackPiecesAte, setBlackPiecesAte] = useState([]);
    const colunmAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const colunmLimit = [8, 7, 6, 5, 4, 3, 2, 1];
    const whiteInitialPosition = {
        pawn: ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2'],
        tower: ['A1', 'H1'],
        horse: ['B1', 'G1'],
        bishop: ['C1', 'F1'],
        king: ['E1'],
        queen: ['D1']
    };
    const blackInitialPosition = {
        pawn: ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7'],
        tower: ['A8', 'H8'],
        horse: ['B8', 'G8'],
        bishop: ['C8', 'F8'],
        king: ['E8'],
        queen: ['D8']
    };
    const movements = {
        //[letter, index]
        pawn: [0, 1],
        pawnNotTouched: [0, 2],
        pawnHungry: [[1, 1], [-1, 1]],
        tower:
        [
            [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
            [1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0]
        ],
        horse: [[2,1],[1,2],[-2,1],[1,-2],[-1,2],[-1,-2],[-2,-1]],
        bishop: [[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7]],
        king: [[1,1], [-1,1], [1,-1], [-1,-1]],
        queen: '*'
        //os outros movimentos restantes são criados ao inverter os sinais (bispo, torre)
    };
    const pieceNames = {
        pawn: 'pawn',
        tower: 'tower',
        horse: 'horse',
        bishop: 'bishop',
        queen: 'queen',
        king: 'king'
    }


    /*
    * Return the class of the house based on:
    * index of Letter and index in colunm.
    * If the colunm is 'unpair', will return the opposite  
    */
    const color = (alphabetIndex, index) => {
        let whiteHouse = 'whiteHouse';
        let blackHouse = 'blackHouse';
        let position = colunmAlphabet[alphabetIndex] + (index);
        let colorHouse = alphabetIndex % 2 === 0 ? whiteHouse : blackHouse;
        let pieceClassName = getPiecePosition(position)

        if (colorHouse === whiteHouse && index % 2 !== 0) {
            colorHouse = blackHouse + ' ' + pieceClassName;
        } else
            if (colorHouse === blackHouse && index % 2 !== 0) {
                colorHouse = whiteHouse + ' ' + pieceClassName
            } else {
                colorHouse = colorHouse + ' ' + pieceClassName;
            }


        return colorHouse;
    }

    const getPiecePosition = (position) => {
        let houseClassName, houseColor = "";
        let isPawn, isTower, isHorse, isBishop, isQueen, isKing;

        isPawn = whiteInitialPosition.pawn.find(x => x === position);
        isTower = whiteInitialPosition.tower.find(x => x === position);
        isHorse = whiteInitialPosition.horse.find(x => x === position);
        isBishop = whiteInitialPosition.bishop.find(x => x === position);
        isQueen = whiteInitialPosition.queen.find(x => x === position);
        isKing = whiteInitialPosition.king.find(x => x === position);

        if ([isPawn, isTower, isHorse, isBishop, isQueen, isKing].find(x => x)) {
            houseColor = "White"
        } else {
            isPawn = blackInitialPosition.pawn.find(x => x === position);
            isTower = blackInitialPosition.tower.find(x => x === position);
            isHorse = blackInitialPosition.horse.find(x => x === position);
            isBishop = blackInitialPosition.bishop.find(x => x === position);
            isQueen = blackInitialPosition.queen.find(x => x === position);
            isKing = blackInitialPosition.king.find(x => x === position);
        };

        if ([isPawn, isTower, isHorse, isBishop, isQueen, isKing].find(x => x) && !!!houseColor) {
            houseColor = "Black"
        };

        switch (position) {
            case isPawn:
                houseClassName = pieceNames.pawn;
                break;
            case isTower:
                houseClassName = pieceNames.tower;
                break;
            case isHorse:
                houseClassName = pieceNames.horse;
                break;
            case isBishop:
                houseClassName = pieceNames.bishop;
                break;
            case isQueen:
                houseClassName = pieceNames.queen;
                break;
            case isKing:
                houseClassName = pieceNames.king;
                break;
            default:
                houseClassName = "void";
                break;
        }

        houseClassName = houseClassName.charAt(0).toUpperCase() + houseClassName.slice(1);

        return houseColor + houseClassName;
    }

    const movePiece = (piecePosition, div) =>
    {
        let pieceName = div.target.classList[2]
        let moveToEat = !!(div.target.classList[3] === "possibleMove");

        if(moveToEat)
        {
            let color = selectedHouse.includes('White') ? 'White' : 'Black';
            let previousPiece = document.getElementById(selectedHousePosition);

            if(pieceName !== "Void")
            {
                pieceName.includes("White") ?
                setWhitePiecesAte(whitePiecesAte.concat(`${pieceName} ${selectedHousePosition}`))
                    : setBlackPiecesAte(blackPiecesAte.concat(`${pieceName} ${selectedHousePosition}`));
            }
            
            removeOtherPossibilities();
            
            div.target.classList.add(selectedHouse);//next house turns into the select piece
            div.target.classList.remove(pieceName);//next house lost their old class name

            previousPiece.classList.remove(selectedHouse); //previous piece isn't the selected house anymore

            previousPiece.classList.add(color); //previous piece lost their class with the color, so this bring back his color
            previousPiece.classList.add("Void"); //previous piece turns into a cleared house
        } else {
            possiblePositions(piecePosition, pieceName);
            setColor(piecePosition, 'yellow');
            setSelectedHouse(pieceName);
            setSelectedHousePosition(piecePosition);
        }
    }

    const setColor = (piece, color, futureMove) => {
        let divPiece = document.getElementById(piece);

        if(futureMove)
        {
            divPiece?.classList.add('possibleMove');
        }else{
            divPiece?.classList.add('selectedHouse');
        }
    }

    const removeOtherPossibilities = () => {
        let removePossibility = Object.values(document.getElementsByClassName('possibleMove'));
        let houseSelected = Object.values(document.getElementsByClassName('selectedHouse'));

        if (removePossibility?.flat(x => x?.classList).length > 0) {
            removePossibility?.map(x => x?.classList.remove('possibleMove'));
        };

        houseSelected.map(x =>  x?.classList.remove('selectedHouse')); //remove the house select by user
     }

    const possiblePositions = (actuallyPiecePosition, pieceType) =>
    {
        let futuresPositions = [];
        let letter = actuallyPiecePosition.charAt(0);
        let index = actuallyPiecePosition.charAt(1);
        let letterIndex = colunmAlphabet.indexOf(letter);
        let pieceName = pieceType.replace('White', '').replace('Black', '').toLowerCase();

        switch (pieceName) {
            case pieceNames.pawn:
                futuresPositions = [
                    colunmAlphabet[letterIndex + movements.pawnNotTouched[0]] + (parseInt(index) + movements.pawnNotTouched[1]),
                    colunmAlphabet[letterIndex + movements.pawn[0]] + (parseInt(index) + movements.pawn[1])
                ]
                break;
        
            default:
                break;
        }
        removeOtherPossibilities();
        futuresPositions.map(x => setColor(x, 'green', true));
    }

    const renderColunm = (letter, collorIndex) => {
        return (
            colunmLimit.map((i) => {
                var colorHouse = color(collorIndex, i)
                let pieceId = letter+i;
                return (
                    <div 
                        id={pieceId}
                        className={"singleHouse " + colorHouse}
                        onClick={(e) => movePiece(pieceId, e)}
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
