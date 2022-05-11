import React from "react";
import Primeiro from "./Primeiro";
import ComFilhos from "./ComFilhos";
import ComParametro from "./ComParametro";
import Card from "../layout/Card";
import Repeticao from "../layout/Repeticao";
import Condicional from "../layout/Condicional";

export default (props) => (
    <div> 
      <div className="App">
      <Card titulo="Condicional">
        <Condicional numero={10}></Condicional>
    </Card>
      <Card titulo="Componente com filhos (lista de produtos)">
        <Repeticao></Repeticao>
    </Card>
    <ComFilhos>
        <ul>
        
        <li>Ana</li>
        <li>Agatha</li>
        <li>Aristoteles</li>
        <li>Astride</li>

        </ul>

        
    </ComFilhos>
      </div>
   
    <Primeiro></Primeiro>
    <ComParametro titulo="Esse é o titulo" 
            subtitulo="Esse é o subtitulo"/>
    <ComParametro titulo="Olá, como vai ?"
                subtitulo="Espero que esteja aproveitando o React!"/>
    
</div>

);
