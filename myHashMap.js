/*
    What is an abstract data type? 

    a high-level description of a set of operations that can be performed on a 
    data structure without specifying the details of how these operations are 
    implemented

      - defines what operations can be performed on a data structure and what
      the expected behavior of those operations is
      - does not dictate how the data structure should be organized or implemented 
      internally
    
    Examples: 
      - Stack 
      - Queue 
      - List 
      - Set 
      - Map 
*/

/*
    What is a map? 

    an abstract data type that stores a collection on key / value pairs where each
    unique key is associated with a specific value 
    aka ( dictionary, associative array or hash map )
    
      - provide an efficient way to store, retrieve or update data based on keys 
    
    Example Below: 
*/
    
let myMap = new Map();
    
myMap.set( 'Username', 'George' );
const username = myMap.get( 'Username' );
console.log( username );

/* 
    Now lets create our own Map Implementation ( associative array )
      - constructor()
      - set( k, v ) 
      - get( k )
      - has( k )
      - delete( k )

      Iterating Over Map 
      - keys()
      - values()
      - entries() 

    Big O Notation: 
      - set - O( 1 )
      - get - O( n )
      - has - O( n )
      - delete - O( n )
      - keys - O( n )
      - values - O( n )
      - entries - O( n )
    
    Conclusion: 

    This example in most cases is not very efficient, only the set 
    method has constant time value ( time and space required remains constant regardless of input size )
    All other methods are of logrithmic time value ( grow slowly as input size increases )
*/

class mySimpleMap {
    constructor(){
        this.items = [];
    }

    set( k, v ){
         this.items.push([ k, v ]);
    }

    get( k ){
        let kv = this.items.find( kv => k === kv[0] );
        return kv ? kv[1] : undefined;
    }

    has( k ){
        return this.items.find( kv => k === kv[0] ) !== undefined;
    }

    delete( k ){
        let i = this.items.findIndex( kv => k === kv[0] );
        if( i !== -1 ) this.items.splice( i, 1 );
    }

    keys() { return this.items.map( kv => kv[0] )};
    values() { return this.items.map( kv => kv[1] )};
    entries() { return this.items; }
}


let firstSimpleMap = new mySimpleMap();

firstSimpleMap.set( 'Username', 'Harry' );
firstSimpleMap.set( 'Password', 'Nimbus2000' );

const simpleUsername = firstSimpleMap.get( 'Username' );
const simplePassword = firstSimpleMap.get( 'Password' );

console.log( `Your username is ${ simpleUsername } and your password is ${ simplePassword }`);


/*
    Hash Table / Map 
*/

function hash( k ){
    return Array.from( k ).reduce(
        ( accum, char ) => accum + char.charCodeAt(),
        0
    );
}

class hashMap {
    constructor(){
        this.items = [];
    }

    set( k, v ){
        const hashedKey = hash( k );
        this.items[hashedKey] = v;
    }

    get( k ){
        const hashedKey = hash( k );
        return this.items[hashedKey];
    }

}

const m1 = new hashMap();

m1.set( 'Username', 'Jack' );
console.log( m1.get( 'Username' ));

/*
    Hashing 
*/

function hash2( key, arrayLen ){
    hash = Array.from( key ).reduce(
        ( accum, char ) => accum + char.charCodeAt(), 0 );
    return hash % arrayLen;
}





    
    

