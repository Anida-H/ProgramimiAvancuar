#Refactor this code 

#def f(l, t):
#     r = []
#     for i in range(len(l)):
#         if l[i]["t"] == t:
#             r.append(l[i])
#     return r
 
def filter_items(items, item_type):
     filtered_items = []
     for item in items:
         if item["t"] == item_type:
             filtered_items.append(item)
     return filtered_items
 
 # Usage example:
items = [
     {"id": 1, "t": "book", "price": 20},
     {"id": 2, "t": "food", "price": 10},
     {"id": 3, "t": "book", "price": 15},
     {"id": 4, "t": "food", "price": 5}
 ]
books = filter_items(items, "book")
print(books)  # Output: [{"id": 1, "t": "book", "price": 20}, {"id": 3, "t": "book", "price": 15}]