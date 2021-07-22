import Piece from "../PieceComponent/PieceComponent";
import AlphabetArray from "../../Utils/AlphabetArray";
import "./HouseStyles.scss"
const House = (AlphabetIndex, NumberIndex) => {
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

    const getHouseColor = () =>
    {
        let color;

        if ((AlphabetIndex % 2 === 0 && NumberIndex % 2 !== 0) ||
            (AlphabetIndex % 2 !== 0 && NumberIndex % 2 === 0)) {
            color = Colors.Black;
        }else{
            color = Colors.White;
        }

        return color;
    }

    const generateSingleHouse = () =>
    {
        const singleHouse = new HouseModel();
        const AlphabetColunm = alphabetArray[AlphabetIndex]

        singleHouse.Color = getHouseColor();
        singleHouse.AlphabetIndex = AlphabetIndex;
        singleHouse.NumberIndex = NumberIndex;
        singleHouse.Id = AlphabetColunm + NumberIndex;
        singleHouse.AlphabetColunm = AlphabetColunm;

        return (
            <div
                className={"singleHouse " + singleHouse.Color}
                housecolor={singleHouse.Color}
                id = {singleHouse.Id}>
                <Piece
                    originalHouse = {singleHouse.Id}
                />
            </div>
        )
    }

    return generateSingleHouse()
}
export default House;
