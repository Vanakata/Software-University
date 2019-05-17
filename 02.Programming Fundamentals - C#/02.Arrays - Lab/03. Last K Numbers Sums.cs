using System;

namespace _3._Last_K_Numbers_Sums_Sequence
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int k = int.Parse(Console.ReadLine());
            long[] array = new long[n];
            array[0] = 1;

            for (int i = 1; i < n; i++)
            {
                long sum = 0;

                for (int j = i - 1; j >= 0 && j >= i - k; j--)
                {
                    sum = sum + array[j];
                }
                array[i] = sum;
            }
            Console.WriteLine(String.Join(" ", array));
        }
    }
}
