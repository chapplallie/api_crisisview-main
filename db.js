import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

let sequelize;
if (process.env.NODE_ENV === 'test') {
    // Use in-memory SQLite for tests
    sequelize = new Sequelize('sqlite::memory:', {
        logging: false
    });
} else {
    // Use Postgres for other environments
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'postgres',
        logging: false
    });
}

export { sequelize };