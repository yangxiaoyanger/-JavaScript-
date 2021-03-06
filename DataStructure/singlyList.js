/**
 *          使用javascript实现一个单链表
 *          具有add、searchNode、remove三个方法
 */

//结点
function Node (data) {
    this.data = data;
    this.next = null;
} 
//单链表
function SinglyList () {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add = function (value) {
    var node = new Node(value),
        currentNode = this.head;
        
        //1st：当单链表为空时
        if (!currentNode) {
            this.head = node;
            this._length++;
            return node;
        }

        //2nd：单链表不为空
        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        this._length++;
        return node;
}

SinglyList.prototype.searchNode = function (position) {
    var currentNode = this.head,
        length = this._length,
        message = {failure: "Failure: non-existent node in this list"};
    
    //1st：位置position非法
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    } 

    //2nd：位置position合法
    for (var i = 1; i < position; i++) {
        currentNode = currentNode.next;
    }
    return currentNode;
}

SinglyList.prototype.remove = function (position) {
    var currentNode = this.head,
        length = this._length,
        message = {failure: "Failure: non-existent node in this list"},
        beforeNodeToDelete = null,
        nodeToDelete = null;
    
    //1st 位置position非法
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }

    //2nd 位置position为 1
    if (position === 1) {
        this.head = currentNode.next;
        nodeToDelete = currentNode;
        currentNode = null;
        this._length--;
        return nodeToDelete;
    }

    //3rd position为其他位子
    for(var i = 1; i < position; i++) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        currentNode = currentNode.next;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    currentNode = null;
    this._length--;
    return nodeToDelete;
}
