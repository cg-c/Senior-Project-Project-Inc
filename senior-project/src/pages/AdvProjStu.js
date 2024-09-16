import React from "react";
import Model from "react-modal";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../components/style.css"
/*global google*/

export default function AdvProjStu() {

  const [ des, setDes ] = useState(false);
  const [projects, setData] = useState([]);
  const [ displayDes, setDisplayDes ] = useState([]);
  const [ displayConact, setDisplacyContact ] = useState([]);
  const [ displayType, setDisplayType ] = useState([]);
  const [ displayLang, setDisplayLang ] = useState([]);
  const [ numSlots, setNumSlots ] = useState(-1);
  const [ numCap, setNumCap ] = useState(-1);
  const [ displayPID, setDisplayPID ] = useState(0);
  const [join, setJoin] = useState({
    email: null,
    pID: null
  });

  const navigate = useNavigate();

  {/* Gets data from backend */}  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/advisor/projects');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  {/* Displays Availability */}  
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

  {/* Student joins advisor's project - sends data to backend */}  
  const joinTeam = async event => {
    document.getElementById("JoinButton").style.visibility="hidden";
    join.email = localStorage.getItem("email");
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

  {/* Set project description display */}  
  function DispayDes(description, contact, type, language, slots, cap, pID) {
    setDisplayDes(description);
    setDisplacyContact(contact);
    setDes(true);
    setDisplayType(type);
    setDisplayLang(language);
    setNumSlots(slots);
    setNumCap(cap);
    setDisplayPID(pID);
  }

  {/* Checks if project is full */}  
  const ReturnButton = () => {
    if (numSlots < numCap) {
      return <button className="joinButton" onClick={()=>joinTeam()} id="JoinButton" >Join</button>
    }
  }

  return (
    <body className="signedIn">

        {/* Headers */}  
        <div className="page-title">
            <div>Posted by Advisor</div>
        </div>
        <h2 className="flex-title">
            <div className="adv1-title">Project</div>
            <div className="adv2-title">Availability</div>
            <div className="adv3-title">Description</div>
        </h2>
        <hr />

        {/* Load in all projects */}  
        <InfiniteScroll dataLength={projects.length}
            loader={<p>Loading...</p>}
        >
            {projects.map(item => (
            <button className="clickDes" onClick={()=>DispayDes(item.DESCINPUT, item.CONTACT, item.TYPE, item.LANGUAGE, item.FILLED, item.CAPACITY, item.PID)}>
            <div className="flex-container projCard">
              <div className="advCar1" key={item}>{item.NAME}</div>
              <div className="advCar2" key={item}>{displaySlots(item.FILLED, item.CAPACITY)}</div>
              <div className="advCar3"><div className="downArrow" /></div>
            </div>
            </button>   
            ))}
      
            {/* Project Description Popup */}  
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
                <h2 className="descHeader">Type(s)</h2> 
                <hr />
                <p className="descText">{displayType.map(type => (
                  <p>{type.NAME}</p>
                ))}</p>
                <h2 className="descHeader">Lanuage(s)</h2>
                <hr />
                <p className="descText">{displayLang.map(lang => (
                  <p>{lang.NAME}</p>
                ))}</p>
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