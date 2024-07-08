import { useState } from "react";
const About = ()=>{

    // let _1stname='ahmed'; normal javascript definition
    const [_1stName,set_1stName]= useState('Ahmed')
    const [_2ndtName,set_2ndtName]= useState('Yahya')
    const [_3rdName,set_3rdName]= useState('Mutaher')
    const [_age,set_age]= useState(45)

    const changeTheName = ()=>{
        //console.log="clicked"
        set_1stName('Ramz');
        set_2ndtName('Ali');
        set_3rdName('Halawani');
        set_age('34');
    }
    return(
        <div className="container">
            <h1>About page</h1>
            <h2>{_1stName}</h2>
            <h2>{_2ndtName}</h2>
            <h2>{_3rdName}</h2>
            <h2>{_age}</h2>
            <button type="button" onClick={changeTheName} className="btn btn-dark">Dark</button><br/>
        </div>

    );

}
export default About;