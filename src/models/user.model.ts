import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
import connection from './connection';

const addUser = async (user: IUser): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)
`, [user.username, user.vocation, user.level, user.password]);
  return insertId;
};

// const findUser = async (username: string): Promise<RowDataPacket | undefined> => {
//   const [row] = await connection.execute<RowDataPacket[]>(`
//     SELECT * FROM Trybesmith.users WHERE username = ?
//   `, [username]);
//   return row[0];
// };

const userModel = { addUser };

export default userModel;
