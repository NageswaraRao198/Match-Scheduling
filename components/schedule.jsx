import Table from "./table";
import { venues } from "./venues";
function schedule(props){
    var matches=[];
    var datesArray=[];
    const date=new Date();
    var teamlist=props.teams;
    const round=(lst,venue)=>{
        var secondteam=String(lst.splice(1,1));
        lst.push(secondteam);
        return lst;
    }
    const match=(lst)=>{
        var size=lst.length;
        var j=size-1;
        for(let i=0;i<j;i++){
            matches.push(lst[i]+' Vs '+lst[j]);
            datesArray.push(date.toDateString());
            date.setDate(date.getDate()+1);
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
    return <Table matches={matches} datesArray={datesArray}  teamlist={teamlist} venues={venues}/>
}

export default schedule;