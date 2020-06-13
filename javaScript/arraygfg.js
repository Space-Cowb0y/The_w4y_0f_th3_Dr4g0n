class array{
    constructor(){
        this.length =0;
        this.data ={};
    }


    //push(value)
    push(value){
        this.data[this.length] =  value;
        this.length++;
        return this.data; 
    }

    //pop()
    pop(){
        let item = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return this.data;
    }
    //insertAt(value)
    insertAt(value,index){
        for(let i = this.length; i >= index;i--){
            this.data[i] = this.data[i-1];
        }
        this.data[index] = value;
        this.length++;
        return this.data;

    }
    //delete(value){
    delete(value){
        for(let i = 0;i<this.length -1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[value];
        this.length--;
        return this.data;
        
    }
    //getAtIndex(value)
    getAtIndex(value){
        return this.data[value];
    }
}