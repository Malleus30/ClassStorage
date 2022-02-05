export class Storage{
    
    constructor(name,option = 'localStorage'){
        this.name = name;
        this.option = option;
        if(option === 'sessionStorage'){
            this.option = sessionStorage;
        }else{
            this.option = localStorage;
        }
    }

     set(name, value){
        value = JSON.stringify(value);
          this.option.setItem(name,value);
    }
    get(key){
        return (JSON.parse(this.option.getItem(key))|| 'not found');  
    }
    clear(key) {
        this.option.removeItem(key);
    }
    isEmpty(key){
        return JSON.parse(this.option.getItem(key)) ? false : true;
    }
}