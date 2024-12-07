export const DATABASE_NAME = "expense_tracker_sqlite.db"


export const CATEGORY_TABLE = "Category"
export const EXPENSE_TABLE = "Expense"


export const CATEGORY_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS ${CATEGORY_TABLE} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    type TEXT,
    icon_name TEXT
)`
export const EXPENSE_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS ${EXPENSE_TABLE} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_id INTEGER,
    category_icon TEXT,
    category_name TEXT,
    category_type TEXT,
    amount NUMBER,
    description TEXT,
    created_at TEXT,
    updated_at TEXT,
    FOREIGN KEY (category_id) REFERENCES ${CATEGORY_TABLE}(id)
)`


export const INSERT_DEFAULT_CATEGORY = `INSERT INTO ${CATEGORY_TABLE} (name, type, icon_name) VALUES ('Shopping','Expense','shopping-cart'), ('Food','Expense','utensils'), ('Phone','Expense','mobile-alt'), ('Enterainment','Expense','microphone'), ('Education','Expense','book'), ('Beauty','Expense','laugh-beam'), ('Sports','Expense','swimmer'), ('Social','Expense','user-friends'), ('Transportation','Expense','bus-alt'), ('Clothing','Expense','tshirt'), ('Car','Expense','car-alt'), ('Electronics','Expense','cogs'), ('Travel','Expense','plane'), ('Health','Expense','briefcase-medical'), ('Gifts','Expense','gift'), ('Fruits','Expense','apple-alt'), ('Salary','Income','money-check'), ('Investment','Income','rupee-sign'), ('Part-Time','Income','clock'), ('Bonus','Income','gifts')`
export const COUNT_CATEGORY = `SELECT COUNT(*) AS count FROM ${CATEGORY_TABLE}`


export const GET_ALL_CATEGORY = `SELECT * FROM ${CATEGORY_TABLE} WHERE type = ?`


export const INSERT_INCOME_AND_EXPENSE_CATEGORY = ``
export const UPDATE_INCOME_AND_EXPENSE_CATEGORY = ``
export const DELETE_INCOME_AND_EXPENSE_CATEGORY = ``


export const INSERT_INCOME_AND_EXPENSE = `INSERT INTO ${EXPENSE_TABLE} (category_id, category_icon, category_name, category_type, amount, description, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)`
export const UPDATE_INCOME_AND_EXPENSE = `UPDATE ${EXPENSE_TABLE} SET amount = ?, description = ?, updated_at = ? WHERE id = ?`
export const DELETE_INCOME_AND_EXPENSE = `DELETE FROM ${EXPENSE_TABLE} WHERE id = ?`
export const DELETE_EXPENSE_ENTRY = `DELETE FROM ${EXPENSE_TABLE}`


export const GET_INCOME_AND_EXPENSE = `SELECT * FROM ${EXPENSE_TABLE}`

