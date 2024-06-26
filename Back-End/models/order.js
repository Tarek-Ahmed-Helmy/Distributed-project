module.exports = (db, type)=>{
    return db.define('orders', {
        orderID:{
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        totalPrice: {
            type: type.FLOAT,
            allowNull: false
        }
    }, {
        timestamps: true
    })
}