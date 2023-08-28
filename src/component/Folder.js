import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setexpend] = useState(false);
  const [showInput, setShowInput] = useState({
    visible:false,
    isFolder:null
  });
  const handleNewFolder=(e,isFolder)=>{
    e.stopPropagation();
    setexpend(true);
    setShowInput({
        visible:true,
        isFolder
    })
  }
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setexpend(!expand)}>
          <span>
            📂{explorer.name}
            
          </span>
          <div>
           <button onClick={(e)=>handleNewFolder(e,true)}>Folder+</button>
           <button onClick={(e)=>handleNewFolder(e,false)}>File+</button>
          </div>
        </div>
        
        <div style={{ display: expand ? "block" : "none", paddingLeft: 45 }}>
            {
                showInput.visible && (
                    <div className="inputContainer">
                        <span>{showInput.isFolder?"📂":"📝"}</span>
                        <input className="inputContainer__input" autoFocus type="text" onBlur={()=>setShowInput({...showInput,visible:false})}/>
                    </div>
                )
            }
          {explorer.items.map((e) => {
            return <Folder key={e.name} explorer={e} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file">
       
        {explorer.name}
        <br />
      </span>
    );
  }
}
export default Folder;
