import os
path = '/home/viwichi_/Desktop/viwicodes/planVARIBLY/romansons/public/Images'
files = os.listdir(path)


for index, file in enumerate(files):
    os.rename(os.path.join(path, file), os.path.join(path, ''.join([str(index), '.jpg'])))

# Just changing some stuff to push.
