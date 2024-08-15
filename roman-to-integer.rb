# @param {String} s
# @return {Integer}
def roman_to_int(s)
  symbol_to_value = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  length = s.length
  return symbol_to_value[s.to_sym] if length == 1

  result = 0
  parts = []
  s.each_char.with_index do |char, index|
    num = symbol_to_value[char.to_sym]
    if index == 0
      parts << num
      next
    end
    puts "#{index}: #{num}: #{parts}"
    previous_num = symbol_to_value[s[index - 1].to_sym]

    if num <= previous_num
      result += parts.sum
      parts = [num]
    else
      result += (num - parts.sum)
      parts = []
    end
  end
  result += parts.sum if parts.length > 0

  result
end

roman_to_int('III')
