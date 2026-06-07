import arrow from "@/assets/icons/white_arrow.png";
import "@/styles/browsebtn.css";
function browsebtn( {text = "Browse All Products"} ) {
    
    return(
        <> 
            <div className="browse-container" >
            <button className="browse-button" >{text}</button><img className="browse-arrow" src={arrow} alt="arrow icon"/>
            
            </div>
        </>
        
        
    )
   
    
}
export default browsebtn;