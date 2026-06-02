import unittest
from patient_records import Patient, MergeSortedLists, build_list, display

class NormalCaseTest(unittest.TestCase):

    def test_merge_two_sorted_lists(self):
        l1 = build_list([(101, 29, "Claire"), (203, 59, "Bob"), (305, 30, "Tony")])
        l2 = build_list([(102, 33, "Dan"), (201, 18, "KJ"), (404, 50, "Luffy")])
        merged = MergeSortedLists(l1, l2)
        self.assertEqual(display(merged), [101, 102, 201, 203, 305, 404])

    def test_merge_with_duplicate_ssn(self):
        l1 = build_list([(101, 29, "Claire"), (203, 59, "Bob")])
        l2 = build_list([(101, 29, "Claire"), (305, 30, "Tony")])
        merged = MergeSortedLists(l1, l2)
        self.assertEqual(display(merged), [101, 101, 203, 305])

    def test_merge_different_lengths(self):
        l1 = build_list([(101, 29, "Claire")])
        l2 = build_list([(102, 33, "Dan"), (201, 18, "KJ"), (404, 50, "Luffy")])
        merged = MergeSortedLists(l1, l2)
        self.assertEqual(display(merged), [101, 102, 201, 404])


class EdgeCaseTest(unittest.TestCase):

    def test_one_empty_list(self):
        l1 = build_list([(101, 29, "Claire"), (203, 59, "Bob")])
        merged = MergeSortedLists(l1, None)
        self.assertEqual(display(merged), [101, 203])

    def test_both_empty_lists(self):
        result = MergeSortedLists(None, None)
        self.assertIsNone(result)

    def test_single_node_each(self):
        l1 = build_list([(101, 29, "Claire")])
        l2 = build_list([(102, 33, "Dan")])
        merged = MergeSortedLists(l1, l2)
        self.assertEqual(display(merged), [101, 102])


if __name__ == "__main__":
    unittest.main()