function table(props){
    var teams=props.teamlist;
    var venues={
      "MI":"Wankhede",
      "CSK":"Chepauk",
      "RCB":"Chinnaswamy",
      "DC":"Feroz shah Kotla",
      "PK":"Mohali",
      "RR":"Rajasthan",
      "KKR":"Eden gardens",
      "GT":"Ahmedabad",
      "LSG":"Lucknow",
      "SRH":"Uppal"
    }
    // var venue={};
    // var venuesArray=props.venuesArray;
    // teams.map((team,index)=>{
    //   venue[team]=venues[index];
    // })
    
    const dates=props.datesArray;
    const matches=props.matches;

    return <table className="table">
    <thead>
      <tr>
        <th scope="col">#Match Number</th>
        <th scope="col">Match</th>
        <th scope="col">Venue</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
    {
      matches.map((match,index)=>(
         <tr>
          <th>{index+1}</th>
          <td>{match}</td>
          <td>{venues[match.split(" ")[0]]}</td>
          <td>{dates[index]}</td>
        </tr>
      ))
    }
    </tbody>
  </table>
}
export default table;


