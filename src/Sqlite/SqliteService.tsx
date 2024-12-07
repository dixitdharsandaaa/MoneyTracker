import SQLite, {
  SQLiteDatabase,
  SQLTransaction,
} from 'react-native-sqlite-storage';
import {
  CATEGORY_TABLE,
  CATEGORY_TABLE_QUERY,
  COUNT_CATEGORY,
  DATABASE_NAME,
  DELETE_EXPENSE_ENTRY,
  DELETE_INCOME_AND_EXPENSE,
  EXPENSE_TABLE_QUERY,
  GET_ALL_CATEGORY,
  GET_INCOME_AND_EXPENSE,
  INSERT_DEFAULT_CATEGORY,
  INSERT_INCOME_AND_EXPENSE,
  UPDATE_INCOME_AND_EXPENSE,
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

export const insertIncomeAndExpense = (payload: any): Promise<{}> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      tx.executeSql(
        INSERT_INCOME_AND_EXPENSE,
        [
          payload?.categoryId,
          payload?.categoryIconName,
          payload?.categoryName,
          payload?.categoryType,
          payload?.amount,
          payload?.description,
          payload?.date,
        ],
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

export const updateIncomeAndExpense = (payload: any): Promise<{}> => {
  console.log(payload);
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      tx.executeSql(
        UPDATE_INCOME_AND_EXPENSE,
        [payload?.amount, payload?.description, payload?.date, payload?.id],
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

export const deleteIncomeAndExpense = (id: any): Promise<{}> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      tx.executeSql(
        DELETE_INCOME_AND_EXPENSE,
        [id],
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

export const deleteExpense = (): Promise<{}> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      tx.executeSql(
        DELETE_EXPENSE_ENTRY,
        [],
        result => {
          resolve(result);
        },
        error => {
          reject(error);
        },
      );
    });
  });
};

export const getIncomeAndExpense = (): Promise<{
  message: string;
  data: any[];
}> => {
  return new Promise((resolve, reject) => {
    db.transaction((tx: SQLTransaction) => {
      tx.executeSql(
        GET_INCOME_AND_EXPENSE,
        [],
        (_: any, result: any) => {
          const data: any[] = [];
          // Loop through the rows and add each row to the categories array
          for (let i = 0; i < result.rows.length; i++) {
            data.push(result.rows.item(i)); // Push the current row to the array
          }
          resolve({
            message: '',
            data: data, // Return categories under 'data'
          });
        },
        (error: any) => {
          console.log(error);
        },
      );
    });
  });
};
