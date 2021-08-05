Feature: Test the todomvc website

@TC1
Scenario: Add a todo list
Given Open "todomvc" website

When User type "Stand up" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Stand up" is added to the todo list

And User type "Technical grooming session" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Technical grooming session" is added to the todo list

And User type "Demo call" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Demo call" is added to the todo list

@TC2
Scenario: Delete a specific item from todo list
Given Open "todomvc" website

When User type "Sprint refinement call" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Sprint refinement call" is added to the todo list

And User type "QA meet up" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "QA meet up" is added to the todo list

When User remove the "QA meet up" from the todos list
Then User verify that "QA meet up" is removed from todos list

@TC3
Scenario: Delete all items from todo list
Given Open "todomvc" website

When User type "Retro meeting" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Retro meeting" is added to the todo list

And User type "Technical Jamming" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Technical Jamming" is added to the todo list

When User type "Sprint Closure" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Sprint Closure" is added to the todo list

When User remove the "All items" from the todos list
Then User verify that "All items" is removed from todos list

@TC4
Scenario: Clear a specifc item from todo list using Clear Completed
Given Open "todomvc" website

When User type "L1 technical round" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "L1 technical round" is added to the todo list

When User type "L2 technical round" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "L2 technical round" is added to the todo list

When User type "L3 HR round" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "L3 HR round" is added to the todo list

When User select "L1 technical round" from todo
And User click on "Clear completed" button
Then User verify that "L1 technical round" is removed from todos list

@TC5
Scenario: Complete a specifc item from todo list using Completed button.
Given Open "todomvc" website

When User type "Task1" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Task1" is added to the todo list

When User type "Task2" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Task2" is added to the todo list

When User select "Task1" from todo
And User click on "Completed" button
Then User Verify that "Task1" is only visible todo list


@TC6
Scenario: Check Active button functionality
Given Open "todomvc" website

When User type "Task3" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Task3" is added to the todo list

When User type "Task4" in the "todos" text field
And User Press the keyboard enter
Then User Verify that "Task4" is added to the todo list

When User select "Task3" from todo
And User click on "Completed" button
And User click on "Active" button
Then User verify that "Task3" is removed from todos list