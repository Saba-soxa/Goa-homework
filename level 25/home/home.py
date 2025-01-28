import random

def guess_number():
    print("Please think of a number from 1 to 100!")
    low, high = 1, 100
    attempts = 3
    
    for _ in range(attempts):
        guess = random.randint(low, high)
        print(f"Number guessed by the program: {guess}")
        feedback = input("If the number is high, enter 'High', if low - 'Low', if correct - 'Correct':")
        
        if feedback == "corect":
            print("The program guessed! The game is over.")
            break
        elif feedback == "high":
            high = guess - 1
        elif feedback == "low":
            low = guess + 1
        else:
            print("Please enter the correct answer (high, low, correct).")
    else:
        print("The program failed to guess in three attempts!")

guess_number()
