import React from "react";
import Popup from "reactjs-popup";
import ReportForm from "./ReportForm";

// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div><Report/></div>
//   </Popup>
// );

export default () => (
    <Popup trigger={<button className="button"> Enter Notes from Meeting </button>} modal>
      {close => (
        <div className="modal">
          <div className="content">
          <div><ReportForm/></div>

            <br />
         
          </div>
          <div className="actions">
            
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ')
                close()
              }}
            >
              close 
            </button>
        </div>
        </div>
      )}
    </Popup>
  );