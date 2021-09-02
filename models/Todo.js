const { DataTypes } = require('sequelize');

module.exports=(sequelize,DataType)=>{
 const todotbl=sequelize.define('todotbl',{
    name:{
        type:DataTypes.STRING
    }
 })
 return todotbl;
}