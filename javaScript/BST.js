function Node(data){
    
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