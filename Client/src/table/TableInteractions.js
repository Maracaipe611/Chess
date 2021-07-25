import AlphabetArray from "../Utils/AlphabetArray";
import Color from "../Utils/Colors";
import PieceNames from "../Utils/PieceNamesArray";
import SingleMove from "./MovePieces/Move";
const TableInteractions = (AllPieces) =>
{
    const classNames = {
        SelectedHouse: "selectedHouse",
        PossibleMove: "possibleMove"
    };

    const SelectHouse = (piece) =>
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

    const changeClass = (div, classToAdd) =>
    {
        div.classList.add(classToAdd);
    };

    const PossiblePositions = (piece, movedHouses) => {
        const futuresPositions = SingleMove(piece, AllPieces, movedHouses);

        removeOthersClass(classNames.PossibleMove);
        return futuresPositions;
    };

    const MovePiece = (pieceId, houseToMove, AllPieces, isEated) => {
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

    return { SelectHouse, PossiblePositions, MovePiece, ChangePawn}
}

export default TableInteractions;
