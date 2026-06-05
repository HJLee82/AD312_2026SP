
def bubble_sort(arr):

    n = len(arr)

    for i in range(n):
        # largest value moves to the end each passing
        for j in range(0, n - i - 1):
            # compare adjacent elements
            if arr[j] > arr[j + 1]:
                 # swap if they are in the wrong order
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


def bubble_sort_optimized(arr):
    # Stops early if no swaps occur during a pass.

    n = len(arr)

    for i in range(n):
        swapped = False     # track swap is occured or not during this pass

        for j in range(0, n - i - 1):
            # compare adjacent elements
            if arr[j] > arr[j + 1]:
                # swap if they are in the wrong order
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

                swapped = True

        # if no swap, stop the processing (the array was already sorted)
        if not swapped:
            break

    return arr