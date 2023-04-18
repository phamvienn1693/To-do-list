
const { listdata } = require('./list'); 
    
    function todo (name, created, status) {
        this.name = name,
        this.created = created,
        this.status = status 
    };  
 
    const todo1 = new todo('Hà', 22, 1);
    listdata.push(todo1);
    
    for (let i = 0; i < listdata.length; i++) {
        listdata[i];
        setTimeout(function() {
            console.log(listdata[i]);
        }, 1000 * i);
    } 
    
    const removed = listdata.splice(2,1);
    console.log(removed);

    
