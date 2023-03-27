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
  console.log('RESULT: ', result);
  return result;
};

// const findUser = async (username: string): Promise<RowDataPacket | undefined> => {
//   const [row] = await connection.execute<RowDataPacket[]>(`
//     SELECT * FROM Trybesmith.users WHERE username = ?
//   `, [username]);
//   return row[0];
// };

const userModel = { addUser, login };

export default userModel;
