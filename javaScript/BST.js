class Node{
    //construtor do node
    constructor(data){
        this.data = data;
        this.left = null;
        this.rig = null;
    }
}

class BinarySearchTree{
    //construtor d arvore
    constructor(){
        this.root = null;
    }

    //insert(data) insere nodes na arvore 
    insert(data){
        //cria um novo node
        var newNode = new Node(data);

        //se raiz = null torna o node  a raiz
        if(this.root === null){

            this.root = newNode;
        
        }else{
            //se nao chama insertNode
            this.insertNode(this.root, newNode)
        
        } 
    }

    insertNode(node, newNode){
        //se o node aser colocado e menor que o noode raiz coloca na esquerda
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            }else{
                //se nao for fola recusriva ate enctrar
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }


    remove(data){
        this.rot = thi.removeNode(this.root,data)
    }

    removeNode(node, key){
        if(node === null){
        
            return null;
        
        }else if(key < node.data) {

            node.left = this.removeNode(node.left,key);
            return node;
        } else if(key > node.data){

            node.right = tss.removeNode(node.right, key);
            return node;
        }else{
            if(node.left === null && node.right === null){
                node = null;
                return node;

            }
            if(node.left === null){
                node = node.right;
                return node;
            }else if(node.right === null){
                node = node.left;
                return node;
            }

            var aux = this.findMin(node.right);
            node.data = aux.data;

            node.right =this.removeNode(node.right, aux.data);
            return node;


        }
    }

    inorder(node){
        if(node != null){
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right)
        }
    }


    preorder(node){
        if(node!== null){
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }

    }

    postorder(node){
        if(node !== null){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
                
        }
    }

    findMin(node){
        if(node.left === null){
            return node;
        }else {
            return this.findMin(node.left);
        }

    }

    getRootNode(){
        return this.root;
    }

    search(node, data){
        if(node === null){
            return null;
        }else if(data < node.data){
            return this.search(node.left, data);
        }else if(data > node.data){
            return this.search(node.right, data)
        }else {
            return node;
        }
    }

    seaarchBFS(){
        
    }

    

}




/*const left = 0;
const right = 0;

class TreeNode{
    constructor(value){
        this.value= value;
        this.desc = [];
        this.parent = null;
    }


    get left(){
        return this.desc[left];
    }

    set left(node){
        this.desc[left] = node 
        if(node){
            node.parent = this;
        }
    }

    get right(){
        return this.desc[right];

    }

    set right(){
        this.desc[right] = node;
        if(node){
            node.parent = this;
        }
    }



}

class BinaryTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    add(value){
        const newNode = new TreeNode(value);

        if(this.root){
            const{found,parent} = this.findNodeAndParent(value);
            if(found){
                found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;

            }else if(value < parent.value){
                parent.left = newNode;
            }else{
                parent.right = newNode;
            }
        }else { 
            this.root = newNode;
        }

        this.size++;
        return newNode;
    }

    findNodeAndParent(value){
        let node = this.root;
        let parent;

        while(node){
            if(node.value === value){
                break;
            }
            parent = node;
            node = ( value >= node.value) ? node.right : node.left;
        }

        return {found: node, parent };

    }



    remove() {
        const nodeToRemove = this.findNodeAndParent(value)
        if(!nodeToRemove){
            return false;
        }
    
    
        const nodeToRemove = this.combineLeeftIntoRightSubtree(nodeToRemove);

        if(nodeToRemove.meta.multiplicity  && nodeToRemove.meta.multiplicity > 1){
            nodeToRemove.meta.multiplicity --;
        }else if(nodeToRemove === this.root) {

            this.root = nodeToRemoveChildren;
            this.root.parent = null;
        }else {
            const side = nodeToRemove.isParentLeftChild ? 'left' : 'right';
            const {parent} = nodeToRemove;
            parent[side] = nodeToRemoveChildren;
        }
        this.size--;
        return true;
    }


    combineLeeftIntoRightSubtree(node){
        if(node.right){
            const leftmost = this.getLeftmost(node.right);
            leftmost.left = node.right;
            return node.right;
        }
        return node.left
    }


}*/