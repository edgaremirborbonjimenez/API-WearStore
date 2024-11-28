import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const TypeOrmOptions: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "wearstore",
  logging: false,
  synchronize: true,
  autoLoadEntities: true,
};
