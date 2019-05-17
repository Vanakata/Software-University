using System;
using System.Linq;

namespace _19._Thea_The_Photographer
{
    class Program
    {
        static void Main(string[] args)
        {
            char[] alphabet = new char[26];
            string word = Console.ReadLine();
            int index = 0;
            int counter = 0;

            for (char i = 'a'; i <= 'z'; i++)
            {
                alphabet[index++] = i;
            }

            foreach (char letter in word)
            {
                int foundIndex = Array.IndexOf(alphabet, letter);
                Console.WriteLine($"{letter} -> {foundIndex}");
            }

        }
    }
}
