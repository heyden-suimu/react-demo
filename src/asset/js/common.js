import { Message } from "element-react";

const layer = function (msg, type="error") {
    Message({
        message: msg,
        type: type
    })
    
}

class Table {
    constructor(columns, data) {
        this.columns = columns;
        this.data = data;
    }
}

export {
    layer
}