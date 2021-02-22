# TODO

1. Deployment
	* environment variables for db and run server or serverless
	* stages/aliases in API Gateway and Lambda


# DEPLOY

This is to be deployed in an AWS lambda function, and reached through API Gateway properly set.

## First time deploy:

Configuration to do in AWS:

1. Create a lambda function from the UI, which also creates the role. ZIP the project (`zip lambda.zip . -r -x "database/*"`) and upload it through the UI.
2. Create API Gateway:
	- create a route `/` with the `ANY` method
	- create a resource name proxy with `{proxy+}` as PATH
	- deploy API
3. Internet Access, to access Atlas MongoDB (you can give access to 0.0.0.0/0 temporaly to test what we do works)
- The easiest way: create a new VPC with the Wizard from the VPC dashboard. Probably need to create an elastic IP first.
	* Need to associate the lambda to a private subnet, that is inside a VPC with another public subnet with a NAT gateway
4. Add Elastic IP to the mongoDB atlas network access

