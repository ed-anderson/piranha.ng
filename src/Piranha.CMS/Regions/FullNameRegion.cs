using Piranha.Extend;
using Piranha.Extend.Fields;

namespace Piranha.CMS.Regions
{
    public class FullNameRegion
    {
        [Field(Title = "First Name")] public StringField FirstName { get; set; }

        [Field(Title = "Last Name")] public StringField LastName { get; set; }
    }
}