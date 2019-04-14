var con = require('../database/index')
// var seed = require('../datainit.js')
// import Adapter from 'enzyme-adapter-react-16';
// import Enzyme, { shallow, mount, render } from 'enzyme';




describe('Get all intitial data from reviews',()=>{

  test('Get all data',done=>{
    function callback(data){
      expect(data.length).not.toBeLessThan(0)
      done()
    }
    con.getAllReviews(1,(err,result)=>{
      if(err){callback(err)}
      else {
        callback(result)
      }
    })
  })

  test('Adding 1 into db',done =>{
    function callback(data){
      expect(data).toBe(1);
      done()
    }

    con.postReview(1,{username:'bob',rating:5,size:5,comfort:5,prod_durability:4,review_title:'this is a test',review_text:'test text body',country:'US',city:'San Diego',loc_state:'CA',usefor:'9',productid:1},(err,result)=>{
      if(err){

        callback(err)
      } else {

        callback(result.affectedRows)
      }
    })
  })


})

// test('if there is a div element', () => {
//   const wrapper = mount(<Desc />);
//   expect(wrapper.find('h3')).toHaveLength(1);
// })










