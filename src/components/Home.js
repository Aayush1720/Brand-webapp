import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Cars from '../data';

function Home() {
    return (
        <div>
           { Cars.map(item => (
                <Section {...item}/>
            ))}
        </div>
    )
}

export default Home

const Container = styled.div`
 height : 100vh;

`