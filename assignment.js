const MongoClient = require( "mongodb" ).MongoClient;
const URL = "mongodb://localhost:27017/nodedb"

MongoClient.connect( URL, ( error, db ) => {
    if ( error ) throw error;
    const dbo = db.db( "nodedb" );

    dbo.createCollection( "users", ( error, res ) => {
        if ( error ) throw error;
        console.log( "Collection Created!" );
        db.close()
    } );
} );