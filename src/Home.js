const Home = ()=>{
    
    const ShowName = ()=>{
        console.log ('Mutaher');
    }

    const ShowFullName = (Fname)=>{
        console.log (Fname);
    }

    const ShowFullNameAndAge = (Fname,theAge)=>{
        console.log ('The name is:' + Fname + ' The Age is:' + theAge);
    }


    return(
    <div>
        <p>HOME PAGE</p>    
    </div>
    );
}

export default Home;