using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bamboo.Prevalence;

namespace BambooBreizhCamp
{
    class RequeteNombrePersonnes : IQuery
    {
        public object Execute(object system)
        {
            return (system as Stockage).ListePersonnes.Count;
        }
    }
}
