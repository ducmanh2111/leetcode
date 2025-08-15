# @param {String} s
# @return {Boolean}
def is_valid(s)
    brackets = {
      '[' => ']',
      '(' => ')',
      '{' => '}'
    }
    stack = []
    valid = true
    s.each_char do |character|
      if brackets.has_key?(character)
        stack << character
        next
      end

      if brackets.has_value?(character)
        if stack.last && brackets.fetch(stack.last) == character
          stack.pop
          next
        else
          valid = false
          break
        end
      end
    end

    return false unless stack.empty?

    valid
end

puts is_valid("([])")
puts is_valid("([)]")
