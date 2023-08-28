import { useState } from "react";
import Folder from "./component/Folder";
import  explorer  from "./data/folderData";
import './App.css';


export default function App() {
  const [explorerdata,setexplorerdata]=useState(explorer)
  console.log(explorerdata);

  return (
    <div className="App">
      <Folder explorer={explorerdata} />
    </div>
  );
}
