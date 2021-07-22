import Piece from "../PieceComponent/PieceComponent";
const House = (AlphabetIndex, NumberIndex) => {
    class HouseModel {
        Id;
        Color;
        AlphabetIndex;
        NumberIndex;
    };

    const Colors = {
        Black: "Black",
        White: "White"
    };

    const generateSingleHouse = () =>
    {
        const singleHouse = new HouseModel();

        singleHouse.Color = AlphabetIndex % 2 === 0 ? Colors.White : Colors.Black;
        singleHouse.AlphabetIndex = AlphabetIndex;
        singleHouse.NumberIndex = NumberIndex;
        singleHouse.Id = AlphabetIndex + NumberIndex;

        return (
            <div
                className={"singleHouse"}
                Color={singleHouse.Color}
                Id = {singleHouse.AlphabetIndex}>
                <Piece
                    originalHouse = {singleHouse.Id}
                />
            </div>
        )
    }

    return generateSingleHouse
}
export default House;
