const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.connection.query(
      `SELECT id, firstname, lastname, email, avatar FROM  ${this.table} WHERE id = ?`,
      [id]
    );
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `SELECT * from  ${this.table} WHERE email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT id, firstname, lastname, email, city, language, avatar FROM  ${this.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `INSERT into ${this.table} (firstname, lastname, email, hashedPassword) VALUES (?, ?, ?, ?)`,
      [user.firstname, user.lastname, user.email, user.hashedPassword]
    );
  }

  update(user) {
    return this.connection.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ? WHERE id = ?`,
      [user.firstname, user.lastname, user.email, user.id]
    );
  }

  updateAvatar(id, avatar) {
    return this.connection.query(
      `UPDATE ${this.table} SET avatar = ? where id = ?`,
      [avatar, id]
    );
  }
}

module.exports = UserManager;
