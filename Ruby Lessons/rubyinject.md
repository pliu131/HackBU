The Wonders of Ruby Code
Using the Enumerable#inject method, which takes a symbol as a parameter, you can turn this code:
def sum n
  solution = 0
  n.each do |n|
    solution += n
  end
end

Into:
def sum n
  (1..n).inject :+
end