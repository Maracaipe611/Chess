import './PossibleMove.scss';

const PossibleMove = (props) =>
{
    const ableHousesToMove = props.ableHouses;
    const houseId = props.houseId;
    const allPieces = props.AllPieces;

    const HouseIsPossibleToMove = () =>
    {
        const isAbleToMove = ableHousesToMove.map(house => house === houseId).find(x => x);
        const isAnyPieceInThisHouse = !!props.ableHouses.flatMap(house => props.AllPieces.map(pieces => pieces.find(p => p.CurrentHouse === house))).find(x => x);
        if (!!isAbleToMove)
        {
            return (<div className={"possibleMove"} style={{ display: isAnyPieceInThisHouse ? "none" : "block"}}/>)
        }
        
        return null
    }

    return HouseIsPossibleToMove();
}

export default PossibleMove;
