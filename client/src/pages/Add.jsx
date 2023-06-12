import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Add = () =>{

    const[book,setBook]= useState({
        title:"",
        desc:"",
        price:"",
        cover:"",
    })

    const navigate = useNavigate()
    const handleChange= (e)=>{
        setBook((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick =  async e =>{
        e.preventDefault()

        try {
            await axios.post("http://localhost:8800/books", book)
            navigate("/")
        } catch (err) {
            console.log(err)
        }

    }

    console.log(book)
    return ( 
          <div className="form">
            <h1>Adicionar Livro</h1>
            <input type="text" placeholder="titulo" onChange={handleChange} name="title" />
            <input type="text" placeholder="Descrição" onChange={handleChange} name="desc" />
            <input type="number" placeholder="Preço" onChange={handleChange }name="price"/>
            <input type="text" placeholder="Capa" onChange={handleChange} name="cover"/>




            <button className="formButton" onClick={handleClick}>Adicionar Livro</button>


          </div>
          
          
          
          
          
        )
}


export default Add