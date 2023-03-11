const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO registration(first_name, last_name, gender, email, password, phone_number) VALUES(?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.phoneNumber,
      ],
      (error, result, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, result);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(
      `SELECT id, first_name, last_name, gender, email, password, phone_number FROM registration`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `SELECT id, first_name, last_name, gender, email, password, phone_number FROM registration WHERE id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE registration SET first_name=?, last_name=?, gender=?, email=?, password=?, phone_number=? WHERE id=?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.password,
        data.phoneNumber,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM registration WHERE id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM registration WHERE email=?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
