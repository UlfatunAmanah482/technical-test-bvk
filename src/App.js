import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const [cats, setCats] = useState("")
  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
      setCats(res.data)
      console.log("data: ", res.data);
    })
  }, [])
  return (
    <div className="mx-auto p-[4%] bg-main">
      <Navbar />
      <div className="container grid grid-cols-none lg:grid-cols-2 justify-items-center gap-0 lg:gap-y-14">
        {
          cats.length > 0 ? (
            <>
              {cats.map(cat => (
                <div key={cat.id}>
                  <Card imageName={cat.reference_image_id} altName={cat.alt_names} />
                </div>
              ))}
            </>
          ) : null
        }
      </div>
    </div>
  );
}

export default App;
