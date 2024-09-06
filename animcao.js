
function pesquisar(){
let section = document.getElementById("resultados-pesquisa")


let campoPesquisa = document.getElementById
("campo-pesquisa").value

if(campoPesquisa ==""){
    section.innerHTML ="nada foi encontrado";
    return
}
campoPesquisa = campoPesquisa.toLowerCase()

let resultados =" ";
let titulo = "";
let descricao= "";
for (let dado of dados ){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    if(titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa)){
    resultados += `

            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</a>
            </div>

`;

    }  

section.innerHTML = resultados;
    }

}

