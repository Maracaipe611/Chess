import PieceNames from "../../Utils/PieceNamesArray";
import AlphabetArray from "../../Utils/AlphabetArray";

const PieceModel = () => {
    const Colors = {
        Black: "Black",
        White: "White"
    };
    const AllPieces = [
        AlphabetArray.Normal.map((letter, i) => {
            const Name = PieceNames.pawn;
            const StartPosition = letter + 2;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ["A", "H"].map((letter, i) => {
            const Name = PieceNames.tower;
            const StartPosition = letter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['B', 'G'].map((letter, i) => {
            const Name = PieceNames.horse;
            const StartPosition = letter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['C', 'F'].map((letter, i) => {
            const Name = PieceNames.bishop;
            const StartPosition = letter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['E'].map((letter, i) => {
            const Name = PieceNames.king;
            const StartPosition = letter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['D'].map((letter, i) => {
            const Name = PieceNames.queen;
            const StartPosition = letter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        //BlackPieces
        AlphabetArray.Normal.map((letter, i) => {
            const Name = PieceNames.pawn;
            const StartPosition = letter + 7;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ["A", "H"].map((letter, i) => {
            const Name = PieceNames.tower;
            const StartPosition = letter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['B', 'G'].map((letter, i) => {
            const Name = PieceNames.horse;
            const StartPosition = letter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['C', 'F'].map((letter, i) => {
            const Name = PieceNames.bishop;
            const StartPosition = letter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['E'].map((letter, i) => {
            const Name = PieceNames.king;
            const StartPosition = letter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        }),
        ['D'].map((letter, i) => {
            const Name = PieceNames.queen;
            const StartPosition = letter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbleToChange = false;
            return { Id, Name, StartPosition, Color, CurrentHouse, AbleToChange }
        })
    ]

    return AllPieces
};

export default PieceModel;
