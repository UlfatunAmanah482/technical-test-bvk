import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { getAllData } from "../redux/actions/cats";

function Home() {
  // const [cats, setCats] = useState("")
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const cats = useSelector(state => state.cats.cats)

  useEffect(() => {
    // axios.get("https://api.thecatapi.com/v1/breeds").then((res) => {
    //   setCats(res.data)
    //   console.log("data: ", res.data);
    // })
    dispatch(
      getAllData()
    )

  }, [dispatch])
  return (
    <div className="mx-auto px-[4%] bg-main font-body">
      <Navbar setSearch={setSearch} />
      <div className="container grid grid-cols-2 md:grid-cols-5 justify-items-center gap-y-5 md:gap-y-14">
        {cats && cats
          .filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()))
          .map((cat) => (
            <div key={cat.id}>
              <Card imageName={cat.reference_image_id} altName={cat.alt_names} name={cat.name} origin={cat.origin} id={cat.id} />
            </div>
          ))
        }
        {/* { cats && cats.map(cat => (
          <div key={cat.id}>
            <Card imageName={cat.reference_image_id} altName={cat.alt_names} name={cat.name} origin={cat.origin} id={cat.id} />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Home;
