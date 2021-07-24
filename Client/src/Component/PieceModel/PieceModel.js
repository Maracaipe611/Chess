import PieceNames from "../../Utils/PieceNamesArray";
import AlphabetArray from "../../Utils/AlphabetArray";

const PieceModel = () => {
    const alphabetArray = AlphabetArray();
    const Colors  = {
        Black: "Black",
        White: "White"
    };
    const AllPieces = [
            alphabetArray.map((letter, i) => {
                const Name = PieceNames.pawn;
                const StartPosition = letter + 2;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ["A", "H"].map((letter, i) => {
                const Name = PieceNames.tower;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['B', 'G'].map((letter, i) => {
                const Name = PieceNames.horse;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['C', 'F'].map((letter, i) => {
                const Name = PieceNames.bishop;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['E'].map((letter, i) => {
                const Name = PieceNames.king;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['D'].map((letter, i) => {
                const Name = PieceNames.queen;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            //BlackPieces
            alphabetArray.map((letter, i) => {
                const Name = PieceNames.pawn;
                const StartPosition = letter + 7;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ["A", "H"].map((letter, i) => {
                const Name = PieceNames.tower;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['B', 'G'].map((letter, i) => {
                const Name = PieceNames.horse;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['C', 'F'].map((letter, i) => {
                const Name = PieceNames.bishop;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['E'].map((letter, i) => {
                const Name = PieceNames.king;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            }),
            ['D'].map((letter, i) => {
                const Name = PieceNames.queen;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                let CurrentHouse = StartPosition;
                let Ativo = true;
                return { Id, Name, StartPosition, Color, CurrentHouse, Ativo }
            })
        ]

    return { AllPieces, PieceNames }
};

export default PieceModel;
