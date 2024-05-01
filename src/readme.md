Sequelize---Sequelize is a popular ORM created for Node.js, and in this tutorial we'll be using it to build a CRUD API to manage notes.

Interacting with databases is a common task for backend applications. This was typically done via raw SQL queries, which can be difficult to construct, especially for those new to SQL or databases in general.

Eventually, Object Relational Mappers (ORMs) came to be - designed to make managing databases easier. They automatically map out the objects (entities) from our code in a relational database, as the name implies.

No longer would we write raw SQL queries and execute them against the database. By providing us with a programmatic way to connect our code to the database and manipulate the persisted data, we can focus more on the business logic and less on error-prone SQL.

Object Relational Mapping is a technique that maps software objects to database tables. Developers can interact with objects instead of having to actually write any database queries. When an object is read, created, updated, or deleted, the ORM constructs and executes a database query under the hood.

Another advantage of ORMs is they support multiple databases: Postgres, MySQL, SQLite, etc. If you write an application using raw queries, it will be difficult to move to a different database because many of the queries will need to be re-written.

With an ORM, switching databases is done by the ORM itself, and typically all you need to do is change a value or two in a configuration file.