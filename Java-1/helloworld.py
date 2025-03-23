from datetime import datetime

def get_user_name():
    while True:
        try:
            name = input("Please enter your name: ").strip()
            if name:  # Check for non-empty input after stripping whitespace
                return name
            else:
                print("Error: Name cannot be empty. Please try again.")
        except KeyboardInterrupt:
            print("\nProgram interrupted by user. Exiting...")
            exit()

if __name__ == "__main__":
    # Print initial greeting
    print("Hello, World!")
    
    # Get user's name with validation
    user_name = get_user_name()
    
    # Personalized greeting
    print(f"\nHello, {user_name}! Welcome to the program.")
    
    # Get and display current date/time
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"Current date and time: {current_time}")