using System;
using System.Linq;

namespace Arrays_Exercises
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] words = Console.ReadLine().Split();
            string[] words1 = Console.ReadLine().Split();
            int counterRight = 0;
            int counterLeft = 0;
            int minLength = Math.Min(words.Length, words1.Length);

            for (int i = 0; i < minLength; i++)
            {
                if (words[i] == words1[i])
                {
                    counterLeft++;
                }

                if (words[words.Length - 1 - i] == words1[words1.Length - 1 - i])
                {
                    counterRight++;
                }
            }
            Console.WriteLine(Math.Max(counterRight, counterLeft));
        }
    }
}
