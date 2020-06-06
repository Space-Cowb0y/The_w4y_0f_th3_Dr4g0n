//GRAFO
const graph = {
    start: {a:5, b:2},
    a: {c: 4, d:2},
    b: {a:8, d:7},
    c: {d: 6, finish:3},
    d:{finish: 1},
    finish:{}
};

//track lowest value
const lowest = {
a:5,
b:2,
finish: Infinity
};

//track lowest cost parent
const parents = {
    a:'start',
    b:'start',
    finish:null
};

//track visited
const prosc = ["start", "a", "b"];


//find lowestnodevalue
const findLowestNode = (lowest, procs) => {

    const knowNode = Object.keys(lowest)

    const lowerNode = knowNode.reduce((lower,node) => {
        if (lower ===null && !procs.includes(node)) {
            lower =node;
        }
        if (lowest[node]< lowest[lower]&& !procs.includes(node)) {
            lower = node;
        }
        return lower;    
    },null);
    return lowerNode;

}

const dijkstra = (graph) => {

    const weights = Object.assign({finish: Infinity}, graph.start);

    const parents = {finish:null};
    for (let child in graph.start){
        parents[child]='start';
    }

    const processed=[];

    let node = findLowestNode(weights, processed);

    while (node){
        let weight =weights[node];

        let children = graph[node];

        for (let n in children){
            let newWeight = weight+children[n];
            if (!weight[n]|| weights[n] > newWeight){
                weights[n] =  newWeight;
                parents[n] = node;
            }    
        }

        processed.push(node);
        node=findLowestNode(weights,processed);
    }
    let optimalPath = ['finish'];
    let parent = parents.finish;

    while (parent){
        optimalPath.unshift(parent);
        parent = parents[parent];
    }

    const results = {
        distance: weights.finish,
        path:optimalPath
    };
};

