
from server_manager import mine

while(True):
    cmd = input()
    
    if cmd == 'quit':
        break

    elif cmd == 'chain':
        print('Here is the chain')

    elif cmd == 'mine' or cmd == 'prove':
        print('Mining...')
        mine()

    elif cmd == 'transactions':
        print('Transactions: ')

    