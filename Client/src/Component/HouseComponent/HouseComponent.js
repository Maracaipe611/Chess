import Piece from "../PieceComponent/PieceComponent";
import AlphabetArray from "../../Utils/AlphabetArray";
import "./HouseStyles.scss"
import PieceNames from "../../Utils/PieceNamesArray";
const House = (props) => {
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


    const alphabetArray = AlphabetArray();
    const pieceNames = PieceNames;

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
        const pieceId = Object.values(document.getElementById(singleHouse.Id)?.children)?.find(x => x)?.dataset.pieceid || pieceNames.void;
        const houseDiv = document.getElementById(singleHouse.Id);
        return { pieceId, houseDiv}
    }

    const generateSingleHouse = () =>
    {
        const singleHouse = new HouseModel();
        const AlphabetColunm = alphabetArray[props.AlphabetIndex]

        singleHouse.Color = getHouseColor();
        singleHouse.AlphabetIndex = props.AlphabetIndex;
        singleHouse.NumberIndex = props.NumberIndex;
        singleHouse.Id = AlphabetColunm + props.NumberIndex;
        singleHouse.AlphabetColunm = AlphabetColunm;

        const isPossibleToMove = !!(props.PossibleMove.find(x => x === singleHouse.Id));
        const cursor = isPossibleToMove ? "pointer" : "unset"
        const selectHouseClass = props.SelectedHouse === singleHouse.Id ? " selectedHouse" : ""

        return (
            <div
                className={"singleHouse " + singleHouse.Color + selectHouseClass}
                data-housecolor={singleHouse.Color}
                data-ispossibletomove={isPossibleToMove}
                id = {singleHouse.Id}
                onClick={() => props.onClick(getChildId(singleHouse))}
                style={{ cursor: cursor}}
                >
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
