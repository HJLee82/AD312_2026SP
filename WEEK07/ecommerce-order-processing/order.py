class Order:
    def __init__(self, order_id, customer_name, order_details, extra_info=None):
        self.order_id = order_id
        self.customer_name = customer_name
        self.order_details = order_details
        self.extra_info = extra_info

class Node:
    def __init__(self, order):
        self.order = order
        self.next = None

class OrderLinkedList:
    def __init__(self):
        self.head = None

    def append(self, order):
        new_node = Node(order)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node


    def reverse(self):
        if self.head is None:
            print("List is empty.")
            return
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

    def display(self):
        if self.head is None:
            print("List is empty.")
            return
        current = self.head
        while current:
            o = current.order
            print(f"[Order ID: {o.order_id} | Customer: {o.customer_name} | Details: {o.order_details}]")
            current = current.next