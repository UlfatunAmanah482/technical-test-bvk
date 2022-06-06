import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { getAllData } from "../redux/actions/cats";

function Home() {
  const [search, setSearch] = useState("")
  const [cats, setCats] = useState([])
  const [page, setPage] = useState(1)
  const [isFetching, setIsFetching] = useState(false)

  const dispatch = useDispatch()
  const keys = ["name", "origin"]

  const loadData = async () => {
    await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}&order=DESC`).then((res) => {
      setCats(res.data)
    })
    dispatch(getAllData())
    setPage(page+1)
  }

  const moreData = async () => {
    await axios.get(`https://api.thecatapi.com/v1/breeds?limit=10&page=${page}&order=DESC`).then((res) => {
      setCats([...cats, ...res.data])
    })
    setPage(page+1)
    setIsFetching(false)
  }

  const handleOnScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      setIsFetching(true)
    }
    return;
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
    <div className="mx-auto px-[4%] pb-[4%] bg-main font-body" onScroll={handleOnScroll}>
      <Navbar setSearch={setSearch} />
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 justify-items-center gap-y-5 lg:gap-y-14">
        {cats && cats.filter(cat => keys.some(key => cat[key].toLowerCase().includes(search.toLowerCase())))
          .map((cat, key) => (
            <div key={key}>
              <Card imageName={cat.reference_image_id} altName={cat.alt_names} name={cat.name} origin={cat.origin} id={cat.id} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Home;