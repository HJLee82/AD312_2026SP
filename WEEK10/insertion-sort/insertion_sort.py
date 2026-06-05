import time
import random

def insertion_sort(arr):

    for i in range(1, len(arr)):
        key = arr[i]        # Store the current element to be inserted
        j = i - 1           # Start comparing with the previous element

        # Shift elements greater than key one position to the right
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        
        arr[j + 1] = key        # Insert key into its correct position

    return arr


def measure_time(arr):
    """Measure sorting time in seconds."""
    start = time.time()
    insertion_sort(arr.copy())
    end = time.time()
    return round(end - start, 6)


# Best case: already sorted
best_case = list(range(1000))
print(f"Best case (sorted):    {measure_time(best_case)}s")

# Worst case: reverse sorted
worst_case = list(range(1000, 0, -1))
print(f"Worst case (reversed): {measure_time(worst_case)}s")

# Average case: random
times = []
for _ in range(5):
    avg_case = random.sample(range(1000), 1000)
    times.append(measure_time(avg_case))
print(f"Average case (random): {round(sum(times)/len(times), 6)}s")