//classe para criaao de queues
class queue{

    //construtor do objeto
    constructor(){
        this.itens = [];
    }

    //functions to be implemented

    //enqueue(item)
    enqueue(item){
        this.itens.push(item);
    }

    //dequeue
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        this.itens.shift();
        return "O valor na primeira posicao foi retirado"        
    }


    //front
    front(){
        if(this.isEmpty()){
            return nuul;
        }
        return this.itens[0];
    }


    //isempty
    isEmpty(){
        return this.itens.length === 0;
    }

    //print
    printqueue(){
        
        let aux = [];
        for(let i = 0;i < this.itens.length; i++){
            aux.push(this.itens[i]);
        }
        return aux.join(" -> ");
    }
}

var myQ = new queue;
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
console.log(myQ.printqueue());
console.log(myQ.front());
console.log(myQ.dequeue());
console.log(myQ.printqueue());
console.log(myQ.front());