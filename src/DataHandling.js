import { useEffect,useState } from "react";

const DataHandling = (theUrl)=>{

    const [posts,setpost]=useState(null);
    const [connServerError,setconnServerError]=useState(null);
    const [isWaitingData,setisWaitingData]=useState(true);

    useEffect(()=>{
        //console.log('useEffect is running!')
        //console.log(posts)
        fetch(theUrl)
        .then(theResp=>{
            if (!theResp.ok) {
                throw Error ('Can not reach the data server!!!!');
            }
            return theResp.json();
       })
        .then (data=>{
            console.log(data);
            
            {/* for changing the usestate of post */}
            setpost(data);

            {/* for hide the loading data text */}
            setisWaitingData(false);
        }).catch(theErr=>{
            console.log(theErr.message);
            setconnServerError(theErr.message);
            setisWaitingData(false);
        })
    },[theUrl]);

    return {isWaitingData,connServerError,posts};
}

export default DataHandling;