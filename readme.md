1.Install postgres 
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04
https://www.digitalocean.com/community/tutorials/postgresql-ubuntu-16-04-ru

example:
login\password: shop_server\shop_server_db
sudo -u postgres createuser --interactive // type shop_server
sudo -u postgres createdb shop_server_db // type shop_server_db
sudo adduser shop_server //create linux user with password shop_server
sudo -u shop_server psql shop_server_db
"shop_server_db=# \password shop_server //change password to "shop_server"


Install pgAdmin or DBeaver ;) https://wiki.postgresql.org/wiki/Apt


"Once npm installed the module(pg-promise?), you need to create the session
table in your database."
For that you can use the table.sql file provided with the module:
sudo -u music_player_server psql music_player_db < node_modules/connect-pg-simple/table.sql
Or simply play the file via a GUI, like the pgAdminIII queries tool.


node-express-sequelize-postgresql-association gist
https://gist.github.com/thgaskell/e4decde53572664b182e