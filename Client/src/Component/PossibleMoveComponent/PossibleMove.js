import './PossibleMove.scss';
import { useAllPieces } from '../../Providers/AllPieces';

const PossibleMove = (props) => {
    const ableHousesToMove = props.ableHouses;
    const houseId = props.houseId;
    const { AllPieces } = useAllPieces()

    const HouseIsPossibleToMove = () => {
        const isAbleToMove = ableHousesToMove.map(house => house === houseId).find(x => x);
        const isAnyPieceInThisHouse = AllPieces.flatMap(x => x.filter(y => y.CurrentHouse === houseId && y.Ativo)).find(x => x);

        if (!!isAbleToMove) {
            return (<div className={"possibleMove"} style={{ display: !!isAnyPieceInThisHouse ? "none" : "block" }} />)
        }

        return null
    }

    return HouseIsPossibleToMove();
}

export default PossibleMove;
