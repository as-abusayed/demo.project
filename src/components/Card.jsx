// import "./card.css"
// import TestChild from "./TestChild";



// const Card = ({img,title,description,value}) => {
//   console.log(value);


  
//   return (
//    <div className="contentt">
//        <div className="card">
//        <div className="card-img">
//        <div className="image"> <img src={img} alt="" /></div>
//       </div>

//       <div className="card-body"></div>
//       <h2>{title}</h2>
//       <div className="text"><span>{description}</span>
//       </div>
//       <TestChild data={value}></TestChild>
//       <button>button</button>
//       </div>
      
//    </div>
//   )
// }
//  export default Card



import "./card.css"
// import TestChild from "./TestChild";



const Card = ({img,title,description,data,roll}) => {
  


  
  return (
   <div className="contentt">
       <div className="card">
       <div className="card-img">
       <div className="image"> <img src={img} alt="" /></div>
      </div>

      <div className="card-body"></div>
      <h3>{title}</h3>
      <div className="text"><p>{description}</p>
      </div>
      {/* <TestChild 
      data={data}
      roll={roll}
      ></TestChild>

      <button>click</button> */}
      </div>
      
   </div>
  )
}
 export default Card