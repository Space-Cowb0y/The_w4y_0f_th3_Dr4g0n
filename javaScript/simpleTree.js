//simple tree
class TreeNode{
    constructor(root){
        this.root = root;
        this.descend = [];
    }

    newDescendant(k){

      
        var aux = new TreeNode(k);
        this.descend.push(aux);
        console.log("1O node "+k+" foi adicionado como descendente do node: " + this.root + "\n");
        return aux; 
        
        

    }

    removeDescendant(x){
        if(this.isEmpty()){
            return "nao ha descendentes\n"
        }
   
        for(let i = 0; i < this.descend.length;i++){
            if(this.descend[i].root === x){
                var removed = new TreeNode(this.descend[i].root);
                this.descend.splice(i,1)
                
                
                return "O node " + removed.root + " foi retirado da arvore\n";
            }

        }
        return "item nao encontrado\n";

    }

    showDescendants(){
        var auxb = [];
        auxb.push("root: " + this.root)
        if(this.isEmpty()){
            return "nao ha descendentes apartir do node "+ this.root+"\n";
        }
        for(let i = 0; i < this.descend.length;i++){
            
            auxb.push(" node"+i+": "+this.descend[i].root)
        
        }
        return auxb + "\n";
    }

    isEmpty(){
         return this.descend.length === 0;
    }

}

//simple tree declarations

const root = new TreeNode(1);
var temp1 = root.newDescendant(2);
var temp2 = root.newDescendant(3);
var temp3 = root.newDescendant(4);
console.log(root.showDescendants());
console.log(root.removeDescendant(3));
console.log(root.showDescendants());
console.log(temp1.showDescendants());
temp1.newDescendant(5);
console.log(temp1.showDescendants());
console.log(root.removeDescendant(2));
console.log(root.showDescendants());
console.log(temp1.showDescendants());
root.newDescendant(2);
console.log(root.showDescendants());
