The goal of this project is to create an online store using a modern technological stack.
We use express, sequelize, redis, nunjucks.
Soon administration panel will be migrated to vue.
We adhere to the JSON.API standard.

### 1. [Install postgres](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

example:
login\password: shop_server\shop_server_db

```console
foo@bar:~$ sudo -u postgres createuser --interactive // type shop_server
Enter name of role to add: shop_server
Shall the new role be a superuser? (y/n) y
foo@bar:~$ sudo -u postgres createdb shop_server_db // creating db
foo@bar:~$ sudo adduser shop_server //create linux user with password shop_server
Добавляется пользователь «shop_server» ...
Добавляется новая группа «shop_server» (1001) ...
Добавляется новый пользователь «shop_server» (1001) в группу «shop_server» ...
Создаётся домашний каталог «/home/shop_server» ...
Копирование файлов из «/etc/skel» ...
Новый пароль : 
Повторите ввод нового пароля : 
passwd: пароль успешно обновлён
Изменение информации о пользователе shop_server
Введите новое значение или нажмите ENTER для выбора значения по умолчанию
        Полное имя []: 
        Номер комнаты []: 
        Рабочий телефон []: 
        Домашний телефон []: 
        Другое []: 
Данная информация корректна? [Y/n] y
foo@bar:~$ sudo -u shop_server psql shop_server_db // enter in postgress console
psql (12.1 (Ubuntu 12.1-1.pgdg19.04+1), server 11.6 (Ubuntu 11.6-1.pgdg19.04+1))
Type "help" for help.
shop_server_db=# 
```
in postgress console:
```console
shop_server_db=# \password shop_server (change password to "shop_server")
```
### 2. Install [pgAdmin]( https://wiki.postgresql.org/wiki/Apt)  or [DBeaver 6.1.5 ;)](https://github.com/dbeaver/dbeaver/releases/tag/6.1.5)

### 3. Install [Redis]( https://tecadmin.net/install-redis-ubuntu/ )
```console
foo@bar:~$  sudo apt-get install redis-server
foo@bar:~$  sudo systemctl enable redis-server.service
foo@bar:~$  sudo snap install redis-desktop-manager
```
Linux Mint users have to add `export PATH=$PATH:/snap/bin` into `.bashrc`
if you dont have icons in apps menu:
```console
foo@bar:~$  sudo ln -s /var/lib/snapd/desktop/applications/ /usr/share/applications/snap (if you dont get icons in search menu)
```

### 4. Install [NVM]( https://github.com/nvm-sh/nvm )
After NVM installation complete tell NVM to install current version:
```console
foo@bar:~$  nvm install node
```
or install latest version:
```console
foo@bar:~$  nvm install --lts
```
___
### Usefull
[node-express-sequelize-postgresql-association GIST](https://gist.github.com/thgaskell/e4decde53572664b182e)

find process and kill it
```console
foo@bar:~$  sudo netstat -nlp | grep :3000
foo@bar:~$  kill -9 process_id
foo@bar:~$  fuser -k 3000/tcp
```


>https://www.tutorialspoint.com/expressjs/expressjs_restful_apis.htm


> One day we will use full power of migrations https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465

```gist
npx sequelize-cli migration:generate --name [modelname]
npx sequelize-cli seed:generate --name users
npx sequelize-cli seed:create --name my-seed-file

npx sequelize-cli db:seed:all
npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
npx sequelize-cli db:seed --seed 20191011121208-update-feature.js
```




