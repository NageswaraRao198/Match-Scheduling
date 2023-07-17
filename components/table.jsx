function table(props){
    var teams=props.teamlist;

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
          <td>{props.venues[match.split(" ")[0]]}</td>
          <td>{dates[index]}</td>
        </tr>
      ))
    }
    </tbody>
  </table>
}
export default table;


