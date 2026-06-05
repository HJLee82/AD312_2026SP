import unittest
from bubble_sort import bubble_sort, bubble_sort_optimized

class NormalCaseTest(unittest.TestCase):

    def test_random_array(self):
        arr = [33, 25, 99, 4, 11]
        result = bubble_sort(arr)
        print(f"\ntest_random_array: {result}")
        self.assertEqual(result, [4, 11, 25, 33, 99])

    def test_already_sorted(self):
        arr = [1, 2, 3, 4, 5]
        result = bubble_sort(arr)
        print(f"\ntest_already_sorted: {result}")
        self.assertEqual(result, [1, 2, 3, 4, 5])

    def test_reverse_sorted(self):
        arr = [5, 4, 3, 2, 1]
        result = bubble_sort(arr)
        print(f"\ntest_reverse_sorted: {result}")
        self.assertEqual(result, [1, 2, 3, 4, 5])


class EdgeCaseTest(unittest.TestCase):

    def test_all_same_elements(self):
        arr = [3, 3, 3]
        result = bubble_sort(arr)
        print(f"\ntest_all_same_elements: {result}")
        self.assertEqual(result, [3, 3, 3])

    def test_empty_array(self):
        arr = []
        result = bubble_sort(arr)
        print(f"\ntest_empty_array: {result}")
        self.assertEqual(result, [])

    def test_single_element(self):
        arr = [42]
        result = bubble_sort(arr)
        print(f"\ntest_single_element: {result}")
        self.assertEqual(result, [42])


class OptimizedCaseTest(unittest.TestCase):

    def test_optimized_already_sorted(self):
        arr = [1, 2, 3, 4, 5]
        result = bubble_sort_optimized(arr)
        print(f"\ntest_optimized_already_sorted: {result}")
        self.assertEqual(result, [1, 2, 3, 4, 5])

    def test_optimized_random(self):
        arr = [33, 25, 99, 4, 11]
        result = bubble_sort_optimized(arr)
        print(f"\ntest_optimized_random: {result}")
        self.assertEqual(result, [4, 11, 25, 33, 99])


if __name__ == "__main__":
    unittest.main(verbosity=2)