using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BambooBreizhCamp
{
    [Serializable]
    class Personne
    {
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public int Age { get; set; }
    }
}
