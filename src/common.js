

export function table(table){
    this.sqlstr.table = table
    return this;
} 

export function where(sql){
    this.sqlstr.where = sql
    return this;
}

export function field(field){
    this.sqlstr.field = field
    return this;
}



export function select(){
    let sql = `SELECT ${this.sqlstr.field||'*'} FROM ${this.sqlstr.table} where ${this.sqlstr.where}`
    return sql;
}

