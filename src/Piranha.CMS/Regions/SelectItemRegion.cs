using Piranha.CMS.Models;
using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Regions
{
    public class SelectItemRegion
    {
        [Field(Title = "Select Item")] public DataSelectField<SimpleItem> DataSelect { get; set; }

        [Field(Title = "Why did you select this item?")]
        public StringField WhyMessage { get; set; }
    }
}