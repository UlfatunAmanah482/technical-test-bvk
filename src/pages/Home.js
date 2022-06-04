import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function Home() {
  const [cats, setCats] = useState("")
  useEffect(() => {
    axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
      setCats(res.data)
      console.log("data: ", res.data);
    })
  }, [])
  return (
    <div className="mx-auto px-[4%] bg-main font-body">
      <Navbar />
      <div className="container grid grid-cols-2 md:grid-cols-5 justify-items-center gap-y-5 md:gap-y-14">
        { cats && cats.map(cat => (
          <div key={cat.id}>
            <Card imageName={cat.reference_image_id} altName={cat.alt_names} name={cat.name} origin={cat.origin} id={cat.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
