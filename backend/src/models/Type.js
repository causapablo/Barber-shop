const {DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize)=>{
    //defino el modelo
    sequelize.define('type',{
        name : {
            type : DataTypes.STRING,
            allowNull : false
        }
    },{
        timestamps : false
    })
}