using System.Collections.Generic;
using System.Linq;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Models
{
    public class SimpleItem
    {
        private static readonly List<SimpleItem> SimpleItems = new List<SimpleItem>
        {
            new()
            {
                Id = 1,
                Label = "One"
            },
            new()
            {
                Id = 2,
                Label = "Two"
            },
            new()
            {
                Id = 3,
                Label = "Three"
            }
        };
        
        public int Id { get; set; }
        public string Label { get; set; }

        static SimpleItem GetById(string id)
        {
            return SimpleItems.FirstOrDefault(x => x.Id.ToString() == id);
        }

        static IEnumerable<DataSelectFieldItem> GetList()
        {
            return SimpleItems.Select(x => new DataSelectFieldItem
            {
                Id = x.Id.ToString(),
                Name = x.Label
            });
        }
    }
}