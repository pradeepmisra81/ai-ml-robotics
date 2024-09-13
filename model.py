import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

x = np.array([100,200,300,400,500]).reshape(-1,1)
y = np.array([150,200,250,300,350])

model = LinearRegression()
model.fit(x,y)

y_prod = model.predict(x)
