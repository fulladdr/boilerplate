Hello, My Friends
Thank you for having interest in this repository ! :)

1. npm init
2. npm install express --save
--save is form storing information
every dependencies are in node_module

3. npm install mongoose --save

4. npm install body-parser --save

5. download postman

6. npm install --save-dev nodemon
dev local에서 할 때만 사용하겠다는 뜻

7. npm run backend

8. npm install bcrypt --save 
비밀번호 암호화

9. npm install jsonwebtoken --save
10. npm install cookie-parser --save

------------------------------------------
REACT START
------------------------------------------

1. cd client
2. npx create-react-app .

페이지 이동을 할 때 React router Dom 사용

*cd client -> npm install react-router-dom --save

*client가 server에게 보낼때 AXIOS 사용
cd client -> npm install axios --save

*configuring the proxy manually
https://create-react-app.dev/docs/proxying-api-requests-in-development/


*how to run client server? 
cd client -> npm run start

cmd 1 is for client, cmd 2 is for server

npm install jsonwebtoken --save

* install concurrently to open back, front server simultaneously
which is -> npm install concurrently --save
how to open in cmd ->     
change package.json to "dev":"concurrently \"npm run backend\" \"npm run start --prefix client\"" 
and then
npm run dev

how to install antd
-> cd client(all the files related to client folder)
npm install antd --save

*setting up redux!
1. redux
2. react-redux
3. redux-promis (middleware)
4. redux-thunk (middleware)
-> cd client 
REMEMBER all of it have to be installed in client folder 
npm install redux react-redux redux-promise redux-thunk --save