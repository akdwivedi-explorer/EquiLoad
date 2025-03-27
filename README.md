## EquiLoad - A Smart Load Balancer  
EquiLoad is an intelligent, AI-assisted load balancer that optimizes traffic distribution across backend servers. Users can configure their backend servers, select from different load-balancing algorithms, and even receive AI recommendations based on their needs. Additionally, a built-in machine learning model predicts the best server based on CPU usage, memory, active connections, and response time.  

## Features  
- **Custom Backend Configuration**: Users can input their backend server URLs.  
- **Very Easy Onboarding**: Very convenient for beginners.  
- **Algorithm Selection**: Choose from multiple load-balancing algorithms.  
- **AI Assistance**: If unsure about an algorithm, users can consult AI for recommendations.  
- **ML-Based Prediction**: The system intelligently assigns requests using a machine learning model that considers:  
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
- **Round Robin**: Distributes requests sequentially.  
- **Least Connections**: Directs traffic to the server with the fewest active connections.  
- **IP Hashing**: Routes requests based on the client's IP address to maintain session persistence.  
- **AI-Assisted Recommendation**: Suggests the best algorithm based on workload.  

## Team Member names
- **Kanishk Sogani**
- **Kirtan Lakhotia**
- **Kamna Dubey**
- **Ashutosh Dwivedi**

## Technologies Used  
- **Backend**: Node.js, Express.js  
- **Frontend**: Next.js, TypeScript, Tailwind CSS  
- **Machine Learning**: Python, TensorFlow/Scikit-Learn (for prediction model)

## Setup Instructions  

### **Frontend Setup**  
```sh
cd web
npm install
npm run dev
```

### **Backend Setup**  
```sh
cd server
npm install
npm run start:backend
```

### **Load Balancer & AI Integration**  
```sh
# Open a new terminal and run:
node loadBalancer.js

# Open another terminal and run:
node aiIntegration.js
```

### **ML Model Setup**  
```sh
cd ml_model
pip install fastapi
pip install pickle
uvicorn app1:app --reload
```
### **Screenshots**


![WhatsApp Image 2025-03-27 at 12 48 37_e2c43465](https://github.com/user-attachments/assets/b2ad3e1b-1e85-4acc-9ec8-3d9b4df513cc)

![WhatsApp Image 2025-03-27 at 12 49 51_d9c29f02](https://github.com/user-attachments/assets/ab5464ca-47b3-4f8a-b20f-1e2550356d92)

![WhatsApp Image 2025-03-27 at 12 50 51_dbff6931](https://github.com/user-attachments/assets/26e97686-199f-4106-adb1-c02efce823e1)
