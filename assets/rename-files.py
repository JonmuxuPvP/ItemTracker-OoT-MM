import os

root = 'L:\\Jonmuxu\\Programming Languages\\JavaScript\\Item Tracker\\ItemTracker-OoT-MM\\assets\\ocarina-of-time'
file_names = os.listdir(root)

for file in file_names:
    new_name = file.replace(' ', '-').replace('\'', '')
    new_name = new_name.lower()
    os.rename(f'{root}\\{file}', f'{root}\\{new_name}')
