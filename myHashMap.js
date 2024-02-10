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
    All other methods are of logarithmic time value ( grow slowly as input size increases )
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
        ( accum, char ) => accum + char.charCodeAt(), 0 );
}

const h1 = hash( 'Username' );
console.log( h1 );


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
    Improving our Hashing Function  
    
    With our original hash function 
      - We might get huge index numbers 
      - What if we only needed to hash a few different words? This would waste space due to how large 
        of an array is created for even small words 
      - What if we could limit the size of the index we are getting back from our hashing function? 
        Solution: Use modulo( % ) to truncate: hash % array.length 
*/

/* 
  Note: This function uses Horner's Mehtod to prevent hashing collisions due to the limit of the array 
        size 

  
*/

function hash2( key, arrayLen ){
    const H_PRIME = 37;
    let numKey = Array.from( key ).reduce(
        ( accum, char ) => accum * H_PRIME + char.charCodeAt(), 0 );
    return numKey % arrayLen;
}

const h2 = hash2( 'Username', 10 );
console.log( h2 );


/* 
    Runtime of a Hash 
      - Amount of work to hash a key is not related to the number of items in a map 
      - With our implementation: It is related to the input length of the string 
        - So we can call it O( k ), where k is the number of characters in the string 
      - Real-world versions often use part of a string ( ex: first 100 characters )
        - These could be on O( 1 ) since the length of the key does not effect the 
          worst case 
      - We'll assume hash is O( 1 ) in discussion of runtime for hash tables 

    Fast Hashes vs Crypto Hashes 
    Hash functions for hash tables prioritize: 
      - speed ( must be fast )
      - wide distribution ( spread out values so there are fewer collisions )
    For cryptologic hashes, such as SHA or Bcrypt, prioritize: 
      - difficulty of reversing output 
    For crypto uses, always use a proven crypto hash!!! Never your own! 
*/ 

class HashMapTwo {
  constructor(){
    this.items = [];
  }

  set( k, v ){
    const hashedKey = hash2( k, 10 );
    this.items[ hashedKey ] = v;
  }

  get( k ){
    const hashedKey = hash2( k, 10 );
    return this.items[ hashedKey ];
  }
}

const m2 = new HashMapTwo();

m2.set( 'Username', 'Chelsea' );
console.log( m2.get( 'Username' ));
console.log( m2 );


/*
  Hash Table 
    - key -> hash function -> value ( this output is then used to store elements in things like an array )
  
  What about collisions? 
  
  Ex: berry -> 4
      durian -> 4 
  ( How would we store both values without overriding eachother )

  Solutions:
    - Seperate Chaining 
      - a technique used to resolve collisions in hash tables 
      - each bucket or slot in a hash table doesn't just hold a single key-value pair but rather 
        a collection of key-value pairs, typically implemented as a linked-list, array, or another data
        structure 
      - when a collision occurs, the new key-value pair is added to the collection associated with the 
        corresponding bucket 
      - be careful, if the load factor of the hash table is higher this can lead to longer search times,
        a higher liklihood of collisions and an overall degradation of the table itself 
        
  What is load factor? 
    - 
*/


    

