import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

const addUser = async (user: IUser): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)
`, [user.username, user.vocation, user.level, user.password]);
  return insertId;
};

const login = async (user: ILogin) => {
  const [result] = await connection.execute<RowDataPacket[]>(
    `
    SELECT * FROM Trybesmith.users
    WHERE username = ?
    AND password = ?
    `,
    [user.username, user.password],
  );
  return result;
};

const findUser = async (id: number) => {
  const [row] = await connection.execute(`
    SELECT * FROM Trybesmith.users WHERE id = ?
  `, [id]);
  return row;
};

const userModel = { addUser, login, findUser };

export default userModel;
