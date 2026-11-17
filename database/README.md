# Database scripts

Use these scripts with the local PostgreSQL database named `climbing_app`:

- `schema.sql` creates the `users` and `posts` tables and their indexes.
- `seed.sql` inserts three demo users and four demo posts. Re-running it updates the same demo rows.

## Run a script in pgAdmin 4

1. In the Browser panel, expand **Servers → your server → Databases**.
2. Right-click `climbing_app` and choose **Query Tool**.
3. In the Query Tool, press **Ctrl+O** and open the script from this folder.
4. Press **F5** to run it.

Run `schema.sql` before `seed.sql`. Refresh **Schemas → public → Tables** to see the tables afterward.
