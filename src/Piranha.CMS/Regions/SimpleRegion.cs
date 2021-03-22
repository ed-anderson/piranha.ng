using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Regions
{
    public class SimpleRegion
    {
        [Field(Placeholder = "String")]
        public StringField String { get; set; }

        [Field(Placeholder = "Number")]
        public NumberField Number { get; set; }

        [Field(Placeholder ="Date")]
        public DateField Date { get; set; }
    }
}
