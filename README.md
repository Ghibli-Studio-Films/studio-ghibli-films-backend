# Studio Ghibli Films

<img src="./static/assets/img/stugio-ghibli-films-logo.png" alt="project logo"/>

<p style="text-align:center;">Light weight express server for listing ghibli studio films.</p>

## Index

---

- [Studio Ghibli Films](#studio-ghibli-films)
  - [Index](#index)
    - [1. Description](#1-description)
    - [2. Get Started](#2-get-started)
      - [2.1 Installing Dependencies](#21-installing-dependencies)
      - [2.2 Environment Configuration](#22-environment-configuration)
      - [2.3 Running Migrations](#23-running-migrations)
      - [2.4 Starting Development Server](#24-starting-development-server)
    - [3. Entity Relationship Diagram](#3-entity-relationship-diagram)
    - [4. Requisitons Documentation](#4-requisitons-documentation)
      - [4.1 Base url](#41-base-url)
      - [4.2 Requisitions](#42-requisitions)
    - [5. Testing](#5-testing)
    - [6. In Depth](#6-in-depth)
      - [6.1 Application Flow](#61-application-flow)
      - [6.2 Scripts](#62-scripts)
      - [6.3 Get Data Source](#63-get-data-source)
      - [6.4 Global Variables](#64-global-variables)
      - [6.5 Static Files](#65-static-files)

### 1. Description

This project is a light weight express server made with 💕 for [Work Anywhere](https://www.waproject.com.br/) Project job appplication.

The API consists in a simple express server with two endpoints. The first one is for getting films of Studio Ghibli from a thirdparty API and saving them in it's own dedicated database. The second one is for listing the films with a dynamic paginated response.

The API was designed to be reasonably scalable, even without using any other backend framework.

Some of the technologies used in this project where:

- [Node.Js](https://nodejs.org/en/);
- [TypeScript](https://www.typescriptlang.org/);
- [Express.Js](https://expressjs.com/pt-br/);
- [Jest](https://jestjs.io/);
- [TypeORM](https://typeorm.io/);
- [PostgreSQL](https://www.postgresql.org/);
- [SQLite3](https://www.sqlite.org/index.html).

[⬆️ **Go to beginning**](#index)

### 2. Get Started

There are some easy, simple, yet necessary steps for setting the project ready for development/use. Follow them below to setup the enviroment and start developing/using the application.

#### 2.1 Installing Dependencies

The first step is to run Node.js dependencies manager it can made with either `npm` or `yarn`.

The project was first setup with `npm`, if you prefer to use `yarn` remember to delete package-lock.json.

**With npm:**

```shell
npm install
```

**With yarn:**

```shell
yarn install
```

After the command is successfully executed a message like this will be shown:

<img src="./static/assets/img/installing-packages.png" alt />

Now you will need to configure project environment variables.

#### 2.2 Environment Configuration

<img src="./static/assets/img/environment-variables.png" alt="environment variables"/>

The project is shipped with a .env.example file with all environment variables that should be configured. The first thing to do is change the file name to .env so it can be read by Node.Js, then set it's variables in accord with the cases below:

**Database url:**

```shell
DATABASE_URL= "postgres://user:password@host:port/dbname"
```

It is a url representing the minimum information and credentials to connect with a postgreSQL database. The information must be arranged as per example url above.

They are user (database owner), his password, the host name (mostly 'localhost' in development), port (mostly '5432' for postgreSQL) and the database name.

**Node env:**

```shell
NODE_ENV=dev
```

Represents the environment in wich Node.Js is running against, e.g. prod (production), dev (development) and test (testing). This will define TypeORM data source configurations for managing the database connection.

In development it must be set on the .env file or directly in the scripts commands (Node.js scripts), for tests this can be set directly in scripts command so it's value takes precedence before any other. In production most of deployment tools tends to set it automatically with the 'prod' value as soon as it detects Node.Js, if not this should be set manually.

Be always aware of what value is this variable set to.

**Port:**

```shell
PORT=3000
```

Represents the operating system port in wich the server is listening to HTTP requisitions.
In development and tests environments this should be set on .env file, in production this should be automatically set by the deployment tool.

After configuring your developing enviroment is necessary to sync application's data models and your database.

#### 2.3 Running Migrations

Migrations are the versioning of what happens over time to database and data models, they should gradually generated as database change.

**⚠️THEY SHOULD NOT BE DELETED, THIS MAY LEAD TO INCONSISTENT BEHAVIOR.⚠️**

To sync your development database with application migrations you can run `npm run typeorm -- migration:run -d ./src/data-source.ts` or `yarn typeorm migration:run -d ./src/data-source.ts`. Optionally is possible to use auxiliary migrations script, refer to [migrations script](#62-scripts).

With this in place it's time to start the development server.

#### 2.4 Starting Development Server

To start de development server just use the commands `npm run tsnode:dev` or `yarn tsnode:dev`, if the steps above where correctly followed you should see a message similar to the one bellow:

<img src="./static/assets/img/dev-server.png"/>

To stop the development server, in most of systems, the shortcut CTRL + SHIF + C will be suficient.

[⬆️ **Go to beginning**](#index)

### 3. Entity Relationship Diagram

The image below represents database models and how they interact with each other in the actual development stage of the project. Bear in mind that this can and will be updated in the near future by demand.

<img src="./static/assets/img/erd.png" alt="entity realationship diagram"/>

[⬆️ **Go to beginning**](#index)

### 4. Requisitons Documentation

This topic documents the application base url, endpoints and examplify how to make requisitions.

#### 4.1 Base url

local: http://localhost:3000

deployed:

#### 4.2 Requisitions

**GET** /films

This endpoint will return a paginated response containing the Stuidio Ghibli films. By default pagination will bring page 1 and a limit of 10 results, the limit cannot be inferior to 10.

Pagination can be dynamically adjusted to user needs by passing the querys **_page_** and **_limit_**. Beaware that any off-range values (negative or positive) will result in a **_default_** response.

Calling pagination querys with any value other than an integer will result in a **_pagination error._**

On success:

```json
//requisiton: GET baseURL/films

//response:

//status: 200

//body:

{
  "data_count": 22,
  "total_pages": 3,
  "page": 2,
  "per_page": 10,
  "previous": null,
  "next": "baseURL/films?page=3&limit=10",
  "results": [
    {
      "id": "67299368-f41e-422c-8eee-9b1a34fa868c",
      "title": "Spirited Away",
      "original_title": "千と千尋の神隠し",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "movie_banner": "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
      "description": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "release_date": "2001",
      "running_time": "124",
      "rt_score": "97"
    }
    //... length of 10
  ]
}
```

```json
//requisiton: GET baseURL/films?page=2

//response:

//status: 200

//body:

{
  "data_count": 22,
  "total_pages": 3,
  "page": 2,
  "per_page": 10,
  "previous": "baseURL/films?page=1&limit=10",
  "next": "baseURL/films?page=3&limit=10",
  "results": [
    {
      "id": "67299368-f41e-422c-8eee-9b1a34fa868c",
      "title": "Spirited Away",
      "original_title": "千と千尋の神隠し",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "movie_banner": "https://image.tmdb.org/t/p/original/bSXfU4dwZyBA1vMmXvejdRXBvuF.jpg",
      "description": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "release_date": "2001",
      "running_time": "124",
      "rt_score": "97"
    }
    //... length of 10
  ]
}
```

```json
//requisiton: GET baseURL/films?limit=15

//response:

//status: 200

//body:

{
  "data_count": 22,
  "total_pages": 2,
  "page": 1,
  "per_page": 15,
  "previous": null,
  "next": "baseURL/films?page=2&limit=15",
  "results": [
    {
      "id": "4848f8fc-daec-44d4-a6a5-23f3dbd15b37",
      "title": "Castle in the Sky",
      "original_title": "天空の城ラピュタ",
      "image": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
      "movie_banner": "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
      "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      "director": "Hayao Miyazaki",
      "producer": "Isao Takahata",
      "release_date": "1986",
      "running_time": "124",
      "rt_score": "95"
    }
    //... length of 15
  ]
}
```

On fail:

```json
//requisiton: GET baseURL/films?page=a&limit=b

//response:

//status: 400

//body:

{
  "status_code": 400,
  "message": "Page and limit should be integers."
}
```

**GET** /films/ghibli

This endpoint updates the application films database using a thirdparty API service. The max limit of films that can be stored actually are 50.

Any error in the process of requisiting the films will result in a internal server error, this will be mostly due error on requisiting thirdparty data. If this error presists open an issue [**here**](https://github.com/Ghibli-Studio-Films/studio-ghibli-films-backend/issues).

On success:

```json
//requisiton: GET baseURL/films/ghibli

//response:

//status: 204

//body:

{}
```

On fail:

```json
//requisiton: GET baseURL/films/ghibli

//response:

//status: 500

//body:

{
  "status_code": 500,
  "message": "Internal server error. If this persists contact the development team."
}
```

[⬆️ **Go to beginning**](#index)

### 5. Testing

The application is shipped with a inital set of tests. The tests cover unitary and integration test cases of controllers, services, middlewares, utils, data source and routes.

Jest with ts-jest environment was the choosed test engine, he provide anything to consistently guarantee the application functionality and scalability.

There are some commands to run the tests suits, each one do the same but with slight differences in the output. They are as listed below:

`npm run jest` or `yarn jest` - runs the tests suites once with minimum output information.

`npm run jest:watch` or `yarn jest:watch` - runs the tests suites in watch mode meaning that any change to project files will trigger a re execution of the tests suites. It's output information is verbose meaning that it will show every test inside every suite in it.

`npm run jest:coverage` or `yarn jest:coverage` - runs the tests suites once collecting code coverage data. It's output information is verbose meaning that it will show every test inside every suite in it.

extra: `npm run open:coverage` or `yarn open:coverage` - open code coverage data in a browser interface.

Any new test should be put inside src/\_\_tests\_\_ directory within it's specific type (unitary or integration). Any fixture goes inside src/\_\_tests\_\_/fixtures.

[⬆️ **Go to beginning**](#index)

### 6. In Depth

Some optional but good to know information.

#### 6.1 Application Flow

The Studio Ghibli Films API is a express server focusing in the use of REST architecture. It's organization is as below:

Everything starts in server file, where server is bootstraped and binds to some port.

START POINT => server.ts => app.ts => route.routes.ts => type.middleware.ts => route.controller.ts => route.service.ts => END POINT

From here the success or error response is sent back to the requisitor.

NOTE: the handle errors middleware is a special case, it is positioned after the endpoint and catches any thrown error inside the application. The error is then standardized and returned as a json response.

#### 6.2 Scripts

There are two optional auxiliary shell scripts, postgres and migrations. Each one helps in a specific task and easen the burden of having to execute long chains of commands.

**Postgres:**

<img src="./static/assets/img/script-postgres.png" alt="postgres script">

Postgres script was made to help with upping and downing development databases from local running postgres.

Just hit `npm run postgres` or `yarn postgres` and follow the isntructions.

**Migration:**

<img src="./static/assets/img/script-typeorm.png" alt="migrations script">

Since TypeORM migration commands are too long and to complicated to remember this script will give a help with this tasks.

Just hit `npm run migrations` or `yarn migrations` and follow the instructions.

#### 6.3 Get Data Source

The get data source function helps with the burden of having to switch between database configurations in different environments. It receives NODE_ENV and DATABASE_URL variables as parameters and dynamically returns a new data source instace.

Usually there's no need to change anything in this function, but any new data source options for different environments can be added here.

#### 6.4 Global Variables

Any global variable that's broad acessible in any point of the application should be declared and initialized here.

#### 6.5 Static Files

Any static asset, like images,should go inside this directory.

[⬆️ **Go to beginning**](#index)
