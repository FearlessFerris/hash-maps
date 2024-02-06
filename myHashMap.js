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
    console.log( myMap[ 'Username' ]);
    
    

