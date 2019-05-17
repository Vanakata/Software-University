using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _04.Fix_Emails
{
    class Program
    {
        static void Main(string[] args)
        {
            Dictionary<string, string> output = new Dictionary<string, string>();

            while (true)
            {
                string names = Console.ReadLine();
                if (names == "stop")
                {
                    foreach (var email in output)
                    {
                        Console.WriteLine($"{email.Key} -> {email.Value}");
                    }
                    return;
                }
                string emails = Console.ReadLine();
                if (!output.ContainsKey(emails))
                {
                    if (emails.EndsWith("us") || emails.EndsWith("uk"))
                    {
                        continue;
                    }
                    else
                    {
                        output.Add(names, emails);
                    }

                }

            }
        }
    }
}
