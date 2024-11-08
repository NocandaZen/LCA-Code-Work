# Question 1: Creating and Modifying Lists

# TODO: Create a list of fruits
fruit_list = ["Banana","Apple","Strawberry","Grapes","Peach"]

# TODO: Add a fruit to the end of the list
fruit_list = ["Banana","Apple","Strawberry","Grapes","Peach","Guava"] 

# TODO: Insert a fruit at the beginning of the list
fruit_list =  ["Pear", "Banana","Apple","Strawberry","Grapes","Peach" "Guava"]

# TODO: Remove a fruit from the list
modified_fruit_list =  [ "Pear", "Apple","Strawberry","Grapes","Peach" ,"Guava"]

# TODO: Print the modified list
print(modified_fruit_list)


#-------------------------------------------------------------------------
# Question 2: List Operations

# TODO: Create a list of numbers from 1 to 5
number_list = [1,2,3,4,5]


# TODO: Create a new list with each number squared
number_squared =[1,4,9,16,25]

# TODO: Find the sum and average of the original numbers
sum_of_numbers = sum(number_list)
average_of_numbers = sum_of_numbers/len(number_list)

# TODO: Print the results

print(sum_of_numbers)
print(average_of_numbers)

#-------------------------------------------------------------------------
# Question 3: Creating and Modifying Dictionaries

# TODO: Create a dictionary of countries and their capitals
country_capitals={
 "South_africa": "Cape Town",
 "Russia" : "Moscow",
 "Japan" :"Tokyo",
 "Ghana" : "Accra" 
}
# TODO: Add a new country-capital pair
country_capitals["Kenya"] = "Nairobi"

# TODO: Update the capital of an existing country
country_capitals["South_africa"] = "Bloemfontein"

# TODO: Remove a country-capital pair
country_capitals.pop("Japan")

# TODO: Print the modified dictionary
print(country_capitals)

#-------------------------------------------------------------------------
# Question 4: Dictionary Operations

# TODO: Create a dictionary of fruit colors
fruit_colours={
    "Grape" : "Purple",
    "Pineaple" : "Yellow",
    "Apple" : "Green",
    "Blueberry" : "Blue"}
# TODO: Print all the fruits (keys)
for fruit in fruit_colours.keys():
    print(fruit)

# TODO: Print all the colors (values)
for colour in fruit_colours.values():
    print(colour)
# TODO: Print each fruit and its color
for fruit,colour in fruit_colours.items():
    print(f"{fruit} = {colour}")

# TODO: Check if a fruit is in the dictionary and print its color
def check_fruit_colour(fruit):
 if fruit in fruit_colours:
     print(f"the {fruit} is {fruit_colours [fruit]} in colour.")
 else:
    print(f"the {fruit} is unavailable, sorry.")
check_fruit_colour("Grape")