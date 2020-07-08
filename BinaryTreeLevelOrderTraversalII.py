class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        tree = []
        queue = []
        if (root == None):
            return tree
        queue.append(root)
        while(len(queue)!=0):
            nodes = []
            for i in range(len(queue)):
                node = queue.pop(0)
                nodes.append(node.val)
                if(node.left != None):
                    queue.append(node.left)
                if(node.right != None):
                    queue.append(node.right)
            tree.insert(0,nodes)
        return tree
        