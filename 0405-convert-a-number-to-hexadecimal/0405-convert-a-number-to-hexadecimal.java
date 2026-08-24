class Solution {
    public String toHex(int num) {

         if (num == 0) {
            return "0";
        }

        char[] hexDigits = {'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'};
        String result = "";

        for (int i = 0; i < 8 && num != 0; i++) {
            int lastFourBits = num & 15;              // same as n & 0xF
            result = hexDigits[lastFourBits] + result;
            num = num >>> 4;                            // unsigned shift, fills with 0s
        }

        return result;
    }
    }