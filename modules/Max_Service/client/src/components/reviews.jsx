import React from 'react';
import styled from 'styled-components';



class Reviews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      reviewsSet:[],
      reviewstoshow:10
    }
    this.style={

      "width":"50%",
      "background":"yellow",
      "height":"1px"
    }

  }




  render(){


    return(
<div>
  <Header>{this.props.allreviews.length} Reviews</Header>
  <InfoPanel>
    <Oneframe id='size'>

    <StatsGrid>
          <StatsLabel>Size</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${this.props.allreviews.length/24*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>Uncomfortable</StatsRangeMin>
          <StatsRangeMax>Very Comfortable</StatsRangeMax>

        </StatsGrid>

    </Oneframe>
    <Oneframe>

    <StatsGrid>
          <StatsLabel>Comfort</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${this.props.allreviews.length/24*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>Uncomfortable</StatsRangeMin>
          <StatsRangeMax>Very Comfortable</StatsRangeMax>

        </StatsGrid>


    </Oneframe>
    <Oneframe>

    <StatsGrid>
          <StatsLabel>Durability</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${this.props.allreviews.length/24*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>Uncomfortable</StatsRangeMin>
          <StatsRangeMax>Very Comfortable</StatsRangeMax>

        </StatsGrid>

    </Oneframe>
  </InfoPanel>
{ this.props.reviewsSet.map((i,index)=>

  <ReviewPanel>

    <ReviewInfo>
      <Starframe>

      <StatsGrid>
          <StatsLabel>Rating</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${i.rating/5*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>0/5</StatsRangeMin>
          <StatsRangeMax>5/5</StatsRangeMax>

        </StatsGrid>



      </Starframe>
      <SizeFrame>

        <StatsGrid>
          <StatsLabel>size</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${i.size/6*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>runs small</StatsRangeMin>
          <StatsRangeMax>Runs Big</StatsRangeMax>

        </StatsGrid>


      </SizeFrame>
      <ComfFrame>



      <StatsGrid>
          <StatsLabel>Comfort</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${i.comfort/15*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>Uncomfortable</StatsRangeMin>
          <StatsRangeMax>Very Comfortable</StatsRangeMax>

        </StatsGrid>



      </ComfFrame>
      <DurFrame>

      <StatsGrid>
          <StatsLabel>Durability</StatsLabel>
          <RangeBar >
            <div style = {{"width":`${i.prod_durability/24*100}%`,
      "background":"grey",
      "height":"3px"}}></div>
          </RangeBar>
          <StatsRangeMin>Uncomfortable</StatsRangeMin>
          <StatsRangeMax>Very Comfortable</StatsRangeMax>

        </StatsGrid>

      </DurFrame>
    </ReviewInfo>
    <BodyFrame>
      <BodyTitle>{i.review_title}</BodyTitle>
      <BodyText>{i.review_text}</BodyText>
      <BodyDetails>{i.date_submitted}</BodyDetails>
    </BodyFrame>
  </ReviewPanel>)}
</div>
    )
  }
}

var Header = styled.div`
text-align:center;
font-size:30px;
font-family:'Helvetica Neue';
margin:20px;
font-weight:bold;
`
var InfoPanel = styled.div`
display:grid
grid-template-columns: auto auto auto
padding-bottom:30px;
padding-top:30px;
grid-column-gap:10%;
`
var Oneframe = styled.span`
font-size:14px;
font-family:'Helvetica Neue';
padding:10px;
`

var ReviewPanel = styled.div`
display:grid
grid-template-columns:200px 70%
border-bottom: 0.5px solid #d6d5d5;
`

var ReviewInfo = styled.div`
grid-column:1/2;
padding-bottom: 10px;
padding-top:10px;
padding-right:10px;
`

var Starframe = styled.div`
grid-area:star;

height:40px;
`
var SizeFrame = styled.div`
grid-area: size;
height:40px;
`
var ComfFrame = styled.div`
grid-area: comfort;
height:40px;
`
var DurFrame = styled.div`
grid-area: dur;
height:40px;
`
var BodyFrame = styled.div`
grid-column:2/3
font-family:'Helvetica Neue';
padding-right:5px;
padding-left:40px;
`
var BodyTitle = styled.div`
padding-top:10px;
padding-bottom:10px;
font-weight: bold;
font-family:'Helvetica Neue';
`
var BodyText = styled.div`

font-family:'Helvetica Neue';
font-size:12px;
`
var BodyDetails = styled.div`
font-family:'Helvetica Neue';
font-size:12px;
padding-top:10px
`

var StatsGrid = styled.div`
display:grid;
grid-template-columns: 50% 50%;
`
var StatsLabel = styled.div`
grid-column:1/2;
text-align:left;
font-family:'Helvetica Neue';
font-size:12px;
`

var RangeBar = styled.div`
grid-column:1/3;
height:2px;
background:#e6e6e6;
margin-top:5px;
margin-bottom:5px;
`

var StatsRangeMin = styled.div`
grid-column:1/2;
text-align:left;
font-family:'Helvetica Neue';
font-size:9px;
`
var StatsRangeMax = styled.div`
grid-column:2/3;
text-align:right;
font-family:'Helvetica Neue';
font-size:9px;
`

export default Reviews;