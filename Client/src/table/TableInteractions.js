import PieceModel from "../Component/PieceModel/PieceModel";
import SingleMove from "./MovePieces/Move";
const TableInteractions = (AllPieces) =>
{
    const whitePieces = AllPieces.flatMap(x => x.filter(p => p.Color === "White"));
    const blackPieces = AllPieces.flatMap(x => x.filter(p => p.Color === "Black"));
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
        removeOthersClass(classNames.PossibleMove);
        removeOthersClass(classNames.SelectedHouse);
        return AllPieces;
    }

    return { SelectHouse, PossiblePositions, MovePiece}
}

export default TableInteractions;
