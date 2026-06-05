def selection_sort(arr):

    n = len(arr)

    for i in range(n):
        # assign element of first index as minimum value (Assume the current index has the minimum value)
        min_index = i

         # Search the unsorted part of the list for a smaller value
        for j in range(i + 1, n):  #assign j as comparing index with i

            if arr[j] < arr[min_index]:
                min_index = j     # update the index of minimum value

        # Swap the minimum value with the value at the current index 
        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr

