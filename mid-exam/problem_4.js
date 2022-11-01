username = input()
command = input()
 
while command:
    command = command.split()
    if command[0] == "Letters":
        if command[1] == "Lower":
            username = username.lower()
            print(username)
        if command[1] == "Upper":
            username = username.upper()
            print(username)
    if command[0] == "Reverse":
        start_index = int(command[1])
        end_index = int(command[2])
        substring_to_be_reversed = ''
        if 0 <= start_index < len(username) and 0 <= end_index < len(username):
            substring_to_be_reversed = username[start_index:end_index+1]
            substring_to_be_reversed = substring_to_be_reversed[::-1]
            print(substring_to_be_reversed)
        else:
            continue
    if command[0] == "Substring":
        substr = command[1]
        if substr in username:
            username = username.replace(substr, '')
            print(username)
        else:
            print(f"The username {username} doesn't contain {substr}.")
 
    if command[0] == "Replace":
        character = command[1]
        username = username.replace(character, "-")
        print(username)
    if command[0] == "IsValid":
        char = command[1]
        if char in username:
            print("Valid")
        else:
            print(f"{char} must be contained in your username.")
    if command == "Registration":
        break
    command = input()