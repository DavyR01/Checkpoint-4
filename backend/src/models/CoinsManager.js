const AbstractManager = require("./AbstractManager");

class CoinsManager extends AbstractManager {
  constructor() {
    super({ table: "coins" });
  }

  insert(coin) {
    return this.connection.query(
      `insert into ${this.table} (name, metal, dateHistory, value, price, country, picture, content, devise) values (?,?,?,?,?,?,?,?,?)`,
      [
        coin.name,
        coin.metal,
        coin.dateHistory,
        coin.value,
        coin.price,
        coin.country,
        coin.picture,
        coin.content,
        coin.devise,
      ]
    );
  }

  update(coin) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [coin.name, coin.id]
    );
  }
}

module.exports = CoinsManager;
