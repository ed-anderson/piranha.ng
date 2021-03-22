using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Regions
{
    public class ColouredTextRegion
    {
        [Field]
        public TextField Text { get; set; }

        [Field]
        public ColorField Colour { get; set; }
    }
}
