import turtle
import time

# Screen setup
screen = turtle.Screen()
screen.bgcolor("#F0F0F0")  # Light gray background
screen.setup(700, 700)

# Turtle setup
t = turtle.Turtle()
t.speed(0)
t.pensize(2)

# Colors for spiral
colors = ['red', 'blue', 'green', 'purple'] 

zoom_factor = 1
current_direction = "right"
selected_button = None

def spiral_right():
    global zoom_factor
    t.clear()
    t.penup()
    t.goto(0, 0)
    t.pendown()
    t.setheading(0)
    for i in range(100):
        t.color(colors[i % len(colors)])
        t.forward(zoom_factor * i)
        t.right(60)

def spiral_left():
    global zoom_factor
    t.clear()
    t.penup()
    t.goto(0, 0)
    t.pendown()
    t.setheading(180)
    for i in range(100):
        t.color(colors[i % len(colors)])
        t.forward(zoom_factor * i)
        t.left(60)

def zoom_in():
    global zoom_factor
    zoom_factor += 0.5
    redraw_spiral()

def zoom_out():
    global zoom_factor
    if zoom_factor > 0.5:
        zoom_factor -= 0.5
    redraw_spiral()

def redraw_spiral():
    t.clear()
    if current_direction == "right":
        spiral_right()
    else:
        spiral_left()

def clear_screen():
    t.clear()

def exit_program():
    screen.bye()

def draw_button(x, y, width, height, label, color):
    button_turtle = turtle.Turtle()
    button_turtle.hideturtle()
    button_turtle.speed(0)
    button_turtle.penup()
    button_turtle.goto(x, y)
    button_turtle.pendown()
    button_turtle.fillcolor(color)
    button_turtle.begin_fill()
    for _ in range(2):
        button_turtle.forward(width)
        button_turtle.right(90)
        button_turtle.forward(height)
        button_turtle.right(90)
    button_turtle.end_fill()
    
    button_turtle.penup()
    button_turtle.goto(x + width / 2, y - height / 2 - 5)
    button_turtle.color("black")
    button_turtle.write(label, align="center", font=("Arial", 12, "bold"))

def animate_menu():
    menu_turtle = turtle.Turtle()
    menu_turtle.hideturtle()
    menu_turtle.penup()
    menu_turtle.goto(-280, 350)
    menu_turtle.color("black")
    menu_turtle.write("Spiral Control Menu", align="left", font=("Arial", 16, "bold"))
    time.sleep(0.5)
    setup_buttons()

def setup_buttons():
    global selected_button
    screen.tracer(0)
    button_positions = [
        (-280, 310, "Right"),
        (-200, 310, "Left"),
        (-120, 310, "Zoom In"),
        (-40, 310, "Zoom Out"),
        (40, 310, "Clear"),
        (120, 310, "Exit"),
    ]
    for x, y, label in button_positions:
        color = "#ADD8E6" if selected_button != label else "#87CEEB"  # Gradient blue colors
        draw_button(x, y, 80, 40, label, color)
    screen.tracer(1)

def on_click(x, y):
    global current_direction, selected_button
    if -280 < x < -200 and 310 > y > 270:
        current_direction = "right"
        selected_button = "Right"
        setup_buttons()
        redraw_spiral()
    elif -200 < x < -120 and 310 > y > 270:
        current_direction = "left"
        selected_button = "Left"
        setup_buttons()
        redraw_spiral()
    elif -120 < x < -40 and 310 > y > 270:
        selected_button = "Zoom In"
        setup_buttons()
        zoom_in()
    elif -40 < x < 40 and 310 > y > 270:
        selected_button = "Zoom Out"
        setup_buttons()
        zoom_out()
    elif 40 < x < 120 and 310 > y > 270:
        selected_button = "Clear"
        setup_buttons()
        clear_screen()
    elif 120 < x < 200 and 310 > y > 270:
        selected_button = "Exit"
        setup_buttons()
        exit_program()

screen.onclick(on_click)
animate_menu()
turtle.done()
