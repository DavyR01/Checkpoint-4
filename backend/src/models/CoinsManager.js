const AbstractManager = require("./AbstractManager");

class CoinsManager extends AbstractManager {
  constructor() {
    super({ table: "coins" });
  }

  insert(coin) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, metal, dateHistory, value, price, country, picture, content, devise) VALUES (?,?,?,?,?,?,?,?,?)`,
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
      `UPDATE ${this.table} SET name = ?, metal = ?, dateHistory = ?, value = ?, price = ?, country = ?, picture = ?, content = ?, devise = ? WHERE id = ?`,
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
        coin.id,
      ]
    );
  }
}

module.exports = CoinsManager;
