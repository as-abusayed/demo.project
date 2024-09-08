import "./footer.css"
function Footer(){
    return(
     <footer>
         
     <div className="sazu">
     <ul>
          <li>
            <li class= "razu"><a href="#">Home</a></li>
            <li class="siam">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis.</li>
          </li>
          
          <li>
        <li class= "razu"><a href="#">Navigation</a></li>
        <li class="siam">Home</li>
        <li class="siam">About Us</li>
          </li>
        
        <li>
        <li class= "razu"><a href="#">Services</a></li>
        <li class="siam">Home</li>
        <li class="siam">About Us</li>
       </li>

        <li>
        <li class= "razu"><a href="#">Address</a></li>
        <li class="siam">India</li>
        <li class="siam">pro box no-2423</li>
       </li>
       </ul>
     </div>
     </footer>
    )
}
export{Footer}




// const Footer = ({roll,data}) => {
//   return (
//     <div>
//       <h2>{data}</h2>
//       <h3>{roll}</h3>
//     </div>
//   )
// }

// export default Footer
