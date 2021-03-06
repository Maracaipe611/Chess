import Piece from "../PieceComponent/PieceComponent";
import AlphabetArray from "../../Utils/AlphabetArray";
import "./HouseStyles.scss"
import PossibleMove from "../PossibleMoveComponent/PossibleMove";
import ModalPawnOptions from "../OptionsToPawnTransform/OptionsToPawnTransform";
import { useAllPieces } from "../../Providers/AllPieces";

const House = (props) => {
    const { AllPieces } = useAllPieces()
    class HouseModel {
        Id;
        Color;
        AlphabetIndex;
        NumberIndex;
        AlphabetColunm;
    };

    const Colors = {
        Black: "Black",
        White: "White"
    };

    const getHouseColor = () =>
    {
        let color;

        if ((props.AlphabetIndex + props.NumberIndex) % 2 === 0 ) {
            color = Colors.Black;
        }else{
            color = Colors.White;
        }

        return color;
    }

    const getChildId = (singleHouse) =>
    {
        const piece = AllPieces.map(pieces => pieces.find(piece =>
            piece.CurrentHouse === singleHouse.Id
            )).find(x => x) ||
        {
            Id: "0",
            Name: "Void"
        };
        const houseDiv = document.getElementById(singleHouse.Id);
        return { piece, houseDiv}
    }
    

    const generateSingleHouse = () =>
    {
        const singleHouse = new HouseModel();
        const AlphabetColunm = AlphabetArray.Normal[props.AlphabetIndex]

        singleHouse.Color = getHouseColor();
        singleHouse.AlphabetIndex = props.AlphabetIndex;
        singleHouse.NumberIndex = props.NumberIndex;
        singleHouse.Id = AlphabetColunm + props.NumberIndex;
        singleHouse.AlphabetColunm = AlphabetColunm;

        const isPossibleToMove = !!(props.PossibleMove.find(x => x === singleHouse.Id));
        const cursor = isPossibleToMove ? "pointer" : "unset"
        const selectHouseClass = props.SelectedHouse === singleHouse.Id ? " selectedHouse" : ""
        const isAnyPieceInThisHouse = props.ableHouses.flatMap(house => AllPieces.map(x => x.filter(piece => piece.CurrentHouse === house)).filter(x => x.length).find(x => x));
        const preyPieceClass = isAnyPieceInThisHouse.filter(x => x?.CurrentHouse === singleHouse.Id).length ? " Prey" : ""

        return (
            <div
                className={"singleHouse " + singleHouse.Color + selectHouseClass + preyPieceClass}
                data-housecolor={singleHouse.Color}
                data-ispossibletomove={isPossibleToMove}
                id = {singleHouse.Id}
                onClick={() => props.onClick(getChildId(singleHouse))}
                style={{ cursor: cursor}}
                key= {singleHouse.Id}
            >
                <ModalPawnOptions
                    houseId={singleHouse.Id}
                />
                <PossibleMove
                    ableHouses={props.ableHouses}
                    houseId={singleHouse.Id}
                />
                <Piece
                    originalHouse = {singleHouse.Id}
                    onClick = {props.onClick}
                    PossibleMove = {props.PossibleMove}
                />
            </div>
        )
    }

    return generateSingleHouse()
}
export default House;
