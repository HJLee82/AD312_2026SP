class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


def isHealthRecordSymmetric(head):
    if not head or not head.next:
        return True
    
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    if fast:
        slow = slow.next

    prev = None
    current = slow
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node

    left = head
    right = prev
    while right:
        if left.value != right.value:
            return False
        left = left.next
        right = right.next

    return True


def test_list(values):
    if not values:
        return None
    head = Node(values[0])
    current = head
    for v in values[1:]:
        current.next = Node(v)
        current = current.next
    return head

