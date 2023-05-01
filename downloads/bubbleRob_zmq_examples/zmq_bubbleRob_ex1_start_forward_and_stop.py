# pip install pyzmq cbor
from zmqRemoteApi import RemoteAPIClient
import time

client = RemoteAPIClient('localhost', 23000)

print('Program started')
sim = client.getObject('sim')
sim.startSimulation()
print('Simulation started')

def setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):
    leftMotor = sim.getObject('/leftMotor')
    rightMotor = sim.getObject('/rightMotor')
    sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)
    sim.setJointTargetVelocity(rightMotor, rightWheelVelocity)

# Example usage:
setBubbleRobVelocity(1.0, 1.0)
time.sleep(2)
setBubbleRobVelocity(0.0, 0.0)
