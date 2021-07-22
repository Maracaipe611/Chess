import PieceNames from "../../Utils/PieceNamesArray";
import AlphabetArray from "../../Utils/AlphabetArray";
import './PieceStyles.scss'
import PieceImage from "../../table/ChessPieces/PieceImage";

const PieceModel = () => {
    const alphabetArray = AlphabetArray();
    const Colors  = {
        Black: "Black",
        White: "White"
    };
    const WhitePieces = () => {
        return [
            alphabetArray.map((letter, i) => {
                const Name = PieceNames.pawn;
                const StartPosition = letter + 2;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ["A", "H"].map((letter, i) => {
                const Name = PieceNames.tower;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['B', 'G'].map((letter, i) => {
                const Name = PieceNames.horse;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['C', 'F'].map((letter, i) => {
                const Name = PieceNames.bishop;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['E'].map((letter, i) => {
                const Name = PieceNames.king;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['D'].map((letter, i) => {
                const Name = PieceNames.queen;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                const Color = Colors.White;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            })
        ]
    };
    const BlackPieces = () => {
        return [
            alphabetArray.map((letter, i) => {
                const Name = PieceNames.pawn;
                const StartPosition = letter + 7;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ["A", "H"].map((letter, i) => {
                const Name = PieceNames.tower;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['B', 'G'].map((letter, i) => {
                const Name = PieceNames.horse;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['C', 'F'].map((letter, i) => {
                const Name = PieceNames.bishop;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['E'].map((letter, i) => {
                const Name = PieceNames.king;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            }),
            ['D'].map((letter, i) => {
                const Name = PieceNames.queen;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                const Color = Colors.Black;
                const Image = PieceImage(Name, Color)
                return { Id, Name, StartPosition, Color, Image }
            })
        ]
    };

    return { WhitePieces, BlackPieces, PieceNames }
};

export default PieceModel();
