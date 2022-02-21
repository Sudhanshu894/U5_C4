import { useEffect, useState } from "react"
import axios from "axios"
import "./home.css"
export const Home = ()=>{

    const [text,setText] = useState("");
    const [data,setData] = useState([]);

    const Getdata = ()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${text}`).then((res)=> setData(res));
    }
    return <div>
        <nav id="navbar">
            <div className="logo">
                <img src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" alt="Google-logo" />
            </div>
            <div className="input-box">
                <input type="text" placeholder="Search Here..." className="search-box" onChange={(e)=> setText(e.target.value)} onClick={(e)=>{
                    if (e.key == 'Enter'){
                        Getdata();
                    }
                }}/>
                <button className="search" onClick={Getdata}>Search</button>
            </div>
        </nav>
        <div className="search-body">
            <div className="sort-btns">
                <button>Sort by A-Z</button>
                <button>Sort by Z-A</button>
                <button>Sort by Date(Asc)</button>
                <button>Sort by Date(Dec)</button>
                <button>Sort by quality(Asc)</button>
                <button>Sort by quality(Dec)</button>
                <button>filter Explicit</button>
            </div>
            <div className="search-results">
                {data.length == 0 ? <h1>No Results Found</h1>: data.data.map((e)=>{
                    return <div key={e.id} className="detailed-result">
                    <div>
                        <div>{e.url}</div>
                    </div>
                    <div >
                        <div className="title">{e.title} | <span className="author">{e.author}</span></div>
                    </div>
                    <div >
                        <div className="desc">{e.description}</div>
                    </div>
                    <div className="creation-date">
                        <div className="creation-date">Creation Date: {e.creation_date}</div>
                    </div>
                    <div>
                        <div className="explicit">Explicit: {e.explicit}</div>
                        <div className="quality">Quality (%): {e.quality}</div>
                    </div>
                </div>
                })}
            </div>
        </div>
    </div>
}