# from fastapi import FastAPI
# import pickle
# import numpy as np
# import pandas as pd
# from pydantic import BaseModel
# from typing import List

# # Load the trained model
# with open("linear_regression_model.pkl", "rb") as file:
#     model = pickle.load(file)

# # Initialize FastAPI app
# app = FastAPI()

# # Define input data schema
# class InputData(BaseModel):
#     cpu1: float
#     memory1: float
#     activeConnections1: int
#     responseTime1: int
#     cpu2: float
#     memory2: float
#     activeConnections2: int
#     responseTime2: int
#     cpu3: float
#     memory3: float
#     activeConnections3: int
#     responseTime3: int

# # Endpoint to make predictions
# @app.post("/predict")
# async def predict(data: List[InputData]):
#     # Convert input list to DataFrame
#     df = pd.DataFrame([d.dict() for d in data])

#     # Make predictions
#     predictions = model.predict(df)

#     # Return results
#     return {"predictions": predictions.tolist()}
from fastapi import FastAPI
import pickle
import numpy as np
import pandas as pd
from typing import List

# Load the trained model
with open("linear_regression_model.pkl", "rb") as file:
    model = pickle.load(file)

# Initialize FastAPI app
app = FastAPI()

# Endpoint to make predictions
@app.post("/predict")
async def predict(data: List[float]):
    # Convert 1D list to 2D array (reshape to match model input)
    num_features = 12  # Adjust according to your model
    if len(data) != num_features:
        return {"error": f"Expected {num_features} features, but got {len(data)}"}

    X = np.array(data).reshape(1, -1)  # Reshape to (1, num_features)

    # Make prediction
    prediction = model.predict(X)
    temp=prediction.tolist()[0]
    if(temp<=1):
        temp=1
    elif(temp<=2):
        temp=2
    else:
        temp=3
    return {"prediction": temp}
