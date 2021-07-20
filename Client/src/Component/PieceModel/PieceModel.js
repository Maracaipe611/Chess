import { v4 as uuidv4 } from 'uuid';

const PieceModel = () => {
    const colunmAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const PieceNames = {
        pawn: "Pawn",
        tower: "Tower",
        horse: "Horse",
        bishop: "Bishop",
        queen: "Queen",
        king: "King",
        void: "Void"
    };
    const WhitePieces = () => {
        return [
            colunmAlphabet.map((letter, i) => {
                const Name = PieceNames.pawn;
                const StartPosition = letter + 2;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ["A", "H"].map((letter, i) => {
                const Name = PieceNames.tower;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['B', 'G'].map((letter, i) => {
                const Name = PieceNames.horse;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['C', 'F'].map((letter, i) => {
                const Name = PieceNames.bishop;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['E'].map((letter, i) => {
                const Name = PieceNames.king;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['D'].map((letter, i) => {
                const Name = PieceNames.queen;
                const StartPosition = letter + 1;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            })
        ]
    };
    const BlackPieces = () => {
        return [
            colunmAlphabet.map((letter, i) => {
                const Name = PieceNames.pawn;
                const StartPosition = letter + 7;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ["A", "H"].map((letter, i) => {
                const Name = PieceNames.tower;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['B', 'G'].map((letter, i) => {
                const Name = PieceNames.horse;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['C', 'F'].map((letter, i) => {
                const Name = PieceNames.bishop;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['E'].map((letter, i) => {
                const Name = PieceNames.king;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            }),
            ['D'].map((letter, i) => {
                const Name = PieceNames.queen;
                const StartPosition = letter + 8;
                const Id = i + Name + StartPosition;
                return { Id, Name, StartPosition }
            })
        ]
    };

    return { WhitePieces, BlackPieces, PieceNames }
};

export default PieceModel();
