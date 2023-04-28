# TA System

A TypeScript project that implements a TA system.

## Cloning the Project

To clone the project, use the following command:

git clone https://github.com/SMUEric1127/Assignment4-CS4345-EricVu-SMU


## Build Docker Image

To build the Docker image, navigate to the project root directory and use the following command:

docker build -t ta-system .


## Run Docker Image

To run the Docker image, use the following command:

docker run -p 3000:3000 ta-system

This will start the TA system on port 3000.

## Testing on Postman

Once the TA system is running, you can test it using Postman. Here are the endpoints available:

### 1. Singleton Pattern
Using Postman, GET method at localhost:3000/applyToTAJob

This will call the Singleton at the backend to update the TA's total number of application, please refer to the terminal where you run docker to see the result

![image](https://drive.google.com/uc?export=view&id=1Qn--73RCTRHi6tKY_qAWJT_t2FbqlGQm)

![image](https://drive.google.com/uc?export=view&id=1JzhufCJynNZzTsF30CNdSM38cZWIiZFd)

### 2. Adapter Pattern

### 3. Observer Pattern
