

// const DOM = {
//     btnAdd : document.querySelector('#novo'),
//     inputConteudo : document.querySelector('#conteudo')
// }


// class Carro {
//     constructor(){
//         this.carro = [];
//     }

//     addCarro( nomeCarro ){
//         this.carro.push( nomeCarro );
//     }

//     listaCarro(){
//         return this.carro;
//     }

// }


// let uno = new Carro();


// DOM.btnAdd.addEventListener('click', ()=>{
//     uno.addCarro(DOM.inputConteudo.value);
//     console.dir(uno.listaCarro())
// })


class Mat {
    static soma(v, x){
        return v + x ;
    }
}


console.log(Mat.soma(4,5))
