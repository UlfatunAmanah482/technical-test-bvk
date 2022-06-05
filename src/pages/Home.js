import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { getAllData, showData } from "../redux/actions/cats";

function Home() {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const [cats, setCats] = useState([])
  const [isFetching, setIsFetching] = useState(false)

  const keys = ["name", "origin"]

  const loadData = async () => {
    await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}&order=DESC`).then((res) => {
      setCats(res.data)
    })
    setPage(page+1)
  }

  const moreData = async () => {
    setLoading(true)
    await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}&order=DESC`).then((res) => {
      setCats([...cats, ...res.data])
      // setLoading(!loading)
      console.log("loading1:", loading);
    })
    setLoading(false)
    setPage(page+1)
    setIsFetching(false)
    // setLoading(false)
    console.log("loading2:", loading);
  }

  const handleOnScroll = () => {
    // const { scrollHeight, scrollTop, clientHeight } = e.currentTarget
    // if( scrollHeight - scrollTop === clientHeight ){
    //   setIsFetching(true)
    // }
    // return;
    if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight){
      return;
    }
    setIsFetching(true)
  }

  useEffect(() => {
    loadData()
    window.addEventListener("scroll", handleOnScroll)
    return () => window.removeEventListener("scroll", handleOnScroll)
  }, [])

  useEffect(() => {
    if(isFetching){
      moreData()
    }
  }, [isFetching])

  return (
    <div className="mx-auto px-[4%] pb-[4%] bg-main font-body">
      <Navbar setSearch={setSearch} />
      <div className="container grid grid-cols-2 md:grid-cols-5 justify-items-center gap-y-5 md:gap-y-14">
        {cats && cats.filter(cat => keys.some(key => cat[key].toLowerCase().includes(search.toLowerCase())))
          .map((cat, key) => (
            <div key={key}>
              <Card imageName={cat.reference_image_id} altName={cat.alt_names} name={cat.name} origin={cat.origin} id={cat.id} />
            </div>
          ))
        }
      </div>
      {/* {loading && <div className="text-center my-4">Loading...</div>} */}
    </div>
  );
}

export default Home;
