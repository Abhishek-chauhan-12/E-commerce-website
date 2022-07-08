import ReactStars from 'react-stars'
const CommenCards=(props)=>{

return(
<>
<div className="cards mx-auto">
    <div className="images1">
<div className="imgcards">
<img src={props.imgrc} alt=".." />
</div>
</div>
<div className="titles d-flex justify-content-between my-4">
<div className="tital">
    <h2 className='fw-bold Mens3'> {props.titles}</h2>
    <h4 className='float-start fw-light fw-bold Mens4' >{props.prices}</h4>
</div>
<span className='fw-bold men'><ReactStars
  count={5}
  size={20}
  color2={'red'} /></span>
</div>
</div>
</>

)
}
export default CommenCards;