def count_tls_ips(input)
  count = 0
  input.split("\n").each do |ip|
    ip = IPv7.new(ip)
    count += ip.supports_tls ? 1 : 0
  end
  return count
end

def count_ssl_ips(input)
  count = 0
  input.split("\n").each do |ip|
    ip = IPv7.new(ip)
    count += ip.supports_ssl ? 1 : 0
  end
  return count
end

class IPv7
  def initialize(address)
    @address = address
    @strings_outside = address.split(/[\[\]]/).keep_if{|s| address.split(/[\[\]]/).index(s) % 2 == 0}
    @strings_inside = address.split(/[\[\]]/).keep_if{|s| address.split(/[\[\]]/).index(s) % 2 == 1}
  end

  def supports_tls
    @strings_inside.each do |s|
      for i in 0..s.length-4
        if is_aba(s[i..i+3])
          return false
        end
      end
    end
    @strings_outside.each do |s|
      for i in 0..s.length-4
        if is_aba(s[i..i+3])
          return true
        end
      end
    end
    return false
  end

  def supports_ssl
    @strings_outside.each do |s|
      for i in 0..s.length-3
        if is_aba(s[i..i+2])
          @strings_inside.each do |si|
            for j in 0..si.length-3
              if si[j..j+2] == s[i+1] + s[i] + s[i+1]
                return true
              end
            end
          end
        end
      end
    end
    return false
  end

  def is_aba(s)
    return (s[0] != s[1] and s == s.reverse)
  end
end

puts count_tls_ips(input)
puts count_ssl_ips(input)
