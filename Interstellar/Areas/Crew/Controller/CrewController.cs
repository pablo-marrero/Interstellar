using Interstellar.Data;
using Interstellar.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Interstellar.Areas.Crew
{
    [Area("Crew")]
    public class CrewController : Controller
    {
        ApplicationDbContext _context;


        public CrewController(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<IActionResult> Index(string crewUser)
        {
            crewUser = string.IsNullOrWhiteSpace(crewUser) ? "Douglas Hurley" : crewUser;

            var crew = await Task.Run(()=> 
                _context._JsonData.Crew
                .FirstOrDefault(x => x.Name.Equals(crewUser, StringComparison.CurrentCultureIgnoreCase))
            );

            return View(crew);
        }
        #region
        [HttpGet]
        public async Task<IActionResult> SearchData(string id)
        {
            var dataCrew = await Task.Run(() =>
                _context._JsonData.Crew.FirstOrDefault(x => x.Id == id)                
            );
            return RedirectToAction("Index", new {crewUser = dataCrew.Name});
        }
        #endregion
    }
}
