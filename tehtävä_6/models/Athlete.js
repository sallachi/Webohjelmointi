const db = require("../config/db");

class Athlete {
  constructor(firstname, lastname, nickname, birthyear, weight, picturelink, sport, achievements) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.nickname = nickname;
    this.birthyear = birthyear;
    this.weight = weight;
    this.picturelink = picturelink;
    this.sport = sport;
    this.achievements = achievements;
  }

  async save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO athlete(
        firstname,
        lastname,
        nickname,
        birthyear,
        weight,
        pictureLink,
        sport,
        achievements,
        created_at
    )
    VALUES(
        '${this.firstname}',
        '${this.lastname}',
        '${this.nickname}',
        '${this.birthyear}',
        '${this.weight}',
        '${this.picturelink}',
        '${this.sport}',
        '${this.achievements}',
        '${createdAtDate}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM athlete;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM athlete WHERE id = ${id};`;
    return db.execute(sql);
  }

  static updateWithId(id, firstname, lastname, nickname, birthyear, weight, picturelink, sport, achievements) {
    let sql = `UPDATE athlete SET 
        firstname = '${firstname}',
        lastname = '${lastname}',
        nickname = '${nickname}',
        birthyear = '${birthyear}',
        weight = '${weight}',
        picturelink = '${picturelink}',
        sport = '${sport}',
        achievements = '${achievements}'
        WHERE id = '${id}'`;
    return db.execute(sql);
  }

  static deleteById(id){
    let sql = `DELETE FROM athlete WHERE id = '${id}'`;
    return db.execute(sql);
  }
}

module.exports = Athlete;
