import Table from "./table";

function schedule(props){
    var matches=[];
    var datesArray=[];
    // var venuesArray=[];
    const date=new Date();
    var teamlist=props.teams;
    // var venues=props.venues;
    const round=(lst,venue)=>{
        var secondteam=String(lst.splice(1,1));
        // var secondVenue=String(venues.splice(1,1));
        lst.push(secondteam);
        // venues.push(secondVenue);
        return lst;
    }
    const match=(lst)=>{
        var size=lst.length;
        var j=size-1;
        for(let i=0;i<j;i++){
            matches.push(lst[i]+' Vs '+lst[j]);
            datesArray.push(date.toDateString());
            date.setDate(date.getDate()+1);
            // venuesArray.push(venues[i]);
            j-=1;
        }
    }
    for(let r=0;r<teamlist.length-1;r++){
        match(teamlist);
        round(teamlist);
    }
    teamlist.reverse();
    for(let r=0;r<teamlist.length-1;r++){
        match(teamlist);
        round(teamlist);
    }
    return <Table matches={matches} datesArray={datesArray}  teamlist={teamlist}/>
}

export default schedule;