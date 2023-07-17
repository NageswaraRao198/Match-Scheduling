import { useEffect, useState } from 'react'
import './App.css'
import Table from '../components/table';
import Schedule from '../components/schedule';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { venues } from '../components/venues';
function App() {
  const [teams, setTeams] = useState([]);
  const [inputValue1, setInputValue1] = useState("");
  const [ErrorMsg, setErrorMsg] = useState("");

  
  function keyClicked(event) {
    if (event.code === 'Enter' && inputValue1) {
      if (venues.hasOwnProperty(inputValue1)) {
        setTeams([...teams, inputValue1]);
        setInputValue1("");
      } else {
        alert("Not an IPL team");
        setInputValue1("");
      }
    }
  }

  const removeTeam = (team) => {
    setTeams(teams.filter(temp => {
      return temp !== team;
    }))
  }

  useEffect(() => {
    prepareSchedule();
  }, [teams])

  const prepareSchedule = () => {
    if (teams.length === 0) {
      setErrorMsg("Add at least 4 teams to prepare a schedule")
    }
    else if (teams.length < 4) {
      setErrorMsg("Minimum 4 teams are required to prepare a schedule")
    }
    else if (teams.length % 2 !== 0) {
      setErrorMsg("The number of teams should be even to prepare a schedule")
    }
    else {
      setErrorMsg("")
    }
  }

  return (
    <>
      <div className="input-box">
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">Team Name
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic-button"  size='sm'/>
              <Dropdown.Menu>
                <Dropdown.Item>Mumbai Indians (MI)</Dropdown.Item>
                <Dropdown.Item>Chennai Super Kings (CSK)</Dropdown.Item>
                <Dropdown.Item>Royal Challengers Bangalore (RCB)</Dropdown.Item>
                <Dropdown.Item>Punjab Kings(PK)</Dropdown.Item>
                <Dropdown.Item>Lucknow Super Giants(LSG)</Dropdown.Item>
                <Dropdown.Item>Gujarat Titans(GT)</Dropdown.Item>
                <Dropdown.Item>Sunrisers Hyderabad(SRH)</Dropdown.Item>
                <Dropdown.Item>Kolkata Knight Riders(KKR)</Dropdown.Item>
                <Dropdown.Item>Rajasthan Royals(RR)</Dropdown.Item>
                <Dropdown.Item>Delhi Capitals(DC)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder='Type a team name and press Enter'
            value={inputValue1}
            onChange={(event) => { setInputValue1(event.target.value.toUpperCase()) }}
            onKeyDown={keyClicked}
            autoFocus
          />
        </div>
        <button type="button" className="btn btn-dark" onClick={prepareSchedule}>Schedule Matches</button>
        <div className="teamList">
          {
            teams.map(team => (
              <div className="team" key={team}>
                {team}
                <button type="button" className="btn-close" aria-label="Close" onClick={() => removeTeam(team)}></button>
              </div>
            ))
          }
        </div>

        <h3 className='error-msg'>{ErrorMsg}</h3>
        {!ErrorMsg && <Schedule teams={teams} />}
      </div>
    </>
  )
}

export default App;
