const AbstractManager = require("./AbstractManager");

class CoinsManager extends AbstractManager {
  constructor() {
    super({ table: "coins" });
  }

  insert(item) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [item.title]
    );
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set name = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = CoinsManager;
