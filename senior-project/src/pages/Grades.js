import "../components/style.css"
/*global google*/


export default function Grades() {

    return (
        <body className="signedIn">
            <div className="page-title">
                <div className="text-wrapper">Grades</div>
            </div>
            <hr />
            <iframe src="https://ufl.qualtrics.com/jfe/form/SV_3dX436SqYqdJzzU" className="gradeSite" allowfullscreen></iframe>
        </body>
    )
}