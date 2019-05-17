using System;
using System.Collections.Generic;
using System.Linq;

namespace _Practice_
{
    class Program
    {
        static void Main(string[] args)
        {
            SortedDictionary<string, string> phonebook = new SortedDictionary<string, string>();

            while (true)
            {
                string[] commands = Console.ReadLine().Split();

                for (int i = 0; i < commands.Length; i++)
                {
                    if (commands[i] == "A")
                    {
                        string name = commands[i + 1];
                        string number = commands[i + 2];

                        if (phonebook.ContainsKey(name))
                        {
                            phonebook[name] = number;
                        }
                        else
                        {
                            phonebook.Add(name, number);
                        }
                    }
                    else if (commands[i] == "S")
                    {
                        string name = commands[i + 1];
                        if (phonebook.ContainsKey(name))
                        {
                            string foundNumber = phonebook[name];
                            Console.WriteLine($"{name} -> {foundNumber}");
                        }
                        else
                        {
                            Console.WriteLine($"Contact {name} does not exist.");
                        }
                    }
                    else if (commands[i] == "ListAll")
                    {
                        
                        foreach (var contact in phonebook)
                        {
                            Console.WriteLine($"{contact.Key} -> {contact.Value}");
                        }
                    }
                    else if (commands[i] == "END")
                    {
                        return;
                    }
                }
            }
        }
    }
}
