import AddProj from "../components/AddProj";
import Model from 'react-modal';
import InfiniteScroll from "react-infinite-scroll-component";
import "../components/style.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
/*global google*/

export default function ProjPitch() {

  const [ popup, setPopup ] = useState(false);
  const [ des, setDes ] = useState(false);
  const [projects, setData] = useState([]);
  const [ displayDes, setDisplayDes ] = useState([]);
  const [ displayConact, setDisplayContact ] = useState([]);
  const [ displayPID, setDisplayPID ] = useState(0);
  const [join, setJoin] = useState({
    email: null,
    pID: null
  });

  const [ numSlots, setNumSlots ] = useState(-1);
  const [ numCap, setNumCap ] = useState(-1);

  const navigate = useNavigate();

  {/* Get data from the backend */}  
  useEffect(() => {
    fetchData();
  }, []);
    
  const fetchData = async (event) => {
    try {
      const response = await fetch('/student/projects');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  {/* Student joins team - sends data to backend */}  
  const joinTeam = async event => {
    document.getElementById("JoinButton").style.visibility="hidden";
    join.email = localStorage.getItem("email");
    //join.email = 'masterbear123@ufl.edu';

    join.pID = displayPID;

    try {
      const response = await fetch('/student/join/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(join)
      });
      if (response.ok) {
        console.log('Data sent successfully');
        navigate(0);
        // Clear form data after successful submission
      } else {
        document.getElementById("JoinButton").style.visibility="visible";
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


  {/* Displays the availbility */}  
  function displaySlots(taken, cap) {
    const slots = [];

    for (let i = 0; i < taken; i++) {
      slots.push(<li className="noBullets"><div className="rectCar1 filledRect xSlot">X</div></li>)
    }

    for (let i = 0; i < cap - taken; i++) {
      slots.push(<li className="noBullets"><div className="emptyRect rectCar1" /></li>)
    }
    
    return (
      <div className="rectFlex">
        {slots}
      </div>
    );
  }

  {/* Sets the text when project is clicked */}  
  function DispayDes(description, contact, pID, slots, cap) {
    setDisplayDes(description);
    setDisplayContact(contact);
    setDisplayPID(pID);
    setDes(true);
    setNumSlots(slots);
    setNumCap(cap);

  }

  {/* Checks if project is full */}  
  const ReturnButton = () => {
    if (numSlots < numCap) {
      return <button className="joinButton" onClick={()=>joinTeam()} id="JoinButton">Join</button>;
    }
  }

  return (
    <body className="signedIn">

      {/* Form Popup */}  
        <button className="add" onClick={()=>setPopup(true)}><p className="addText">+</p></button>
        <Model isOpen={popup} style={{
            overlay: {
              position: 'fixed',
              zIndex: 1020,
              background: 'rgba(255, 255, 255, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            content: {
              top: "0",
              background: 'white',
              width: '70vw',
              height: '80vh',
              overflowY: 'auto',
              position: 'relative'
            }}} >
            <button className="closeButton" onClick={()=>setPopup(false)}><p className="closeText">X</p></button>
            <AddProj />
        </Model>

        {/* Headers */}  
        <div className="page-title">
            <div >Project Pitch</div>
        </div>
        <h2 className="flex-title">
            <div className="pitch-title1">Topic</div>
            <div className="pitch-title2">Availability</div>
            <div className="pitch-title3">Type(s)</div>
            <div className="pitch-title4">Language(s)</div>
        </h2>
        <hr />

        {/* Loads in projects */}  
        <InfiniteScroll dataLength={projects.length}
            loader={<p>Loading...</p>}
        >
            {projects.map(item => (
            <button className="clickDes" onClick={()=>DispayDes(item.DESCINPUT, item.CONTACT, item.PID, item.FILLED, item.CAPACITY)}>
            <div className="flex-container projCard">
              <div className="stuCar1" key={item}>{item.NAME}</div>
              <div className="stuCar2" key={item}>{displaySlots(item.FILLED, item.CAPACITY)}</div>
              <div className="stuCar3">{item.TYPE.map(type => (
                <p>{type.NAME}</p>
              ))}</div>
              <div className="stuCar4">{item.LANGUAGE.map(lang => (
                <p>{lang.NAME}</p>
              ))}</div>
            </div>
            </button>   
            ))}
            
            {/* Popup when project is clicked */}  
            <Model isOpen={des} style={{
            overlay: {
              position: 'fixed',
              zIndex: 1020,
              background: 'rgba(255, 255, 255, 0.75)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            content: {
              top: "0",
              background: 'white',
              width: '70vw',
              maxHeight: '80vh',
              overflowY: 'auto',
              position: 'relative'
            }}} >
              <button className="closeButton" onClick={()=>setDes(false)}><p className="closeText">X</p></button>
              <div className="desc">
                <h2 className="descHeader">Description</h2>
                <hr />
                <p className="descText">{displayDes}</p>
                <h2 className="descHeader">Contact</h2>
                <hr />
                <p className="descText">{displayConact}</p>
                {ReturnButton()}
              </div>
            </Model>

        </InfiniteScroll>
    </body>
  );
}