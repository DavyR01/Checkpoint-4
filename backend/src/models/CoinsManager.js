const AbstractManager = require("./AbstractManager");

class CoinsManager extends AbstractManager {
  constructor() {
    super({ table: "coins" });
  }

  insert(coin) {
    return this.connection.query(
      `insert into ${this.table} (name) values (?)`,
      [coin.name]
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
