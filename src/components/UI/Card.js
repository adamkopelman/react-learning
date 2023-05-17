import "./Card.css";

const Card = (props) => {
    const classes = props.className;
    return <div className={classes + " card"}>{props.children}</div>;
};

export default Card;
