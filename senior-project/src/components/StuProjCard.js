import "./style.css"

export default function StuProjCard() {


    return (
        <div className="flex-container projCard">
            <div className="stuCard1">Topic</div>
            <div className="stuCar2">slot img</div>
            {/* Use map/array to push the rect divs --> display */}
            <div className="stuCar3">Type</div>
            <div className="stuCar4">Languages</div>
        </div>
    );
}
