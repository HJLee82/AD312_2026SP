import unittest
from insertion_sort import insertion_sort

class NormalCaseTest(unittest.TestCase):

    def test_random_array(self):
        arr = [33, 25, 99, 4, 11]
        result = insertion_sort(arr)
        print(f"\ntest_random_array: {result}")
        self.assertEqual(result, [4, 11, 25, 33, 99])

    def test_already_sorted(self):
        arr = [1, 2, 3, 4, 5]
        result = insertion_sort(arr)
        print(f"\ntest_already_sorted: {result}")
        self.assertEqual(result, [1, 2, 3, 4, 5])

    def test_reverse_sorted(self):
        arr = [5, 4, 3, 2, 1]
        result = insertion_sort(arr)
        print(f"\ntest_reverse_sorted: {result}")
        self.assertEqual(result, [1, 2, 3, 4, 5])


class EdgeCaseTest(unittest.TestCase):

    def test_all_same_elements(self):
        arr = [7, 7, 7]
        result = insertion_sort(arr)
        print(f"\ntest_all_same_elements: {result}")
        self.assertEqual(result, [7, 7, 7])

    def test_empty_array(self):
        arr = []
        result = insertion_sort(arr)
        print(f"\ntest_empty_array: {result}")
        self.assertEqual(result, [])

    def test_single_element(self):
        arr = [42]
        result = insertion_sort(arr)
        print(f"\ntest_single_element: {result}")
        self.assertEqual(result, [42])


class StabilityTest(unittest.TestCase):

    def test_stability(self):
        """relative relationship between same value"""
        arr = [(3, 'a'), (1, 'b'), (3, 'c'), (2, 'd')]
        result = insertion_sort(arr)
        print(f"\ntest_stability: {result}")
        # (3,'a') must precede (3,'c')
        keys = [x[0] for x in result]
        self.assertEqual(keys, [1, 2, 3, 3])
        three_items = [x for x in result if x[0] == 3]
        self.assertEqual(three_items, [(3, 'a'), (3, 'c')])


if __name__ == "__main__":
    unittest.main(verbosity=2)