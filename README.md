## EquiLoad - A Smart Load Balancer

EquiLoad is an intelligent, AI-assisted load balancer that optimizes traffic distribution across backend servers. Users can configure their backend servers, select from different load-balancing algorithms, and even receive AI recommendations based on their needs. Additionally, a built-in machine learning model predicts the best server based on CPU usage, memory, active connections, and response time.

## Features

- _Custom Backend Configuration_: Users can input their backend server URLs.
- _Very Easy Onboarding_: Very convenient for beginners.
- _Algorithm Selection_: Choose from multiple load-balancing algorithms.
- _AI Assistance_: If unsure about an algorithm, users can consult AI for recommendations.
- _ML-Based Prediction_: The system intelligently assigns requests using a machine learning model that considers:
  - CPU Usage
  - Memory Consumption
  - Active Connections
  - Response Time

## Usage

1. Enter your backend server URLs.
2. Select a load-balancing algorithm or ask AI for guidance.
3. Enable ML-based prediction for automated decision-making.
4. Monitor server performance and request distribution.

## Load Balancing Algorithms Supported

- _Round Robin_: Distributes requests sequentially.
- _Least Connections_: Directs traffic to the server with the fewest active connections.
- _IP Hashing_: Routes requests based on the client's IP address to maintain session persistence.
- _AI-Assisted Recommendation_: Suggests the best algorithm based on workload.

## Team Member names

- _Kanishk Sogani_
- _Kirtan Lakhotia_
- _Kamna Dubey_
- _Ashutosh Dwivedi_

## Technologies Used

- _Backend_: Node.js, Express.js
- _Frontend_: Next.js, TypeScript, Tailwind CSS
- _Machine Learning_: Python, TensorFlow/Scikit-Learn (for prediction model)

## Setup Instructions

### _Frontend Setup_

```sh
cd web
npm install
npm run dev
```

### _Backend Setup_
```sh
cd server
npm install
npm run start:backend
```

### _Load Balancer & AI Integration_
```sh
# Open a new terminal and run:
node loadBalancer.js

# Open another terminal and run:
node aiIntegration.js
```


### _ML Model Setup_
```sh
cd ml_model
pip install fastapi
pip install pickle
uvicorn app1:app --reload
```

## Screenshots Of Our Website

![Pic 1](https://github.com/user-attachments/assets/df685c8f-5edd-4174-8867-1fc41b8790d2)
![pic 2](https://github.com/user-attachments/assets/3fb150d9-42c3-4bcb-a04c-4b5dc2dc4b9e)
![pic 3](https://github.com/user-attachments/assets/0f867d5b-eef1-4f13-b530-a2a35875de25)
![pic_4](https://github.com/user-attachments/assets/6b73b72f-5d40-49c0-891c-ac5340ebef6b)
![pic 5](https://github.com/user-attachments/assets/e4637b74-ac37-436a-bdc4-bd18399ed9e1)
![pic 6](https://github.com/user-attachments/assets/30c448a7-a27f-49dc-99a0-f3be0154293b)
