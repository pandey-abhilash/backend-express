import Promise from 'bluebird'
import { MongoClient, ObjectId } from 'mongodb'
const connectionString='mongodb://localhost:27017/buddy_db';

let _db = null,
    _db_connected = false;

let database = {
  connectDatabase: () => {
    return new Promise((resolve, reject) => {
      if(_db_connected && _db) {
        resolve(_db)
      }
      else {
        return MongoClient.connect(connectionString, { useUnifiedTopology: true }).then(client => {
          _db_connected = true
          _db = client
          const db = client.db('buddy_db')
          resolve(db)
        }).catch(err => {
            console.log(err);
          reject(err)
        })
      }
    })
  },
  objectify: (id)=>{
    return ObjectId(id)
  }
}

export default database;






