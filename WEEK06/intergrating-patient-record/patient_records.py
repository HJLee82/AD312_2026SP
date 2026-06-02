class Patient:
    def __init__(self, ssn, age, name):
        self.ssn = ssn
        self.age = age
        self.name = name
        self.next = None

    def __str__(self):
        return f"[SSN: {self.ssn} | Name: {self.name} | Age: {self.age}]"
    
def MergeSortedLists(l1, l2):

    if not l1 and not l2:
        return None
    
    if not l1:
        return l2
    if not l2:
        return l1
    
    dummy = Patient(0,0, "dummy")
    current = dummy

    while l1 and l2:
        if l1.ssn <= l2.ssn:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next

    if l1:
        current.next = l1
    if l2:
        current.next = l2

    return dummy.next

def display(head):
    result = []
    current = head

    while current:
        print(current)
        result.append(current.ssn)
        current = current.next

    return result


def build_list(patients):
    if not patients:
        return None
    head = Patient(*patients[0])
    current = head
    for p in patients[1:]:
        current.next = Patient(*p)
        current = current.next
    return head




