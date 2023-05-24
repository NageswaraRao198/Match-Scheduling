import { useEffect, useState } from 'react'
import './App.css'
import Table from '../components/table';
import Schedule from '../components/schedule';


function App() {
  const [teams,setTeams]=useState([]);
  // const [venues,setVenues]=useState([])
  const [inputValue1,setInputValue1]=useState("");
  // const [inputValue2,setInputValue2]=useState("");
  const [ErrorMsg,setErrorMsg]=useState("");
  const keyclicked=()=>{
    if(event.code==='Enter' && inputValue1 ){
      setTeams([...teams,inputValue1])
      // setVenues([...venues,inputValue2])
      setInputValue1("")
      // setInputValue2("")
    }
  }
  const removeTeam=(team)=>{
    setTeams(teams.filter(temp=>{
      return temp!==team;
    }))
  }
  useEffect(()=>{
    prepareSchedule();
  },[teams])
  const prepareSchedule=()=>{
    if(teams.length===0){
      setErrorMsg("Add atleast 4 teams to prepare a schedule")
    }
    else if(teams.length<4){
      setErrorMsg("Minimum 4 teams are required to prepare a schedule")
    }
    else if (teams.length%2!==0){
      setErrorMsg("The number of teams should be even to prepare a schedule")
    }
    else{
      setErrorMsg("")
      
    }
  }
  return (
    <>
      <div className="input-box">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Team Name</span>
          <input 
            type="text" 
            className="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default" 
            placeholder='Add a team name and press Enter' 
            value={inputValue1}
            onChange={()=>{setInputValue1(event.target.value)}}
            onKeyDown={keyclicked}
            autoFocus
          />
        </div>
        {/* <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Venue</span>
          <input 
            type="text" 
            className="form-control" 
            aria-label="Sizing example input" 
            aria-describedby="inputGroup-sizing-default" 
            placeholder='Name of the Home Ground' 
            value={inputValue2}
            onChange={()=>{setInputValue2(event.target.value)}}
            onKeyDown={keyclicked}
          />
        </div> */}
        <button type="button" className="btn btn-dark" onClick={prepareSchedule}>Schedule Matches</button>

          <div className="teamList">
            {
              teams.map(team=>{
                return <>
                <div className="team">
                  {team}
                  <button type="button" className="btn-close" aria-label="Close" onClick={()=>removeTeam(team)}></button>
                </div>
                </>
              })
            }
          </div>

          <h3 className='error-msg'>{ErrorMsg}</h3>
          {!ErrorMsg && <Schedule teams={teams} />}
      </div>
      
    </>
  )
}

export default App
