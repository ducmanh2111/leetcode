arr = [5, 2, -1, 0, 3]
k = 2
def max_sum(arr, k)
  n = arr.length
  if (k > n)
    puts "Invalid!"
    return
  end

  window_sum = 0
  (0...k).each do |index|
    window_sum += arr[index]
  end

  max_sum = window_sum

  (k...n).each do |i|
    window_sum = arr[i] - arr[i - k]
    max_sum = [max_sum, window_sum].max
  end

  return max_sum
end

puts max_sum(arr, k)
