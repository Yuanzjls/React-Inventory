export default function Inventory(){
    return (
        <div>
            <div className="flex-container">
                <div className="flex-item">ID</div>
                <div className="flex-item">Vehicle</div>
                <div className="flex-item">Type</div>
                <div className="flex-item">Fuel</div>
                <div className="flex-item">Color</div>      
                <div className="flex-item"></div>
                <div className="flex-item"></div>      
            </div>
            <div className="flex-container flex-content" >
                <div className="flex-item">1</div>
                <div className="flex-item">BMW</div>
                <div className="flex-item">Sedan</div>
                <div className="flex-item">Gasoline</div>
                <div className="flex-item">Blue</div>    
                <div className="flex-item">
                    <button type="submit">Edit</button>
                </div>
                <div className="flex-item">
                    <button type="submit">Delete</button>       
                </div>      
            </div>
        </div>
    );

}