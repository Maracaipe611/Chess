import PieceNames from "../../Utils/PieceNamesArray";

const PieceImage = (pieceName, pieceColor) => {
    const Black = {
        King: URL("./ChessBlackKing.png"),
        Queen: URL("./ChessBlackQueen.png"),
        Bishop: URL("./ChessBlackBishop.png"),
        Horse: URL("./ChessBlackHorse.png"),
        Tower: URL("./ChessBlackTower.png"),
        Pawn: URL("./ChessBlackPawn.png"),
    };

    const White = {
        King: URL("./ChessBlackKing.png"),
        Queen: URL("./ChessBlackQueen.png"),
        Bishop: URL("./ChessBlackBishop.png"),
        Horse: URL("./ChessBlackHorse.png"),
        Tower: URL("./ChessBlackTower.png"),
        Pawn: URL("./ChessBlackPawn.png"),
    };

    const getImage = () => {
        switch (pieceColor) {
            case "Black":
                switch (pieceName) {
                    case PieceNames.king:
                        return Black.King;
                    case PieceNames.queen:
                        return Black.Queen;
                    case PieceNames.bishop:
                        return Black.Bishop;
                    case PieceNames.horse:
                        return Black.Horse;
                    case PieceNames.tower:
                        return Black.Tower;
                    case PieceNames.pawn:
                        return Black.Pawn;
                    default:
                        return null;
                }
            case "White":
                switch (pieceName) {
                    case PieceNames.king:
                        return White.King;
                    case PieceNames.queen:
                        return White.Queen;
                    case PieceNames.bishop:
                        return White.Bishop;
                    case PieceNames.horse:
                        return White.Horse;
                    case PieceNames.tower:
                        return White.Tower;
                    case PieceNames.pawn:
                        return White.Pawn;
                    default:
                        return null;
                }

            default:
                return null
        }
    }
}

export default PieceImage();
