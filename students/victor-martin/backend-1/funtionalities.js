
import fs from 'fs/promises';

const PATH_BALANCE = './saldo.txt';

export const getBalance = async () => {
  const readBalance = await fs.readFile(PATH_BALANCE, {encoding:'utf-8'});
  return readBalance;
}

export const addBalance = async data => {
  const money = parseFloat(data)
  const currentBalance = parseFloat(await fs.readFile(PATH_BALANCE))
  const newBalance = (currentBalance + money).toString();
  await fs.writeFile(PATH_BALANCE, newBalance);
}

export const substractionBalance = async data => {
  const money = parseFloat(data)
  const currentBalance = parseFloat(await fs.readFile(PATH_BALANCE))
  const newBalance = (currentBalance - money).toString();
  await fs.writeFile(PATH_BALANCE, newBalance);
}


export const cleanBalance = async data => {
  const money = parseFloat(data)
  const currentBalance = parseFloat(await fs.readFile(PATH_BALANCE))
  const newBalance = (0).toString();
  await fs.writeFile(PATH_BALANCE, newBalance);
}
// export const removeBalance = async data => {
//   await fs.writeFile(PATH_BALANCE);
// }



  

