using System;
using System.Linq;

namespace _06._Max_Sequence_of_Equal_Elements
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] inputArr = Console.ReadLine()
                .Split()
                .Select(int.Parse)
                .ToArray();

            int digit = 0;
            int max = 1;

            for (int i = 0; i < inputArr.Length - 1; i++)
            {
                int currentIndex = inputArr[i];
                int longestPair = 0;

                for (int j = i; j < inputArr.Length; j++)
                {
                    if (currentIndex == inputArr[j])
                    {
                        longestPair++;
                        if (max < longestPair)
                        {
                            max = longestPair;
                            digit = currentIndex;
                        }
                    }
                    else
                    {
                        break;
                    }
                }
            }

            for (int i = 0; i < max; i++)
            {
                Console.Write(digit + " ");
            }
            Console.WriteLine();
        }
    }
}
