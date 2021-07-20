import React from "react";
import './PieceStyles.scss'
const Piece = (props) => {
    const component = () =>
    {
        let classes = [];
        classes = "singleHouse " + classes.concat(props.className) + classes.concat(props.houseColor); 
        classes = classes.replace(",", " ");

        return (
            <div
                id = {props.pieceId}
                className={classes}
                onClick={(e) => props.onClick(props.pieceId, e)}
                uuid = {props.uuid}
            >
                <div
                id={`${props.pieceId}-children`}
                className={"children"}
                />
            </div>
        )
    }
    return component();
}

export default Piece;
