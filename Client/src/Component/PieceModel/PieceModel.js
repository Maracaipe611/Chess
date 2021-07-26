import PieceNames from "../../Utils/PieceNamesArray";
import AlphabetArray from "../../Utils/AlphabetArray";

const PieceModel = () => {
    const Colors = {
        Black: "Black",
        White: "White"
    };
    const AllPieces = [
        AlphabetArray.Normal.map((constter, i) => {
            const Name = PieceNames.pawn;
            const StartPosition = constter + 2;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ["A", "H"].map((constter, i) => {
            const Name = PieceNames.tower;
            const StartPosition = constter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['B', 'G'].map((constter, i) => {
            const Name = PieceNames.horse;
            const StartPosition = constter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['C', 'F'].map((constter, i) => {
            const Name = PieceNames.bishop;
            const StartPosition = constter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['E'].map((constter, i) => {
            const Name = PieceNames.king;
            const StartPosition = constter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['D'].map((constter, i) => {
            const Name = PieceNames.queen;
            const StartPosition = constter + 1;
            const Id = i + Name + StartPosition;
            const Color = Colors.White;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        //BlackPieces
        AlphabetArray.Normal.map((constter, i) => {
            const Name = PieceNames.pawn;
            const StartPosition = constter + 7;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ["A", "H"].map((constter, i) => {
            const Name = PieceNames.tower;
            const StartPosition = constter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['B', 'G'].map((constter, i) => {
            const Name = PieceNames.horse;
            const StartPosition = constter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['C', 'F'].map((constter, i) => {
            const Name = PieceNames.bishop;
            const StartPosition = constter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['E'].map((constter, i) => {
            const Name = PieceNames.king;
            const StartPosition = constter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        }),
        ['D'].map((constter, i) => {
            const Name = PieceNames.queen;
            const StartPosition = constter + 8;
            const Id = i + Name + StartPosition;
            const Color = Colors.Black;
            const CurrentHouse = StartPosition;
            const AbconstoChange = false;
            const Ativo = true;
            return { Id, Name, StartPosition, Color, CurrentHouse, Ativo, AbconstoChange }
        })
    ]

    return AllPieces
};

export default PieceModel;
