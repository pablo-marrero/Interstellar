using Interstellar.Data;
using Microsoft.AspNetCore.Mvc;

namespace Interstellar.Areas.Technology
{
    [Area("Technology")]
    public class TechnologyController : Controller
    {

        private readonly ApplicationDbContext _context;

        public TechnologyController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index(string technology)
        {
            technology = String.IsNullOrWhiteSpace(technology) ? "Launch vehicle" : technology;
            var technologyData = await Task.Run(() =>
            
                _context._JsonData.Technology.FirstOrDefault(x => x.Name.Equals(technology, StringComparison.CurrentCultureIgnoreCase))
            );

            return View(technologyData);
        }

        public async Task<IActionResult> SearchData(string technology)
        {
            var data = await Task.Run(() =>
                _context._JsonData.Technology.FirstOrDefault(x=> x.Name.Equals(technology, StringComparison.CurrentCultureIgnoreCase))
            ); 
            
            return RedirectToAction("Index", new {technology = data.Name});
        }
    }
}
