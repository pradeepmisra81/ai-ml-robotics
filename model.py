import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

x = np.array([100,200,300,400,500]).reshape(-1,1)
y = np.array([150,200,250,300,350])

model = LinearRegression()
model.fit(x,y)

y_pred = model.predict(x)

plt.scatter(x, y, color='blue', label='Actual')
plt.plot(x, y_pred, color='red', label='Predicted')
plt.xlabel('Size of the house (sq ft)')
plt.ylabel('Prise of the house ($)')
plt.title('Linear Regression Model')
plt.legend()
plt.show()
