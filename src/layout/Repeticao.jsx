import React from "react";
import Produtos from "../data/Produtos";

export default props => {
    function getPRodutos(){
        return Produtos.map(prod => {
            return <li>{prod.id} - {prod.name} - R$ {prod.price}</li>
        })
    }
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getPRodutos()}

            </ul>
        </div>
    )
}
