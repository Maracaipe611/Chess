import PieceModel from "../Component/PieceModel/PieceModel";
import SingleMove from "./MovePieces/Move";
const TableInteractions = () =>
{
    const whitePieces = PieceModel().WhitePieces().flatMap(whitePiece =>
        whitePiece.filter(piece => piece));
    const blackPieces = PieceModel().BlackPieces().flatMap(blackPiece =>
        blackPiece.filter(piece => piece));
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
        const actuallyPiecePosition = piece.houseDiv.id;
        const pieceObj = whitePieces.find(p => p.Id === piece.pieceId) || blackPieces.find(p => p.Id === piece.pieceId);

        const futuresPositions = SingleMove(pieceObj, actuallyPiecePosition, pieceObj.Color, movedHouses);

        removeOthersClass(classNames.PossibleMove);
        return futuresPositions;
    };

    return {SelectHouse, PossiblePositions}
}

export default TableInteractions;
