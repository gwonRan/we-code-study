def is_on_list(a, wed):
  if wed in a:
    return("True")

def get_x(a, day_of):
  return (a[3])

def add_x(a, sat):
  return a.append(sat)
  # return str(a) + str(sat)

def remove_x(a, mon):
  del a[0]
  return a
 

# \/\/\/\/\/\/\  DO NOT TOUCH AREA  \/\/\/\/\/\/\ #

days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

print("Is Wed on 'days' list?", is_on_list(days, "Wed"))

print("The fourth item in 'days' is:", get_x(days, 3))

add_x(days, "Sat")
print(days)

remove_x(days, "Mon")
print(days)


# /\/\/\/\/\/\/\ END DO NOT TOUCH AREA /\/\/\/\/\/\/\ #
