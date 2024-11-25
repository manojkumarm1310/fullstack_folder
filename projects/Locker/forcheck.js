<div className="LockerSelection" >
            <div className="LockerContainer">
                <div>
                    <h3 >Select the suitable Locker for Parcel</h3>
                </div>
                <div className="boxes">
                    <div id="1"  className="box small s1 " onClick={getDoorNumber}>Door 1</div>
                    <div id="2"  className="box small s2" onClick={getDoorNumber}>Door 2</div>
                    <div id="3"  className="box small s3" onClick={getDoorNumber}>Door 3</div>
                    <div id="4"  className="box small s4" onClick={getDoorNumber}>Door 4</div>
                    <div id="5"  className="box medium m1" onClick={getDoorNumber}>Door 5</div>
                    <div id="6"  className="box medium m2" onClick={getDoorNumber}>Door 6</div>
                    <div id="7"  className="box large l1" onClick={getDoorNumber}>Door 7</div>
                    <div id="8"  className="box large l2" onClick={getDoorNumber}>Door 8</div>
                </div>
            </div>
            <span><strong>Please note!</strong> once you kept the parcel inside the locker. Click  "Next".  </span>
           <div className="buttonSeparate">
               <button  onClick={handleCancel} className="button-45" >Cancel</button>
               <button className="button-45" onClick={isClosed} > Next </button>
               
           </div>
    </div>


var DoornumInt=parseInt(event.target.id);
setcurrentSelectedDoor(DoornumInt);
let selectedDoorID=document.getElementById(event.target.id);
if(getComputedStyle(selectedDoorID).backgroundColor !== "rgb(255, 0, 0)")
{
selectedDoorID.classList.toggle("selectedDoor");
if(getComputedStyle(selectedDoorID).backgroundColor==="rgb(255, 136, 0)")
{
    setIsDoorSelected(true);
    console.log("Door has been selected");
    setselectedDoorNumber(DoornumInt);
}
else
{
    setIsDoorSelected(false);
    console.log("Door has been unselected");
    setselectedDoorNumber(0);
}
}