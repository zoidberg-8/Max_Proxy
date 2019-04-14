import React from 'react';
import Modal from 'react-modal';
import Reviews from './reviews.jsx'
import styled from 'styled-components'

class ModalAllReviews extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      modalstate: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(){
    console.log('All reviews modal clicked',this.state.modalstate)
    this.setState({
      modalstate:!this.state.modalstate
    })
  }

  render(){
    return(
      <div>
        <Morebtn onClick = {this.toggleModal}>More Reviews</Morebtn>

         <Modal isOpen = {this.state.modalstate} contentLabel='test'>
          <Closebtn onClick = {this.toggleModal}>
            x
          </Closebtn>
     {/* LOAD ALL REVIEWS IN MODAL */}
            <Reviews
            allreviews = {this.props.allreviews}
            reviewsSet = {this.props.reviewsSet}/>
          <div style ={{'text-align':'center'}}>

            <Loadbtn onClick={this.props.increaselimit}>More Reviews</Loadbtn>
          </div>
          </Modal>

      </div>
    )
  }
}

var Closebtn = styled.button`
float:right;
border:1px solid #E5E5E5;
margin:auto;
`

var Morebtn = styled.button`
font-family:'Helvetica Neue';
border:0px;
border-bottom:solid 0.5px black;
padding-top:20px;
padding-left:0px;
padding-right:0px;
font-size:14px;
`

var Loadbtn = styled.button`
font-family:'Helvetica Neue';
border:0px;
border-bottom:solid 0.5px black;
padding-top:20px;
padding-left:0px;
padding-right:0px;
`

export default ModalAllReviews