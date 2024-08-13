def is_palindrome(x)
  return false if (x < 0 || (x !=0 && x % 10 == 0))

  half = 0
  while(half < x) do
    half = (half * 10) + (x % 10)
    x = x / 10
  end

  (half == x) || (half / 10 == x)
end

p is_palindrome(-1)
p is_palindrome(10)
p is_palindrome(2332)
p is_palindrome(232)
