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
        // Insérer le user_id ?????? voir MVC Express articleManager fin de page
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
        // Insérer le user_id ?????? voir MVC Express articleManager fin de page
        coin.id,
      ]
    );
  }
}

module.exports = CoinsManager;

/*   insert(article) {
    return this.connection.query(
      `INSERT INTO ${this.table} (title, content, user_id) 
    VALUES(?,?,?)`, // user_id indispensable ??
      [article.title, article.content, article.user_id]
    );
  }

  update(article) {
    return this.connection.query(
      `UPDATE ${this.table} SET title = ?, content = ?,
      user_id = ? WHERE id = ? `,
      [article.title, article.content, article.user_id, article.id]
    );
  }
} */
