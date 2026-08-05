import { useState } from "react";
import Home from "./pages/Home";
import NewGame from "./pages/NewGame";


function App() {

  const [page,setPage] = useState("home");


  if(page === "new"){
    return <NewGame />;
  }


  return (
    <Home 
      onNewGame={()=>setPage("new")}
    />
  );

}

export default App;