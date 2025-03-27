# EquiLoad - A Smart Load Balancer

EquiLoad is an intelligent, AI-assisted load balancer that optimizes traffic distribution across backend servers. Users can configure their backend servers, select from different load-balancing algorithms, and even receive AI recommendations based on their needs. Additionally, a built-in machine learning model predicts the best server based on CPU usage, memory, active connections, and response time.

## Features

- **Custom Backend Configuration**: Users can input their backend server URLs.
- **Algorithm Selection**: Choose from multiple load-balancing algorithms.
- **AI Assistance**: If unsure about an algorithm, users can consult AI for recommendations.
- **ML-Based Prediction**: The system intelligently assigns requests using a machine learning model that considers:
  - CPU Usage
  - Memory Consumption
  - Active Connections
  - Response Time

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/akdwivedi-explorer/EquiLoad.git
   cd EquiLoad
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```

## Usage

1. Enter your backend server URLs.
2. Select a load-balancing algorithm or ask AI for guidance.
3. Enable ML-based prediction for automated decision-making.
4. Monitor server performance and request distribution.

## Load Balancing Algorithms Supported

- **Round Robin**: Distributes requests sequentially.
- **Least Connections**: Directs traffic to the server with the fewest active connections.
- **Weighted Round Robin**: Assigns weight to servers based on capacity.
- **Response Time-Based**: Prefers servers with the fastest response time.
- **AI-Assisted Recommendation**: Suggests the best algorithm based on workload.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Machine Learning**: Python, TensorFlow/Scikit-Learn (for prediction model)

## Contributing

We welcome contributions! Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.

## Contact

For queries, reach out at [akumardwivedi77@gmail.com](mailto:akumardwivedi77@gmail.com).

