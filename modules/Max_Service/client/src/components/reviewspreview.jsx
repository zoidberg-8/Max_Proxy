import React from 'react';
import styled from 'styled-components';
import StarHelper from'./Starhelper.jsx';




var ReviewsPreview = (props) =>(
  <div style={{"width":"500px"}}>

   {props.allreviews.slice(0,3).map((i)=>
    <Eachreviewdiv>
      <Titlediv>{i.review_title}</Titlediv>
     <StarHelper rating={i.rating}/>
      <Span>{i.username}</Span>
      <Span>{i.date_submitted.substring(0,10)}</Span>
      <Textbodydiv>{i.review_text}</Textbodydiv>
    </Eachreviewdiv>)}
  </div>
)

//STYLED COMPONENTS
var Starspan = styled.span`
font-size:12px;
padding-right:5px;
`
var Span = styled.span`
font-size:12px;
padding-left:5px;
`
var Textbodydiv = styled.div`
font-size:12px;
font-family:'Helvetica Neue'
padding-top:5px;
`

var Titlediv = styled.div`
font-size:12px;
font-family:'Helvetica Neue';
font-weight:bold;
`
var Eachreviewdiv = styled.div`
padding-top:12px;
padding-bottom:5px;
`



export default ReviewsPreview