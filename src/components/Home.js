import React , {useState} from 'react';
import styled from 'styled-components';
import Section from './Section';
import axios from "axios";

// useEffect(()=>{

// },[]);

function Home() {
    const [Cars,setCars] = useState([]);

const dat = axios.get("/getSite").then((res) => {
   setCars(res.data.cars);
   //console.log(Cars);
})


    const Cars2 = Cars;
    return (
        <div>
           {Cars.map((item,index) => <Section item = {item} />)}
            <h1>hello</h1>
        </div>
    )
}

export default Home

const Container = styled.div`
 height : 100vh;

`