using System.Collections.Generic;
using System.Linq;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Models
{
    public class SimpleItem
    {
        public int Id { get; set; }
        public string Label { get; set; }

        static IEnumerable<DataSelectFieldItem> GetList()
        {
            var simpleItems = new List<SimpleItem>
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

            return simpleItems.Select(x => new DataSelectFieldItem
            {
                Id = x.Id.ToString(),
                Name = x.Label
            });
        }
    }
}