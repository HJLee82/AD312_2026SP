import unittest
from selection_sort import selection_sort

class NormalCaseTest(unittest.TestCase):

    def test_array(self):
        arr = [33, 25, 99, 4, 11]
        self.assertEqual(selection_sort(arr), [4, 11, 25, 33, 99])

    def test_already_sorted(self):
        arr = [1, 2, 3, 4, 5]
        self.assertEqual(selection_sort(arr), [1, 2, 3, 4, 5])

    def test_reverse_sorted(self):
        arr = [5, 4, 3, 2, 1]
        self.assertEqual(selection_sort(arr), [1, 2, 3, 4, 5])


class EdgeCaseTest(unittest.TestCase):

    def test_all_same_elements(self):
        arr = [2, 2, 2]
        self.assertEqual(selection_sort(arr), [2, 2, 2])

    def test_empty_array(self):
        arr = []
        self.assertEqual(selection_sort(arr), [])

    def test_single_element(self):
        arr = [88]
        self.assertEqual(selection_sort(arr), [88])


if __name__ == "__main__":
    unittest.main()