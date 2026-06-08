import arrow from "@/assets/icons/white_arrow.png";
import "@/styles/browsebtn.css";
import { useNavigate } from "react-router";
function browsebtn( {text = "Browse All Products"} ) {
    const navigate = useNavigate()
    
    return(
        <> 
            <div className="browse-container" >
            <button onClick={()=>{navigate('/products')}} className="browse-button" >{text}</button><img className="browse-arrow" src={arrow} alt="arrow icon"/>
            
            </div>
        </>
        
        
    )
   
    
}
export default browsebtn;