# test_health_record.py

import unittest
from health_record import isHealthRecordSymmetric, test_list

class NormalCaseTest(unittest.TestCase):

    def test_odd_length_palindrome(self):
        head = test_list([1, 2, 3, 2, 1])
        self.assertTrue(isHealthRecordSymmetric(head))

    def test_even_length_palindrome(self):
        head = test_list([1, 2, 2, 1])
        self.assertTrue(isHealthRecordSymmetric(head))

    def test_not_symmetric(self):
        head = test_list([1, 2, 3, 4, 5])
        self.assertFalse(isHealthRecordSymmetric(head))


class EdgeCaseTest(unittest.TestCase):

    def test_empty_list(self):
        self.assertTrue(isHealthRecordSymmetric(None))

    def test_single_node(self):
        head = test_list([5])
        self.assertTrue(isHealthRecordSymmetric(head))

    def test_all_same_values(self):
        head = test_list([3, 3, 3])
        self.assertTrue(isHealthRecordSymmetric(head))


if __name__ == "__main__":
    unittest.main()