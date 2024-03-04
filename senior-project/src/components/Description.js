import "./style.css";
import JoinButton from "./JoinButton";
import CloseButton from "./CloseButton";


export default function Description() {

    return (
        <div className="desc">
            <h2 className="descHeader">Description</h2>
            <hr />
            <p className="descText">lorem ipsum</p>
            <h2 className="descHeader">Contact</h2>
            <hr />
            <p className="descText">email...</p>
            <JoinButton />
        </div>
    );

}