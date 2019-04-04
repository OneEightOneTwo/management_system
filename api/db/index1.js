// 数据库封装
/*
    增、删、改、查
*/
// 引入模块
const mongodb = require('mongodb');

// 在 MongoDB 中创建一个数据库，首先我们需要创建一个 MongoClient 对象
const MongoClient = mongodb.MongoClient;


const database_url = 'mongodb://localhost:27017';//默认
const database_name = 'manage';//数据库名

// 连接
var connect = async () => {
    let client = await MongoClient.connect(database_url, { useNewUrlParser: true });
    let db = client.db(database_name);
    return { db, client }
}



/*insert 插入
//  colName:表名
//  data:插入的数据,可以为数组
// 例： insert('user',[{name:'xxx',age:20},{name:'xx2',age:18}]);
*/
exports.insert = async (colName, data) => {
    let { db, client } = await connect();
    let collection = db.collection(colName);
    let res = await collection[Array.isArray(data) ? 'insertMany' : 'insertOne'](data);

    client.close();//关闭查询

    return res;//返回结果
}

/*delete 删除
//  colName:表名
//  query:删除条件
// 例：delete('user',{age:{$lt:18}});
*/
exports.delete = async (colName, query) => {

    let { db, client } = await connect();

    let collection = db.collection(colName);
    let res = await collection['deleteMany'](query);

    client.close();

    return res;
}

/*update 设置
//  colName:表名
//  query:条件
//  newDate:设置
// 例：update('user',{name:'xiaoming'},{{$set:{age:27}});
*/
exports.update = async (colName, query, newData) => {

    let { db, client } = await connect();

    let collection = db.collection(colName);
    let res = await collection['updateMany'](query, newData);

    client.close();

    return res;
}



/*find 查询
//  colName:表名
//  query:条件
// 例：find('user',{name:'xiaoming'});
*/
exports.find = async (colName, query) => {

    let { db, client } = await connect();

    let collection = db.collection(colName);
    let res = await collection.find(query).toArray();//将查询结果置为数组
    client.close();

    // 返回查询结果
    return res;

}
// update('user', { username: '' }, {{ $set: { age: 27 } });