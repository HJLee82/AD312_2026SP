import unittest
from io import StringIO
import sys
from order import Order, OrderLinkedList

class NormalCaseTest(unittest.TestCase):

    def setUp(self):
        self.ll = OrderLinkedList()
        self.ll.append(Order(1, "JM", "Macbook16"))
        self.ll.append(Order(2, "Tony", "Sony-Handycam"))
        self.ll.append(Order(3, "June", "Desk"))

    def test_append_order(self):
        current = self.ll.head
        self.assertEqual(current.order.order_id, 1)
        current = current.next
        self.assertEqual(current.order.order_id, 2)
        current = current.next
        self.assertEqual(current.order.order_id, 3)

    def test_reverse_multiple_orders(self):
        self.ll.reverse()
        current = self.ll.head
        self.assertEqual(current.order.order_id, 3)
        current = current.next
        self.assertEqual(current.order.order_id, 2)
        current = current.next
        self.assertEqual(current.order.order_id, 1)

    def test_double_reverse_returns_original(self):
        self.ll.reverse()
        self.ll.reverse()
        current = self.ll.head
        self.assertEqual(current.order.order_id, 1)



class EdgeCaseTest(unittest.TestCase):

    def test_empty_list_reverse(self):
        empty_ll = OrderLinkedList()
        captured = StringIO()
        sys.stdout = captured
        empty_ll.reverse()
        sys.stdout = sys.__stdout__
        self.assertIn("List is empty", captured.getvalue())

    def test_single_node_reverse(self):
        single_ll = OrderLinkedList()
        single_ll.append(Order(1, "JM", "Macbook16"))
        single_ll.reverse()
        self.assertEqual(single_ll.head.order.order_id, 1)
        self.assertIsNone(single_ll.head.next)

    def test_two_nodes_reverse(self):
        two_ll = OrderLinkedList()
        two_ll.append(Order(1, "JM", "Macbook16"))
        two_ll.append(Order(2, "Tony", "Sony-Handycam"))
        two_ll.reverse()
        self.assertEqual(two_ll.head.order.order_id, 2)
        self.assertEqual(two_ll.head.next.order.order_id, 1)


if __name__ == "__main__":
    unittest.main()