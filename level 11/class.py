age = int(input("შეიყვანეთ თქვენი ასაკი: "))
driving_experience = int(input("რამდენი ხანია რაც მანქანას ატარებთ?: "))

if age < 18:
    print("თქვენ არ გაქვთ მართვის მოწმობის აღების უფლება, რადგან 18 წლის არ ხართ")
elif age >= 18 and driving_experience < 1:
    print("თქვენ არ გაქვთ მართვის მოწმობის აღების უფლება, რადგან მინიმუმ 1 წლიანი გამოცდილება უნდა გქონდეთ.")
else:
    print("თქვენ გაქვთ მართვის მოწმობის აღების უფლება.")

