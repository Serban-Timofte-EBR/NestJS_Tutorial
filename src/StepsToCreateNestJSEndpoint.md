## Steps to create a NestJS Endpoint

&emsp; <b><i>1. Create the .entity.ts file</i></b>

&emsp;&emsp; -> An entity in TypeORM is simply a class that maps to a database table. Each instance of the class represents a record in that table, and each field in the class corresponds to a column in the table.

&emsp;&emsp; -> @Entity(): This decorator tells TypeORM to treat this class as a database entity, and it will create a corresponding Song table in your database.

&emsp; <b><i>2. Create the .service.ts</i></b>

&emsp;&emsp; -> Run nest -g service songs (or any other name)

&emsp;&emsp; -> Declare the functions you are going to use. In service file you interact with the DB

&emsp; <b><i>3. Create the DTO</i></b>