// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import "../assets/app.css"
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

const Produtos = () => {

    //console.log(localStorage.getItem("ordemdePreço"))
    
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [ordemdePreço, setordemdePreço] = useState(localStorage.getItem("ordemdePreço") );

    useEffect(() => {
        
        setLoading(true)
        axios({
            method: "GET",
            url: " https://fakestoreapi.com/products"
        }).then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(e => console.log(e)).finally(() => setLoading(false))
       
    }, [])


    const ordenaProdutos = () => {
       
        if (ordemdePreço === 'mais barato primeiro') {
          const matrizReordenada = data.sort((a, b) => a.price - b.price);
          setData(matrizReordenada);
          setordemdePreço('mais caro primeiro');
          
          localStorage.setItem("ordemdePreço", ordemdePreço )
          
          console.log(localStorage.getItem("ordemdePreço"))
         
    
        } else {
          const matrizReordenada = data.sort((a, b) => b.price - a.price);
          setData(matrizReordenada);
          setordemdePreço('mais barato primeiro');
          
          localStorage.setItem("ordemdePreço", ordemdePreço )
        
         console.log(localStorage.getItem("ordemdePreço"))
        }

       
       
      };


    

    return (
        <div onLoad={ordenaProdutos}  className='conteudo' >

            
            {loading &&
                (<div>
                    {" "}
                    <h1>loading...</h1>
                </div>
                )}

          <button onClick={ordenaProdutos} className='button'>Ordene por Preço</button>

            {data.map((product) => (

                <div className='produto' key={product.id}>


                    <img className='produto-imagem' src={product.image} alt="produto" />
                    <h6 className='produto-texto'>{product.title}</h6>
                    <h6 className='produto-texto'>Price: ${product.price}</h6>
           


                </div>
            ))}
        </div>


    )
}

export default Produtos