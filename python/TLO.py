#tree level order

"""
Node
self.left (the left child of the node)
self.right (the right child of the node)
self.info (the value of the node)
"""
from collections import deque

def levelOrder(root):
    queue = []
    queue.append(root)
    while(len(queue)>0):
        node = queue.pop(0)
        print (node.info)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
