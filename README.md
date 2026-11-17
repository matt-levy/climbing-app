# Crux

Crux is a climbing community app for sharing climbs, finding partners, and discovering routes and gyms. The current project includes the homepage and local PostgreSQL schema; the app is not yet connected to the database through an API.

## Requirements

- Node.js and npm
- PostgreSQL installed and running locally
- pgAdmin 4 (for managing the database visually)

## Set up the local database

The database scripts are in the `database` folder. They create a `users` table and a `posts` table, with each post linked to its author.

1. Open pgAdmin 4 and connect to your local PostgreSQL server.
2. In the Browser panel, right-click **Databases** and choose **Create → Database…**. Name it `climbing_app`.
3. Expand **Databases**, then right-click `climbing_app` and choose **Query Tool**.
4. In the Query Tool, press **Ctrl+O** and open `database/schema.sql` from this project. Press **F5** to run it.
5. To add sample data, press **Ctrl+O** again, open `database/seed.sql`, and press **F5**.
6. In the Browser panel, right-click **Schemas → public → Tables** and choose **Refresh**. You should see `users` and `posts`.

The schema and seed scripts are safe to run again. The seed script creates three demo users and four demo climbing posts.

## Run the web app

Install the project dependencies, then start the Next.js development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). PostgreSQL can be running independently; the current homepage uses sample data in code and does not query the database yet.

## Project scripts

- `npm run dev` — start the local development server
- `npm run lint` — check code style
- `npm run build` — create a production build
