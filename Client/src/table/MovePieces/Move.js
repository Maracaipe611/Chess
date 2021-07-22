const SingleMove = (pieceName, piecePosition, color, movedHouses) => {
    const colunmAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var directionToIgnore = [];

    class pieceModel {
        Name = "Void";
        Movements = [];
        FirstMove = true;
    }
    
    class Directions {
        UpSide = 1;
        UpSideLeft = 2;
        UpSideRight = 3;
        DownSide = 4;
        DownSideLeft = 5;
        DownSideRight = 6;
        LeftSide = 7;
        LeftSideUp = 8;
        LeftSideDown = 9;
        RightSide = 10;
        RightSideUp = 11;
        RightSideDown = 12;
        UpSideDouble = 13;

    }

    const direction = new Directions();
    
    const Pawn = () => {
        const pawn = new pieceModel();
        pawn.Name = "Pawn";
        pawn.Movements = [
            [0, +1, direction.UpSide], //UpSide
            [0, +2, direction.UpSideDouble], //UpSideDouble
            [+1, +1, direction.UpSideLeft],//EatLeft 
            [-1, +1, direction.UpSideRight]//EatRight 
        ];
        pawn.FirstMove = true;
        return pawn;
    };
    
    const Tower = () => {
        const tower = new pieceModel();
        tower.Name = "Tower";
        tower.Movements = [
            //UpSide
                [0, 1, direction.UpSide],
            [0, 2, direction.UpSide], [0, 3, direction.UpSide], [0, 4, direction.UpSide], [0, 5, direction.UpSide], [0, 6, direction.UpSide], [0, 7, direction.UpSide]
            ,
            //DownSide
            [0, -1, direction.DownSide], [0, -2, direction.DownSide], [0, -3, direction.DownSide], [0, -4, direction.DownSide], [0, -5, direction.DownSide], [0, -6, direction.DownSide], [0, -7, direction.DownSide]
            ,
            //RightSide
            [1, 0, direction.RightSide], [2, 0, direction.RightSide], [3, 0, direction.RightSide], [4, 0, direction.RightSide], [5, 0, direction.RightSide], [6, 0, direction.RightSide], [7, 0, direction.RightSide]
            ,
            //LeftSide
            [-1, 0, direction.LeftSide], [-2, 0, direction.LeftSide], [-3, 0, direction.LeftSide], [-4, 0, direction.LeftSide], [-5, 0, direction.LeftSide], [-6, 0, direction.LeftSide], [-7, 0, direction.LeftSide]
            
        ];
        return tower;
    };

    const Horse = () => {
        const horse = new pieceModel();
        horse.Name = "Horse";
        horse.Movements = [
            [2, 1],//UpSideRight
            [2, -1],//UpSideLeft
            [-2, 1],//DownSideRight
            [-2, -1],//DownSideLeft
            [1, 2],//RightSideUp
            [-1, 2],//RightSideLeft
            [1, -2],//LeftSideUp
            [-1, -2]//LeftSideDown
        ];
        return horse;
    };

    const Bishop = () => {
        const bishop = new pieceModel();
        bishop.Name = "Bishop";
        bishop.Movements = [
            [1, 1, direction.UpSideRight],
            [2, 2, direction.UpSideRight],
            [3, 3, direction.UpSideRight],
            [4, 4, direction.UpSideRight],
            [5, 5, direction.UpSideRight],
            [6, 6, direction.UpSideRight],
            [7, 7, direction.UpSideRight],
            [1, -1, direction.UpSideLeft],
            [2, -2, direction.UpSideLeft],
            [3, -3, direction.UpSideLeft],
            [4, -4, direction.UpSideLeft],
            [5, -5, direction.UpSideLeft],
            [6, -6, direction.UpSideLeft],
            [7, -7, direction.UpSideLeft],
            [-1, 1, direction.DownSideRight],
            [-2, 2, direction.DownSideRight],
            [-3, 3, direction.DownSideRight],
            [-4, 4, direction.DownSideRight],
            [-5, 5, direction.DownSideRight],
            [-6, 6, direction.DownSideRight],
            [-7, 7, direction.DownSideRight],
            [-1, -1, direction.DownSideLeft],
            [-2, -2, direction.DownSideLeft],
            [-3, -3, direction.DownSideLeft],
            [-4, -4, direction.DownSideLeft],
            [-5, -5, direction.DownSideLeft],
            [-6, -6, direction.DownSideLeft],
            [-7, -7, direction.DownSideLeft]
        ];
        return bishop;
    };

    const King = () => {
        const king = new pieceModel();
        king.Name = "King";
        king.Movements = [
            [0, 1],//UpSide
            [1, 1],//UpSideRight
            [1, -1],//UpSideLeft
            [0, -1],//DownSide
            [-1, 1],//DownSideRight
            [-1, -1],//DownSideLeft
            [-1, 0],//LeftSide
            [1, 0]//RightSide
        ];
        return king;
    };

    const Queen = () => {
        const queen = new pieceModel();
        queen.Name = "Queen";
        queen.Movements = queen.Movements.concat(Tower().Movements).concat(Bishop().Movements);
        return queen;
    };

    const getIndex = (pieceIndex) =>
    {
        const letterIndex = pieceIndex.charAt(0);
        const NumberIndex = parseInt(pieceIndex.charAt(1));
        const letterIndexParsed = colunmAlphabet.findIndex(x => x === letterIndex) + 1;

        return { letterIndexParsed, NumberIndex};
    }

    const getIndexInStringSummed = (Index, move) =>
    {
        let finalLetter = colunmAlphabet[((move[0] + Index.letterIndexParsed) - 1)];
        let finalIndex = move[1] + Index.NumberIndex;

        return (finalLetter + finalIndex);
    }

    const getMove = (pieceName) => {
    //[letter, index]
    let Moves;
    switch (pieceName) {
        case Queen().Name:
            Moves = Queen().Movements;
            break;
        case King().Name:
            Moves = King().Movements;
            break;
        case Bishop().Name:
            Moves = Bishop().Movements;
            break;
        case Horse().Name:
            Moves = Horse().Movements;
            break;
        case Tower().Name:
            Moves = Tower().Movements;
            break;
        case Pawn().Name:
            Moves = Pawn().Movements
            break;
        default:
            Moves = [];
            break;
    }
    return Moves;
    }

    const respectLimit = (move, Index) => {
        const moveLetterIndex = move[0]; //5
        const moveIndex = move[1]; //0
        const direction = move[2] //upside
        const letterSum = Index.letterIndexParsed + moveLetterIndex;
        const indexSum = Index.NumberIndex + moveIndex;
        const sumResult =  colunmAlphabet[(letterSum - 1)] + indexSum;

        if (letterSum > 8 || letterSum < 1 || indexSum > 8 || indexSum < 1 || directionToIgnore.includes(direction)) //nao pode passar do limite
            return false;
        
        return sumResult;
    }

    const firstPieceMove = (movedHouses, actuallyPosition) => {
        const houveDiv = document.getElementById(actuallyPosition);
        const Uuid = houveDiv?.attributes.uuid.value;
        if (!!movedHouses.find(x => x.originalId === Uuid))
        {
            return false;
        }
        return true;
    }

    const possibleMoves = (pieceName, actuallyPosition, movedHouses) =>
    {
        let possibleMoves = [];
        let possibleMovesToEat = [];
        const firstMove  = pieceName !== "Void" ? firstPieceMove(movedHouses, actuallyPosition) : null;
        let pieceMovement = getMove(pieceName);
        const Index = getIndex(actuallyPosition);
        switch (pieceName) {
            case Queen().Name:
                pieceMovement.map(move => {
                    
                    if (!respectLimit(move, Index)) {
                        return null;
                    };

                    const pieceDirection = move[2];
                    const sumResult = respectLimit(move, Index);
                    const houseTarget = document.getElementById(sumResult);
                    const movingToEat = !houseTarget.classList.contains("Void");
                    const moveIndex = getIndexInStringSummed(Index, move);
                    const isTheSameColor = houseTarget.classList[2].startsWith(color);
                    if(isTheSameColor)
                    {
                        directionToIgnore = (directionToIgnore.concat(pieceDirection))
                        return null;
                    }

                    if (movingToEat)
                    {
                        directionToIgnore = (directionToIgnore.concat(pieceDirection)) //filtra a direção que a peça está indo, para que não atravesse outras casas
                        possibleMovesToEat.push(moveIndex);; //atualizar a array enquanto mapeia a própria array não é uma boa ideia
                    }

                    possibleMoves.push(moveIndex);
                });
                break;
            case Pawn().Name:
                pieceMovement.map(move => {
                    if (!respectLimit(move, Index)){
                        return null;
                    };

                    const pieceDirection = move[2];
                    const sumResult = respectLimit(move, Index);
                    const houseTarget = document.getElementById(sumResult);
                    const houseTargetUuid = houseTarget?.attributes.uuid?.value;
                    const movingToEat = !houseTarget.classList.contains("Void") && !!houseTargetUuid;
                    const moveIndex = getIndexInStringSummed(Index, move);
                    const isTheSameColor = houseTarget.classList[2].startsWith(color);
                    if (isTheSameColor) {
                        return null;
                    }

                    //first move can be double house
                     if (!firstMove && pieceDirection === direction.UpSideDouble) {
                        return null;
                    };
                    //move forward and only eat on the left/right side
                    if ((!movingToEat && (pieceDirection !== direction.UpSide && pieceDirection !== direction.UpSideDouble))
                        || (movingToEat && (pieceDirection === direction.UpSide || pieceDirection === direction.UpSideDouble)))
                    {
                        return null;
                    };

                    possibleMoves.push(moveIndex);

                });
                break;
            case Horse().Name:
                pieceMovement.map(move => {
                    if (!respectLimit(move, Index)) {
                        return null;
                    };

                    const sumResult = respectLimit(move, Index);
                    const houseTarget = document.getElementById(sumResult);
                    const movingToEat = !houseTarget.classList.contains("Void");
                    const moveIndex = getIndexInStringSummed(Index, move);
                    const isTheSameColor = houseTarget.classList[2].startsWith(color);
                    if (isTheSameColor) {
                        return null;
                    }

                    possibleMoves.push(moveIndex);
                });
                break;
            case Bishop().Name:
                pieceMovement.map(move => {
                    if (!respectLimit(move, Index)) {
                        return null;
                    };

                    const pieceDirection = move[2];
                    const sumResult = respectLimit(move, Index);
                    const houseTarget = document.getElementById(sumResult);
                    const movingToEat = !houseTarget.classList.contains("Void");
                    const moveIndex = getIndexInStringSummed(Index, move);
                    const isTheSameColor = houseTarget.classList[2].startsWith(color);
                    if (isTheSameColor)
                    {
                        directionToIgnore = (directionToIgnore.concat(pieceDirection))
                        return null;
                    }

                    if (movingToEat)
                    {
                        directionToIgnore = (directionToIgnore.concat(pieceDirection))
                        possibleMovesToEat.push(moveIndex);
                    }
                    possibleMoves.push(moveIndex);
                });
                break;
            case Tower().Name:
                pieceMovement.map(move => {
                    if (!respectLimit(move, Index)) {
                        return null;
                    };

                    const pieceDirection = move[2];
                    const sumResult = respectLimit(move, Index);
                    const houseTarget = document.getElementById(sumResult);
                    const movingToEat = !houseTarget.classList.contains("Void");
                    const moveIndex = getIndexInStringSummed(Index, move);
                    const isTheSameColor = houseTarget.classList[2].startsWith(color);
                    if (isTheSameColor) {
                        directionToIgnore = (directionToIgnore.concat(pieceDirection))
                        return null;
                    }

                    if (movingToEat) {
                        possibleMovesToEat.push(moveIndex);
                    }
                    possibleMoves.push(moveIndex);
                });
                break;
            case King().Name:
                pieceMovement.map(move => {
                    if (!respectLimit(move, Index)) {
                        return null;
                    };

                    const sumResult = respectLimit(move, Index);
                    const houseTarget = document.getElementById(sumResult);
                    const movingToEat = !houseTarget.classList.contains("Void");
                    const moveIndex = getIndexInStringSummed(Index, move);
                    const isTheSameColor = houseTarget.classList[2].startsWith(color);
                    if (isTheSameColor)
                    {
                        return null;
                    }

                    if (movingToEat)
                    {
                        possibleMovesToEat.push(moveIndex);
                    }
                    possibleMoves.push(moveIndex);
                });
                break;
            default:
                possibleMovesToEat = [];
                possibleMoves = [];
                break;
        }
        return possibleMoves;
    }
    return possibleMoves(pieceName, piecePosition, movedHouses);
}

export default SingleMove;