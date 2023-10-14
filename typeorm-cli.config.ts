import { CoffeeRefactor1697316711072 } from "src/migrations/1697316711072-CoffeeRefactor";
import { SchemaSync1697318369398 } from "src/migrations/1697318369398-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    entities: [],
    migrations: [CoffeeRefactor1697316711072, SchemaSync1697318369398],
});