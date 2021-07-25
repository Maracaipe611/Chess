import './PossibleMove.scss';

const PossibleMove = (props) => {
    const ableHousesToMove = props.ableHouses;
    const houseId = props.houseId;
    const allPieces = props.AllPieces;

    const HouseIsPossibleToMove = () => {
        const isAbleToMove = ableHousesToMove.map(house => house === houseId).find(x => x);
        const isAnyPieceInThisHouse = allPieces?.flatMap(x => x.filter(y => y.CurrentHouse === houseId && y.Ativo)).find(x => x);

        if (!!isAbleToMove) {
            return (<div className={"possibleMove"} style={{ display: !!isAnyPieceInThisHouse ? "none" : "block" }} />)
        }

        return null
    }

    return HouseIsPossibleToMove();
}

export default PossibleMove;
