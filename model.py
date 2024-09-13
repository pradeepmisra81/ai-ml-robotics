from sklearn2pmml import sklearn2pmml
from sklearn2pmml.pipeline import PMMLPipeline
from sklearn.linear_model import LogisticRegression
import os
import time

display.print_sqlmr_query = True
passwd = "alice"
uid = "alice"

con = create_context(host="server@mydomain.com", username=uid, password=passwd)
con

train_df = DataFrame.from_query("select * from iris_train")
traid_pd = train_df.to_pandas()
traid_pd
type(traid_pd)

X = traid_pd[['sepal_length','sepal_width','petal_length', 'petal_width' ]]
y=traid_pd[['species']]

#pipeline
pipeline = PMMLPipeline([
     ("classifier", LogisticRegression(random_state=0))
     ])

pipeline.fit(X,y)
sklearn2pmml(pipeline,"../sql/iris_db_glm_model.pmml",with_repr=True)