import ReactSlider from "react-slider";


function Settings(){
    return(
        <div style={{textAlign:'left'}}>
            <label>Work Minute:</label>
            <ReactSlider 
            className={"slider"}
            thumbclassName={"thumb"}
            trackClassName={"track"}
            value={45}
            min={1}
            max={120}
            
            />
            <label>Break Minute:</label>
        </div>
    )
}


export default Settings;