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

![WhatsApp Image 2025-03-27 at 11 39 23_87d2a3b3](https://github.com/user-attachments/assets/3f7e46cc-5424-4df2-ac15-15d6403d6d6f)
![WhatsApp Image 2025-03-27 at 12 48 36_b1c11fe2](https://github.com/user-attachments/assets/8692b5ce-67d5-4315-a825-0e45953704a8)
![WhatsApp Image 2025-03-27 at 11 39 23_293a156d](https://github.com/user-attachments/assets/48548b93-bf7f-4e22-96a7-784ce104b672)
![WhatsApp Image 2025-03-27 at 11 39 23_b11c5a3d](https://github.com/user-attachments/assets/d1fc6a0b-748a-4480-8041-bf206c962ae8)
![WhatsApp Image 2025-03-27 at 12 49 50_5e35f2b2](https://github.com/user-attachments/assets/29afb76e-3cf8-445b-84a1-7ba805cb1f4c)
![WhatsApp Image 2025-03-27 at 12 50 50_9d83d9f5](https://github.com/user-attachments/assets/12304bb7-919e-4d94-b63e-709e421cd968)
