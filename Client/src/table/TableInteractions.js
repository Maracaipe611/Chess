import AlphabetArray from "../Utils/AlphabetArray";
import Color from "../Utils/Colors";
import PieceNames from "../Utils/PieceNamesArray";
import SingleMove from "./MovePieces/Move";
const TableInteractions = (AllPieces, movedHouses) =>
{
    const classNames = {
        SelectedHouse: "selectedHouse",
        PossibleMove: "possibleMove"
    };

    const UnselectHouse = () =>
    {
        removeOthersClass(classNames.SelectedHouse);
    };

    const removeOthersClass = (className) => {
        const otherSelected = Object.values(document.getElementsByClassName(className)).find(x => x);
        if(!!otherSelected)
        {
            otherSelected.classList.remove(className);
        }
    };

    const PossiblePositions = (piece) => {
        const futuresPositions = SingleMove(piece, AllPieces, movedHouses);
        return futuresPositions;
    };

    const MovePiece = (pieceId, houseToMove, isEated) => {
        AllPieces = AllPieces.map(x => x.filter(y => {
            if (y.Id === pieceId) {
                y.CurrentHouse = houseToMove;
            };
            if (y.CurrentHouse === houseToMove && y.Id !== pieceId) {
                y.Ativo = !isEated
            }
            return y
        }));
        AllPieces = AnyPawnIsAbleToChange()
        removeOthersClass(classNames.PossibleMove);
        removeOthersClass(classNames.SelectedHouse);
        return AllPieces;
    }

    const AnyPawnIsAbleToChange = () => {
        AllPieces = AllPieces.map(x => x.filter(y => {
            if (((AlphabetArray.WhitesPiecesCanChangeOn.includes(y.CurrentHouse) && y.Color === Color.White)
                || (AlphabetArray.BlackPiecesCanChangeOn.includes(y.CurrentHouse) && y.Color === Color.Black)) && y.Name === PieceNames.pawn) {
                y.AbleToChange = true;
            };
            return y
        }));
        return AllPieces
    };

    const ChangePawn = (pawn, wantPiece) => {
        AllPieces = AllPieces.map(x => x.filter(y => {
            if (y.Id === pawn.Id) {
                y.Name = wantPiece;
                y.AbleToChange = false;
            };
            return y
        }));
        return AllPieces;
    }

    const getDangerousHouses = (UserColor) =>
    {
        const allyKing = AllPieces.map(pieces =>
            pieces.find(piece =>
                piece.Name === PieceNames.king && piece.Ativo && piece.Color === UserColor)).find(x => x);

        const enemyPiecesActives = AllPieces.filter(pieces =>
            pieces.find(piece =>
                piece.Ativo === true && piece.Color !== allyKing.Color)).flatMap(x => x)
        console.log(enemyPiecesActives);
    }

    return { UnselectHouse, PossiblePositions, MovePiece, ChangePawn, getDangerousHouses}
}

export default TableInteractions;
