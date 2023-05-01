This is a CarPro web application.

Clone the entire project using
    git clone https://github.com/maheshchandra-cs/carpro.git
    
Navigate to the Front-End project directory
    Client/car-wash-system
    
    Please follow README.md available in car-wash-system

To get Started with Back-End
    Create a account in MongoDG Atlas
    
    Deploy a free tier Cluster and create a Database.
    
    Configure your Database with NodeJs

Go to the Back-End project directory
    cd Server

We built the backend using 4 Microservices : Admin, Customer, Mechanic, Order.

Inside each Microservice there is a dbConfig.js file in config folder provide your database credentials here.

Install dependencies for each Microservice separately ( ServiceName: Admin, Customer, Mechaninc, Order).
    cd serviceName
    npm install

Start the server of all Microservices.
    node Server.js
