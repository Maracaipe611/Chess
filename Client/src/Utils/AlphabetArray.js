const AlphabetArray = (inverted) =>
{
    const alphabet = !!!inverted ? ["A", "B", "C", "D", "E", "F", "G", "H"] : ["H", "G", "F", "E", "D", "C", "B", "A"]
    return (alphabet);
}

export default AlphabetArray;
