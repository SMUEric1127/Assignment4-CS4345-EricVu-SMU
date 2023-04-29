# TA System

A TypeScript project that implements a TA system.

## Cloning the Project

To clone the project, use the following command:

```git clone https://github.com/SMUEric1127/Assignment4-CS4345-EricVu-SMU```

## Build Docker Image

To build the Docker image, navigate to the project root directory and use the following command:

```docker build -t ta-system .```

## Run Docker Image

To run the Docker image, use the following command:

```docker run -p 3000:3000 ta-system```

This will start the TA system on port 3000.

## Testing on Postman

Once the TA system is running, you can test it using Postman. Here are the endpoints available:

### 1. Singleton Pattern - TA Session Profile Singleton
Using Postman (Or any other api call application), GET method at ```http://localhost:3000/applyToTAJob```

This will call the Singleton at the backend to update the TA's total number of application, please refer to the terminal where you run docker to see the result

![image](https://drive.google.com/uc?export=view&id=1Qn--73RCTRHi6tKY_qAWJT_t2FbqlGQm)

![image](https://drive.google.com/uc?export=view&id=1JzhufCJynNZzTsF30CNdSM38cZWIiZFd)

### 2. Adapter Pattern - Score Format Adapter
Using Postman (Or any other api call application), GET method at ```http://localhost:3000/getTAScoreFormat```

This will get the initiated TA data and convert into the two format for either file storing purpose or viewing purpose (JSON or XML)

In real application, there will be an implementation of fetching the data from the backend, but for the purpose of the implementation, I initialized with an initial data in the function ```getTAData()```

After calling the api, it will retrieve the data and use the adapter to convert the two data, those two data are shown in either the terminal where the docker is running or the postman console

![image](https://drive.google.com/uc?export=view&id=17VRAWs_kWJDtuZ-Po-WnSGi9YFT1ke65)

![image](https://drive.google.com/uc?export=view&id=1JcOh6Y0_9ubXDm8YEk2QloSGPIf_bpcx)

### 3. Observer Pattern
Úing Pótman, GET method at ```http://localhost:3000/addta```

This will add the TA to the system and notice any Professor that is subcribed to the information channel.

In real application, we can push notification through email or mobile app and let professor know about their potential candidates.

After calling the api, it will update and notice all of the observer that is subcribed to the TA Object.

![image](https://drive.google.com/uc?export=view&id=1phvC-tLjCrhDXF-3CjXe9KC_7pbHVu4y)

![image](https://drive.google.com/uc?export=view&id=13LdBG8eCkRbODWohpuyvyGMf9qJev1cK)