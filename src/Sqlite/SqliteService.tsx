import SQLite, {
  SQLiteDatabase,
  SQLTransaction,
} from 'react-native-sqlite-storage';
import {
  CATEGORY_TABLE,
  CATEGORY_TABLE_QUERY,
  COUNT_CATEGORY,
  DATABASE_NAME,
  EXPENSE_TABLE_QUERY,
  GET_ALL_CATEGORY,
  INSERT_DEFAULT_CATEGORY,
} from './SqliteQuery';

export const db: SQLiteDatabase = SQLite.openDatabase(
  {name: DATABASE_NAME, location: 'default'},
  () => {
    console.log('Database opened');
  },
  (error: string) => {
    console.log('Error opening database: ', error);
  },
);

export const createExpenseAndCategoryTable = (): Promise<{message: string}> => {
  return new Promise((resolve, reject) => {
    let expenseTableCreated = false;
    let categoryTableCreated = false;
    db.transaction((tx: SQLTransaction) => {
      // Create Expense Table
      tx.executeSql(
        EXPENSE_TABLE_QUERY,
        [],
        () => {
          expenseTableCreated = true;
          if (expenseTableCreated && categoryTableCreated) {
            resolve({
              message: 'Both expense and category tables created successfully',
            });
          }
        },
        (error: string) => {
          reject(`Error creating expense table: ${error}`);
        },
      );
      // Create Category Table
      tx.executeSql(
        CATEGORY_TABLE_QUERY,
        [],
        () => {
          categoryTableCreated = true;
          if (expenseTableCreated && categoryTableCreated) {
            resolve({
              message: 'Both expense and category tables created successfully',
            });
          }
        },
        (error: string) => {
          reject(`Error creating category table: ${error}`);
        },
      );
    });
  });
};

export const defaultCategory = (): Promise<{message: string}> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      // Check if the category table is empty
      tx.executeSql(
        COUNT_CATEGORY, // Count the number of rows in the category table
        [],
        (tx: any, result: any) => {
          const count = result.rows.item(0).count;
          if (count === 0) {
            // Table is empty, insert the default category
            tx.executeSql(
              INSERT_DEFAULT_CATEGORY,
              [],
              () => {
                resolve({message: 'Default category inserted successfully.'});
              },
              (error: string) => {
                reject(`Error inserting default category: ${error}`);
              },
            );
          } else {
            // Table is not empty, do not insert
            resolve({message: 'Category table already contains data.'});
          }
        },
        (error: string) => {
          reject(`Error checking if category table is empty: ${error}`);
        },
      );
    });
  });
};

export const getCategory = (
  type: string,
): Promise<{message: string; data: any[]}> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      tx.executeSql(
        GET_ALL_CATEGORY,
        [type],
        (tx: any, result: any) => {
          const categories: any[] = [];
          // Loop through the rows and add each row to the categories array
          for (let i = 0; i < result.rows.length; i++) {
            categories.push(result.rows.item(i)); // Push the current row to the array
          }
          resolve({
            message: 'Categories fetched successfully',
            data: categories, // Return categories under 'data'
          });
        },
        (error: string) => {
          reject(`Error fetching categories: ${error}`);
        },
      );
    });
  });
};
