import "../components/style.css";


export default function MyTeam() {


    return (
        <body>
            <div className="page-title">
                <div className="text-wrapper">My Team</div>
                {/* Should it be the name of the team? */}
            </div>
            <h2 className="flex-title">
                <div>Name</div>
                <div>Role</div>
                <div>Contact</div>
            </h2>
            <hr />
        </body>
    );
}