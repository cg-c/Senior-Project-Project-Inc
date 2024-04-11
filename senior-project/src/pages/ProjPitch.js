import ProjCard from "../components/StuProjCard";
import AddProj from "../components/AddProj";
import Model from 'react-modal';
import InfiniteScroll from "react-infinite-scroll-component";
import "../components/style.css"
import Description from "../components/Description";
import JoinButton from "../components/JoinButton";
import { useState, useEffect } from "react";
import CloseButton from "../components/CloseButton";

export default function ProjPitch() {

    const [ popup, setPopup ] = useState(false);
    const [ numPitch, setNumPitch ] = useState(Array.from({length : 10}));
    const [ des, setDes ] = useState(false);
    const [projects, setData] = useState([]);

    const [ displayDes, setDisplayDes ] = useState([]);
    const [ displayConact, setDisplacyContact ] = useState([]);
      
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

    const fetchMorePitch = () => {
        {/* MAKE API CALLS 
        https://youtu.be/NZKUirTtxcg 
        https://www.youtube.com/watch?v=31icbinDtaO-k
        */}
    }

    function displaySlots(taken, cap) {
      const slots = []
      for (let i = 0; i < taken; i++) {
        slots.push(<li className="noBullets"><div className="filledRect rectCar1" /></li>)
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

    function DispayDes(description, contact) {
      setDisplayDes(description);
      setDisplacyContact(contact);
      setDes(true);
    }

    return (
        <body className="signedIn">
            <button className="add" onClick={()=>setPopup(true)}>+</button>
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
                <button className="closeButton" onClick={()=>setPopup(false)}>X</button>
                <AddProj />
            </Model>
            <div className="page-title">
                <div >Project Pitch</div>
            </div>
            <h2 className="flex-title">
                <div className="pitch-title1">Topic</div>
                <div className="pitch-title2">Availability</div>
                <div className="pitch-title3">Type</div>
                <div className="pitch-title4">Language</div>
            </h2>
            <hr />
            <InfiniteScroll dataLength={projects.length}
                loader={<p>Loading...</p>}
            >
                {projects.map(item => (
                <button className="clickDes" onClick={()=>DispayDes(item.DESCINPUT, item.CONTACT)}>
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
                  <button className="closeButton" onClick={()=>setDes(false)}>X</button>
                  <div className="desc">
                    <h2 className="descHeader">Description</h2>
                    <hr />
                    <p className="descText">{displayDes}</p>
                    <h2 className="descHeader">Contact</h2>
                    <hr />
                    <p className="descText">{displayConact}</p>
                    <JoinButton />
                  </div>
                    {/*
                        Jonathan: load in the descriptions of projects using Description template
                    */}
                </Model>

            </InfiniteScroll>
        </body>
            
    )
}