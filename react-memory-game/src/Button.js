import styled from 'styled-components';
//import Index from './index';


function startOver(){
alert("Shuffling Cards...");
window.location.reload();
}

function button(){
    return(
        <div className='Btn'>
            <Button onClick={startOver} >Reshuffle</Button>
        </div>
    );
}

// *************** Styled Components ******************
const Button = styled.button`
background-color: #FDB927;
color: black;
border-radius: 5px;
outline: 0;
box-shadow: 0px 2px 2px #552583;
padding: 10px 20px;
display: block;
width: 130px;
margin: 10px auto 0px auto;
cursor: pointer;
transform: ease background-color 250ms;
&:hover {
    background-color: #552583;
    color: white;
}
`

export default button;