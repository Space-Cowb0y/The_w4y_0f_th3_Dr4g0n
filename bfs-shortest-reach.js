let bfs = (graph, root) => {
  let nodesLen = {};

  for(let i = 0; i < graph.length; i++){
    nodesLen[i] = Infinity; // Idicates that a node is not reachable from the start node
  }
  nodesLen[root] = 0; // The distance of the root node from the root node is set to 0

  let queue = [root] // Keep track of nodes we visit
  let current; // Keep track of the current node we are traversing

  // This loop will keep traversing nodes in the queue until we have no other node to traverse
  while(queue.length != 0){
    current  = queue.shift() // Removes the first element in the array

    let curConnected = graph[current] // We get all the nodes connected to the current node
    let neighborIdx = []
    let idx = curConnected.indexOf(1) // Gets the index of the first node connected to the current node because the number one in our array shows that the node is connected to anothe node on that index

    // If there is no node at the index of one, the index variable will be set to -1. 
    while(idx != -1){
      neighborIdx.push(idx) // So while index does not equals to -1, push our index onto our list of neighbors.
      idx = curConnected.indexOf(1, idx + 1) // This line searches for the next connected node.
    }

    // Now that we know all the nodes connected to the current node, we loop through this connected nodes, and get the distance
    for ( let j = 0; j < neighborIdx.length; j++){
      if (nodesLen[neighborIdx[j]] == Infinity){ // This line we haven't set the distance from the nodesLen[neighborIdx[j]] yet so we will set now. 
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1
        queue.push(neighborIdx[j]) // We push the neighbor to the queue so the next time we go through the while loop, we will check the neighbors of that node too.
      }
    }
  }

  return nodesLen
}

let exBFSGraph = [
  [0,1,1,1,0],
  [0,0,1,0,0],
  [1,1,0,0,0],
  [0,0,0,1,0],
  [0,1,0,0,0]
]

bfs(exBFSGraph, 1)


function processData(input) {
    input = input.split("\n"); //separa  o input
    var q = parseInt(input.shift()); // seta o numero de querys

    var arrIdx = 0; // seta index do array
    //O()
    for (var i = 0; i < q; i++) {
        var arr = input[arrIdx++].split(" ").map(Number); //mapeia o input spitando o no espaço e criando um novo array
        var n = arr[0]; // numero de nodes
        var m = arr[1]; // numero de edges
        
        // Build data structure, array in array
        var nodesArr = []; //array dos nodes
        for (var w = 0; w < m; w++) {
            var node = input[arrIdx++].split(" ").map(Number);
            var from = node[0];
            var to = node[1];

            if (!nodesArr[from]) { 
                nodesArr[from] = [];
            }
            if (!nodesArr[to]) {
                nodesArr[to] = [];
            }
            if (from > n || to > n) {
                continue;
            }
            nodesArr[from].push(to);
            nodesArr[to].push(from);
        }


        var root = parseInt(input[arrIdx++]);
        
        // Process graph using BFS
        var passedOver = [];
        processGraph(nodesArr, root, passedOver);
        
        // Print results
        var res = [];
        for (var j = 1; j <= n; j++) {
            if (j == root) {
                continue;
            }

            if (!passedOver[j]) {
                res.push(-1);
                continue;
            }

            res.push(passedOver[j]);
        }
        console.log(res.join(" "));
    }
}

function processGraph(nodesArr, root, passedOver) {
    var queue = [];
    queue.push(root);
    passedOver[root] = 0;

    while (queue.length > 0) {
        var nodeIdx = queue.shift();

        var nodeConnections = nodesArr[nodeIdx];
        if (!nodeConnections) {
            continue;
        }

        var distanceFromRoot = passedOver[nodeIdx];
        for (var i = 0; i < nodeConnections.length; i++) {
            var connIdx = nodeConnections[i];
            if (passedOver[connIdx]) {
                continue;
            }

            passedOver[connIdx] = distanceFromRoot + 6;
            queue.push(connIdx);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
