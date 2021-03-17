import "./index.css"
function Searchbar(){
    return (
      <form>                 
        <div>
          <label htmlFor="searchtext">Found 50 Vehicles</label>
          <br></br>
          <div className="flex-container"> 
            <input type="text" id="searchtext" placeholder="Enter vechicle name here"/>       
            <div>
              <input type="submit"/>
            </div>
          </div>
        </div>
      </form>
    );
}

export default Searchbar;