using Interstellar.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Interstellar.Data
{
    public class ApplicationDbContext
    {
        private readonly string _filePath;

        public JsonData _JsonData { get;  set; }

        public class JsonData
        {
            public List<Crew> Crew { get; set; } = new List<Crew>();
            public List<Destinations> Destinations { get; set; } = new List<Destinations>();
            public List<Technology> Technology { get; set; } = new List<Technology>();
        }


        public ApplicationDbContext()
        {
            _filePath = Path.Combine(Directory.GetCurrentDirectory(), "data.json");
            _JsonData = new JsonData();
        }

        public async Task LoadJsonData()
        {
            if (!File.Exists(_filePath))
            {
                return ;
            }
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true, 
                AllowTrailingCommas = true 
            };
            var json = await File.ReadAllTextAsync(_filePath);
            _JsonData= JsonSerializer.Deserialize<JsonData>(json,options) ?? new JsonData();
        }

    }
}