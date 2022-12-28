import React , { useState } from "react";
import Child from "./Child";
import '../styles/Parent.css'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Parent() {
    const data = [{
        "_id": 1,
        "image_url": "https://i.ytimg.com/vi/y4AH9XIs1w4/maxresdefault.jpg",
        "title": "Mikasa Ackerman",
        "likes": 0
    },

    {
        "_id": 2,
        "image_url": "https://i.pinimg.com/736x/f3/d3/ce/f3d3cef0701d6cdbebb1f82d2ca68e16.jpg",
        "title": "Eren Yeager",
        "likes": 0
    },

    {
        "_id": 3,
        "image_url": "https://e1.pxfuel.com/desktop-wallpaper/351/308/desktop-wallpaper-levi-ackerman-pc-levi-ackerman.jpg",
        "title": "Livai Ackerman ",
        "likes": 0
    }];
    let [totalNumOfLikes, setTotalNumOfLikes] = useState(0);

    const incrementTotalLikes = () => {
        setTotalNumOfLikes(totalNumOfLikes + 1)
    }

    return (
        <div class="container">
            
            <h2 class="total">Total Num of Likes : {totalNumOfLikes}</h2>
            <div className='cards-wrapper'>
            {data.map((item, index) => {
                return (
                    <Child

                        key={index}
                        image_url={item.image_url}
                        title={item.title}
                        likes={incrementTotalLikes}
                    />
                )
                
                })}
    
            </div>
            <h3>please give likes for Mikasa 🙏</h3>
        </div>

    )
}

export default Parent;